import { query } from '@/lib/db';
import multer from 'multer';
import path from 'path';
import fs from 'fs';
import nodemailer from 'nodemailer';
import { jsPDF } from 'jspdf';
import 'jspdf-autotable';

// Ensure upload directory exists
const filepath = process.env.Uploadpathdetail || path.resolve('./public');
const uploadDir = path.join(filepath, 'uploads', 'students');
if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir, { recursive: true });
}

const storage = multer.diskStorage({
    destination: (req, file, cb) => cb(null, uploadDir),
    filename: (req, file, cb) => cb(null, `${Date.now()}-${Math.round(Math.random() * 1e9)}${path.extname(file.originalname)}`),
});
const upload = multer({ storage });

export const config = { api: { bodyParser: false } };

const generateInvoice = async (data) => {
    const doc = new jsPDF();

    // Header
    doc.setFont("helvetica", "bold");
    doc.setFontSize(18);
    doc.setTextColor(3, 72, 84); // #034854 color
    doc.text('Stock Brain Institute of Financial Market', 105, 20, null, null, 'center');

    doc.setFontSize(12);
    doc.setTextColor(0, 0, 0);
    doc.text('A-78, Sector-2, Noida', 105, 30, null, null, 'center');

    // Receipt Details
    doc.setFontSize(14);
    doc.setTextColor(227, 87, 40); // #E35728 color
    doc.text('Payment Receipt', 105, 50, null, null, 'center');

    doc.setFontSize(12);
    doc.setTextColor(0, 0, 0);
    doc.text(`Date: ${new Date().toLocaleDateString()}`, 20, 60);
    doc.text(`Receipt No.: ${data.receiptNumber}`, 160, 60);

    // Student Details
    doc.text(`Student Name: ${data.studentName}`, 20, 70);
    doc.text(`Address: ${data.studentAddress}`, 20, 80);
    doc.text(`Email: ${data.email}`, 20, 90);

    // Payment Table
    doc.autoTable({
        startY: 100,
        head: [['Description', 'Pay Type', 'Installment', 'Total']],
        body: [
            ['Course Fee', data.paymentType, `${data.installmentAmountNum} * ${data.installmentType || 0}`, `${data.courseFee} INR`],
            ['Dues', '-', data.installmentType - 1, `${data.duesFee || 0} INR`],
            ['Payment Received', data.paymentType, '1', `${data.installmentAmountNum || 0} INR`],
        ],
        theme: 'grid',
        headStyles: { fillColor: [3, 72, 84], textColor: 255, fontSize: 12 },
        bodyStyles: { textColor: [0, 0, 0], fontSize: 10 },
        alternateRowStyles: { fillColor: [220, 240, 240] },
        styles: { cellPadding: 5, fontSize: 10 },
    });

    const finalY = doc.lastAutoTable.finalY || 120;

    // Remarks Section (Proper Alignment)
    doc.setFontSize(10);
    doc.setTextColor(0, 0, 0);
    doc.setFont("helvetica", "normal"); // Ensure a standard font
    doc.text('Remarks and Notes:', 20, finalY + 10);
    
    const remarks = [
        'I agree to abide by the course guidelines and ethics.',
        'Paid installment within 1 week.',
        'Registration valid for 3 months.',
        'Fees once paid are non-refundable under any circumstances.'
    ];
    
    let yOffset = finalY + 18;
    remarks.forEach((remark) => {
        doc.text(remark, 20, yOffset, { maxWidth: 170 }); // Ensures proper word spacing
        yOffset += 6; // Adjust spacing for proper line breaks
    });

    // Footer (Team SBIFM)
    doc.setFontSize(14);
    doc.setTextColor(227, 87, 40); // #E35728 color
    doc.text('Team SBIFM', 105, yOffset + 20, null, null, 'center');

    // Fetch and Add Logo Below "Team SBIFM"
    const imageUrl = 'https://www.stockbrain.in/assets/images/logo-6.png';
    try {
        const response = await fetch(imageUrl);
        const buffer = await response.arrayBuffer();
        const logoBase64 = `data:image/png;base64,${Buffer.from(buffer).toString('base64')}`;
        doc.addImage(logoBase64, 'PNG', 80, yOffset + 25, 50, 15); // Adjusted size
    } catch (error) {
        console.error('Error fetching logo:', error);
    }

    // Contact Info Below Logo
    doc.setFontSize(10);
    doc.setTextColor(0, 0, 0);
    doc.text('For Further Query Contact Us: 99907-99940', 105, yOffset + 45, null, null, 'center');

    // Save the PDF
    const invoicePath = path.join(__dirname, `${data.receiptNumber}_invoice.pdf`);
    doc.save(invoicePath);
    return invoicePath;
};


// Function to send invoice via email
const sendInvoiceEmail = async (email, invoicePath, studentData) => {
    const transporter = nodemailer.createTransport({
        host: 'mail.stockbrain.in',
        port: 587,
        secure: false,
        auth: { user: '', pass: '' },
        tls: { rejectUnauthorized: false },
    });

    let mailOptions = {
        from: 'info@stockbrain.in',
        to: email,
        subject: 'Admission Invoice',
        text: 'Please find attached your admission invoice.',
        attachments: [{ filename: 'invoice.pdf', path: invoicePath }],
    };

    const ownerMailOptions = {
        from: 'info@stockbrain.in',
        to: 'sanjeevjustnoida@gmail.com',
        subject: 'New User Admission on StockBrain!',
        text: `A new admission has been registered. Student Details:\n\nName: ${studentData.studentName}\nEmail: ${studentData.email}\nContact: ${studentData.contactNumber}\nRegistration ID: ${studentData.registrationNumber}`,
    };

    await transporter.sendMail(mailOptions);
    await transporter.sendMail(ownerMailOptions);
};

// API Route for form submission
export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method Not Allowed' });
    }

    upload.fields([{ name: 'studentPhoto', maxCount: 1 }, { name: 'onlinepaymentrecipt', maxCount: 1 }])(req, res, async (err) => {

        if (err) {
            return res.status(500).json({ error: 'File Upload Error', details: err.message });
        }

        try {

            const {
                studentName,
                studentAddress,
                contactNumber,
                email,
                paymentType,
                registrationNumber,
                paymentMode,
                courseFee,
                installmentAmount,
                installmentType,
                adharCard
            } = req.body;

            if (!studentName || !contactNumber || !email) {
                return res.status(400).json({ error: 'Missing required fields' });
            }

            const installmentAmountNum = installmentAmount ? parseFloat(installmentAmount) : 0;
            const duesFee = courseFee - installmentAmountNum;
            const studentPhotoPath = req.files?.studentPhoto?.[0]?.filename
                ? `/uploads/students/${req.files.studentPhoto[0].filename}`
                : "";

            const onlinepaymentreciptPath = req.files?.onlinepaymentrecipt?.[0]?.filename
                ? `/uploads/students/${req.files.onlinepaymentrecipt[0].filename}`
                : "";


            const sqlquery = `INSERT INTO admission_form (std_name, std_reg_id, std_contact_number, std_email_id, paymentType, studentPhoto, installmentAmount, std_address, std_course_fee, paid_amount, std_dues,paymentMode, installmentType, adharCard,onlinepaymentrecipt, date_updated) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?,?, ?, NOW())`;

            const params = [studentName, registrationNumber, contactNumber, email, paymentType, studentPhotoPath, installmentAmountNum, studentAddress, courseFee, installmentAmountNum, duesFee, paymentMode, installmentType, adharCard, onlinepaymentreciptPath];

            const response = await query({ query: sqlquery, values: params });
            const receiptNumber = response.insertId;
            if (response.insertId !== 0) {
                const invoicePath = await generateInvoice({ studentName, installmentType, registrationNumber, contactNumber, email, paymentType, installmentAmountNum, studentAddress, courseFee, duesFee, receiptNumber });
                await sendInvoiceEmail(email, invoicePath, { studentName, email, contactNumber, registrationNumber });
            }

            res.status(200).json({ message: 'Admission data added successfully. Invoice sent to email.', data: response });
        } catch (error) {
            res.status(500).json({ result: { status: 0, msg: error.message } });
        }
    });
}

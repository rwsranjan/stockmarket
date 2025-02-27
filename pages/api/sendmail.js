import nodemailer from 'nodemailer';

export default async function handler(req, res) {
   

    const { fname, lname, email, mobile, message, questiontype } = req.body;

    if (!fname || !lname || !email || !message) {
        return res.status(400).json({ result: { status: 400, msg: 'Missing required fields' } });
    }

    try {
        // Create nodemailer transporter with custom SMTP configuration
        const transporter = nodemailer.createTransport({
            host: 'mail.stockbrain.in', // Your SMTP server address
            port: 587, // Use 587 for TLS or 25 for non-encrypted connections
            secure: false, // Set to true if using SSL (for port 465)
            auth: {
                user: 'info@stockbrain.in',
                pass: '=gn=Uq4R_4$l',
            },
            tls: {
                rejectUnauthorized: false, // For self-signed certificates
            },
        });

        // Email options for the owner
        const mailOptionsForOwner = {
            from: 'info@stockbrain.in',
            to: 'sanjeevjustnoida@gmail.com',
            subject: 'New Contact Us Submission from StockBrain Website',
            text: `
                You have received a new contact submission from StockBrain:
                Name: ${fname} ${lname}
                Email: ${email}
                Number: ${mobile}
                Message: ${message}
                Question: ${questiontype}
                Please respond to the inquiry as soon as possible.
            `,
        };

        // Email options for the user
        const mailOptionsForUser = {
            from: 'info@stockbrain.in',
            to: email,
            subject: 'Thank You for Contacting StockBrain',
            text: `
                Hi ${fname} ${lname},

                Thank you for reaching out to StockBrain! We have received your message and will get back to you as soon as possible.

                Here’s a summary of your submission:
                
                Name: ${fname} ${lname}
                Email: ${email}
                Number: ${mobile}
                Message: ${message}

                If you have any urgent questions, feel free to reply to this email or contact us at info@stockbrain.in or 9990799940.

                Best regards,
                StockBrain Team
            `,
        };

        // Send emails
        await transporter.sendMail(mailOptionsForOwner);
        await transporter.sendMail(mailOptionsForUser);

        // Successful response
        res.status(200).json({ result: { status: 200, msg: 'Emails sent successfully' } });
    } catch (error) {
        console.error('Error sending emails:', error);
        res.status(500).json({ result: { status: 500, msg: error.message } });
    }
}

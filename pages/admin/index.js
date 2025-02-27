import { useRouter } from "next/router";
import { useState } from "react";
import { Eye, EyeOff, Mail ,User, Phone} from "lucide-react"; // Using Lucide icons

export default function AuthPage() {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [userOtp, setUserOtp] = useState("");
  const [error, setError] = useState("");
  const [view, setView] = useState("login");
  const [otpSent, setOtpSent] = useState(false);
  const [regNo, setRegNo] = useState("");
  const [passwrd, setPasswrd] = useState("");
  const [showPassword, setShowPassword] = useState(false);


  const router = useRouter();

  const generateOtp = () => {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";
    let generatedOtp = "";

    for (let i = 0; i < 8; i++) {
      generatedOtp += characters.charAt(Math.floor(Math.random() * characters.length));
    }

    return generatedOtp;
  };

  const handleSendOtp = async (e) => {
    e.preventDefault();
    if (!email.includes("@") || !email.includes(".")) {
      setError("Please enter a valid email address.");
      return;
    }
    setError("");

    const newOtp = generateOtp();
    setOtp(newOtp);

    // console.log("Generated OTP:", newOtp);

    try {
      const response = await fetch("/api/sendOtp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email, otp: newOtp, passwrd: passwrd }),
      });

      const data = await response.json();
      if (response.ok) {
        setOtpSent(true);
        console.log("OTP sent successfully:", data.message);
      } else {
        setOtpSent(false);
        setError(data.error || "Failed to send OTP.");
      }
    } catch (error) {
      console.error("Error sending OTP:", error);
      setError("Error sending OTP.");
    }
  };

  const handleSignUP = async (e) => {
    e.preventDefault();

    if (!email.includes("@") || !email.includes(".")) {
      setError("Please enter a valid email address.");
      return;
    }
    setError("");

    try {
      const response = await fetch("/api/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email, number: number, name: name, passwrd: passwrd }),
      });

      const data = await response.json();
      if (response.ok) {
        console.log("Data sent successfully:", data.message);
        alert('Registered Succesfully, Please Wait For Approval From TEAM');
        router.push('/');
      } else {
        setError(data.msg);
      }
    } catch (error) {
      console.error("Error :", error);
      setError("Error Sign in.");
    }

  }


  const handleVerifyOtp = (e) => {
    e.preventDefault();

    if (userOtp === otp) {
      const sessionData = {
        email: email, // Store user email
        otp: userOtp,
        expiresAt: Date.now() + 5 * 60 * 1000, // Expiry time in milliseconds (5 minutes)
      };

      // Store session in localStorage
      localStorage.setItem("session", JSON.stringify(sessionData));

      // Clear OTP input field
      setUserOtp("");

      // Proceed to enter registration number
      setView("register");

      // Automatically remove session after 5 minutes
      setTimeout(() => {
        const storedSession = JSON.parse(localStorage.getItem("session"));
        if (storedSession && Date.now() > storedSession.expiresAt) {
          localStorage.removeItem("session");
          console.log("Session expired.");
        }
      }, 5 * 60 * 1000);

      console.log("OTP verified. Proceed to registration.");
    } else {
      setError("Invalid OTP. Please try again.");
    }
  };

  const handleRegister = (e) => {
    e.preventDefault();

    if (!regNo.trim()) {
      setError("Please enter your registration number.");
      return;
    }

    // Store reg number in session
    localStorage.setItem("regNo", regNo);

    // Redirect to the registration page
    router.push(`/sbifm/${regNo}`);
  };



  return (
    <div className="d-flex align-items-center justify-content-center vh-100" style={{ background: "linear-gradient(135deg, #01485a, #E35728)" }}>
      <div className="bg-white p-4 rounded shadow w-100" style={{ maxWidth: "400px" }}>
        <header className="text-center mb-3">
          <h1 className="h3 fw-bold" style={{ color: "#01485a" }}>
            {view === "register" ? "Enter Candidate Registration Number" : view === "login" ? "Welcome Back" : view === "signup" ? "Create an Account" : "Reset Password"}
          </h1>
          <p className="text-muted">
            {view === "login" ? "Login to access your account" : view === "signup" ? "Sign up to get started" : "Enter your email to receive reset instructions"}
          </p>
        </header>
        {view === "register" ? (
          <div className="mb-3">
            <input
              type="text"
              placeholder="Enter your Registration Number"
              className="form-control"
              value={regNo}
              onChange={(e) => setRegNo(e.target.value)}
            />
            <button onClick={handleRegister} className="btn btn-primary w-100 mt-2">
              Submit & Continue
            </button>
          </div>
        ) : (
          <>

            <main>


              <form onSubmit={view === "signup" ? handleSignUP : handleSendOtp}>
                {view === "signup" && (
                  <>
                   <div className="mb-3 position-relative">
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="form-control"
        />
        <span className="position-absolute top-50 end-0 translate-middle-y me-3 text-muted">
          <User size={20} />
        </span>
      </div>

      {/* Number Input */}
      <div className="mb-3 position-relative">
        <input
          type="text"
          placeholder="Enter your number"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          className="form-control"
        />
        <span className="position-absolute top-50 end-0 translate-middle-y me-3 text-muted">
          <Phone size={20} />
        </span>
      </div>
                  </>
                )}
                <div className="mb-3 position-relative">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="form-control"
                  />
                  <span className="position-absolute top-50 end-0 translate-middle-y me-3 text-muted">
                    <Mail size={20} />
                  </span>
                </div>

                <div className="mb-3 position-relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter Password"
                    className="form-control"
                    value={passwrd}
                    onChange={(e) => setPasswrd(e.target.value)}
                  />
                  <span
                    className="position-absolute top-50 end-0 translate-middle-y me-3"
                    style={{ cursor: "pointer" }}
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </span>
                </div>

                {otpSent && (
                  <div className="mb-3">
                    <input
                      type="text"
                      placeholder="Enter OTP"
                      className="form-control"
                      value={userOtp}
                      onChange={(e) => setUserOtp(e.target.value)}
                    />
                  </div>
                )}
                {error && <p className="text-danger small">{error}</p>}
                {!otpSent && (
                  <button type="submit" className="btn w-100" style={{ backgroundColor: "#01485a", color: "white" }}>
                    {view === "login" ? "Login" : view === "signup" ? "Sign UP" : "Send OTP"}
                  </button>
                )}
              </form>
              {otpSent && (
                <button onClick={handleVerifyOtp} className="btn btn-success w-100 mt-2">
                  Verify OTP & Sign Up
                </button>
              )}
              {/* {otp && otpSent && <p className="mt-3 text-success text-center">Your OTP: {otp}</p>} */}

            </main>
            <footer className="text-center mt-3 small text-muted">
              {view === "login" && <p>Don't have an account? <a href="#" className="text-primary" onClick={() => setView("signup")}>Sign up here</a></p>}
              {/* {view !== "forgot" && <p className="mt-2"><a href="#" className="text-primary" onClick={() => setView("forgot")}>Forgot Password?</a></p>} */}
              {view !== "login" && <p className="mt-2"><a href="#" className="text-primary" onClick={() => setView("login")}>Back to Login</a></p>}
            </footer>

          </>
        )}

      </div>
    </div>
  );
}
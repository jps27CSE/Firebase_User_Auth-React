import { useState } from "react";
import { Link } from "react-router-dom";
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";
import auth from "../../firebase/firebase_config";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Sign_Up = () => {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const accepted = e.target.terms.checked;

    setError("");
    if (password.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    } else if (!/[A-Z]/.test(password)) {
      setError("Your password should have at least one upper case characters.");
      return;
    } else if (!accepted) {
      setError("Please accept our terms and conditions!");
      return;
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        console.log(result);
        setSuccess("User Created Successfully.");

        sendEmailVerification(result.user).then(() => {
          alert("Please check your email and verify your account");
        });
      })
      .catch((error) => setError(error.message));
  };
  return (
    <div className="">
      <div className="mx-auto md:w-1/2">
        <h2 className="text-3xl mb-8">Please Register</h2>
        <form onSubmit={handleSubmit}>
          <input
            className="mb-4 w-full  py-2 px-4"
            type="text"
            name="name"
            placeholder="Your Name"
            id=""
            required
          />
          <br />
          <input
            className="mb-4 w-full  py-2 px-4"
            type="email"
            name="email"
            placeholder="Email Address"
            id=""
            required
          />
          <br />
          <div className="mb-4 relative border">
            <input
              className="w-full py-2 px-4"
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
              id=""
              required
            />
            <span
              className="absolute top-3 right-2"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
            </span>
          </div>
          <br />
          <div className="mb-2">
            <input type="checkbox" name="terms" id="terms" />
            <label className="ml-2" htmlFor="terms">
              Accept our <a href="">Terms and Conditions</a>
            </label>
          </div>
          <br />
          <input
            className="btn btn-secondary mb-4 w-full"
            type="submit"
            value="Register"
          />
        </form>
        {error && <p className="text-red-700">{error}</p>}
        {success && <p className="text-green-600">{success}</p>}
        <p>
          Already have an account? Please <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Sign_Up;

import { Link } from "react-router-dom";

const Sign_Up = () => {
  return (
    <div className="">
      <div className="mx-auto md:w-1/2">
        <h2 className="text-3xl mb-8">Please Register</h2>
        <form>
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
              name="password"
              placeholder="Password"
              id=""
              required
            />
            <span className="absolute top-3 right-2"></span>
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

        <p>
          Already have an account? Please <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Sign_Up;

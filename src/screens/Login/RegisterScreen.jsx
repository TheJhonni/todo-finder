import { useState } from "react";
import { MdOutlineArrowBack } from "react-icons/md";
import { Link } from "react-router-dom";

function SignUpScreen() {
  const [state, setState] = useState({
    displayName: "",
    email: "",
    password: "",
    passwordConfirm: "",
  });

  const { email, password, displayName, passwordConfirm } = state;
  const handleSubmit = () => {};
  const handleChange = () => {};
  return (
    <div className="max-w-[400px] h-screen p-[40px] mx-auto bg-gradient-to-b opacity-80">
      <div className="flex justify-center mt-[50%]">
        <form className="flex flex-col mt-auto space-y-3">
          <div className="flex justify-between items-center">
            <Link to="/login">
              <MdOutlineArrowBack className="text-5xl text-white hover:bg-white rounded-full hover:text-[#4f4ff7] hover:scale-115 transition duration-75 ease-out" />
            </Link>
            <h1 className="mb-[20px] text-left font-bold text-5xl text-[#5b5beb]">
              Sign Up!
            </h1>
          </div>
          <input
            className="input-signUp w-[400px] lg:w-[600px] "
            value={email}
            onChange={handleChange}
            placeholder="Email"
            type="email"
          />
          <input
            className="input-signUp w-[400px] lg:w-[600px] "
            value={displayName}
            onChange={handleChange}
            placeholder="Full name"
            type="text"
          />
          <input
            className="input-signUp w-[400px] lg:w-[600px] "
            // // ref={passwordRef}
            value={password}
            onChange={handleChange}
            placeholder="Password"
            type="password"
          />
          <input
            className="input-signUp w-[400px] lg:w-[600px] "
            value={passwordConfirm}
            onChange={handleChange}
            placeholder="Confirm Password"
            type="password"
          />
          <div className="flex justify-between items-center">
            <h4 className="mt-3">
              <span className="text-gray-200 mr-3">New Here? </span>
              <span
                onClick={handleSubmit}
                className="cursor-pointer text-[#7e7eff] hover:underline"
              >
                Sign Up now!
              </span>
            </h4>
            <button
              className="signIn-button w-[30%] rounded hover:bg-[#17171f] hover:text-white hover:scale-[1.03] transition-all duration-150 ease-in"
              onClick={handleSubmit}
              type="submit"
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUpScreen;

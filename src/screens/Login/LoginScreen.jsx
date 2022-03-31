import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { AiFillFacebook } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import atoms from "../../assets/atoms.gif";
import {
  fbInitiate,
  googleInitiate,
  loginInitiate,
} from "../../redux/Authentications/authActions";
import Gif from "../../components/Spinner/Gif";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Toast from "../../components/Toasts/Toast";

function LoginScreen() {
  const [state, setState] = useState({ email: "", password: "" });
  const [mount, setMount] = useState(false);
  const { email, password } = state;

  const notify = () => toast("Logged in!");

  const { currentUser } = useSelector((state) => state.user);

  const navigate = useNavigate();

  useEffect(() => {
    if (currentUser) {
      setTimeout(() => {
        navigate("/homePage");
      }, 800);
      // if it exists, then push to "/posts"
    } else {
      setTimeout(() => {
        setMount(true);
      }, 800);
    }
  }, [currentUser, navigate]);

  const dispatch = useDispatch();

  const handleGoogleSignin = () => {
    dispatch(googleInitiate());
    notify();
  };
  const handleFBSignin = () => {
    dispatch(fbInitiate());
    notify();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      return;
      // you shall not pass if you don't set your email and password
    }
    dispatch(loginInitiate(email, password));
    setState({ email: "", password: "" });
    notify();
    setTimeout(() => {
      setMount(false);
    }, 800);
    // setting back to empty string
  };

  const handleChange = (e) => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  return (
    <>
      {mount ? (
        <div className="relative bg-[#161D34]">
          <div className="img-login">
            <Toast />
            <img
              className="fixed left-5 top-10 w-[200px] object-contain pl-[20px]"
              src={atoms}
              alt=""
            />
            <img
              className="fixed right-5 top-10 w-[200px] object-contain pr-[20px]"
              src={atoms}
              alt=""
            />
            {/* <button className="fixed right-[20px] top-[20px] py-[10px] px-[20px] rounded-full bg-white text-[#05051df1] font-bold font-weight-400">
            Sign In
          </button> */}
            <div className="w-full z-1 h-screen bg-gradient-to-b from-transparent to-black" />
          </div>

          <div className="bg-[#beb6b6d7] w-[30%] rounded-2xl absolute top-[20%] mx-auto text-center z-1 color-white p-[10px] left-0 right-0">
            <div id="login-form" className="m-[20px]">
              <form onSubmit={handleSubmit} className="space-y-5">
                <h3 className="text-5xl text-white font-semibold mt-9 mb-5">
                  Sign in
                </h3>
                <div className="flex items-center justify-center space-x-[5rem]">
                  <button
                    onClick={handleGoogleSignin}
                    className="signIn-google"
                  >
                    <span>
                      <FcGoogle className="bg-white hover:bg-gray-600 w-[50px] h-[50px]" />
                    </span>
                  </button>
                  {/* <input
                  className="input-signUp p-[10px] outline-none h-[40px] text-purple-900 w-[30%] border-none max-w-5xl"
                  type="emal"
                  placeholder="Email Adress"
                /> */}
                  <button onClick={handleFBSignin} className="signIn-facebook">
                    <span>
                      <AiFillFacebook className="bg-white text-[#2626c0] hover:bg-gray-600 hover:text-white  w-[50px] h-[50px]" />
                    </span>
                  </button>
                </div>
              </form>
              <p className="my-4 font-bold text-gray-800">OR</p>
              <div className="flex flex-col items-center justify-center mt-5">
                <input
                  className="input-signUp outline-none text-purple-900 border-none max-w-5xl"
                  type="email"
                  placeholder="Email Adress"
                  onChange={handleChange}
                  value={email}
                  required
                  name="email"
                />
                <input
                  className="input-signUp outline-none text-purple-900 border-none max-w-5xl"
                  type="password"
                  placeholder="Password"
                  onChange={handleChange}
                  value={password}
                  required
                  name="password"
                />
                <button
                  className="rounded-3xl bg-gray-600 p-5 text-white hover:text-gray-700 hover:bg-white"
                  type="submit"
                  onClick={handleSubmit}
                >
                  Sign in
                </button>
              </div>
              <h1 className="text-4xl font-bold text-[#1D657B] my-[20px]">
                Don't have an account yet?
              </h1>
              <Link to="/register">
                <h2 className="text-2xl font-normal mt-5">
                  <button
                    className="signIn-button rounded hover:bg-[#5ED28D] hover:text-white hover:scale-[1.03] transition-all duration-150 ease-in"
                    type="submit"
                  >
                    Sing up for free!
                  </button>
                </h2>
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <Gif />
      )}
    </>
  );
}

export default LoginScreen;

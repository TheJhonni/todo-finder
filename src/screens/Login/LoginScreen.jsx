import React, { useState } from "react";
import SignUpScreen from "./SignUpScreen";

function LoginScreen() {
  const [signIn, setSignIn] = useState(false);
  return (
    <div className="relative bg-[#161D34]">
      <div className="img-login">
        <img
          className="fixed left-0 w-[120px] object-contain pl-[20px]"
          src="https://cdn3.iconfinder.com/data/icons/hawaii-symbols-3/64/Turtle-animal-sea-hawaii-256.png"
          alt=""
        />
        <button className="fixed right-[20px] top-[20px] py-[10px] px-[20px] rounded-full bg-purple-700 text-white font-bold font-weight-400">
          Sign In
        </button>
        <div className="w-full z-1 h-screen bg-gradient-to-b from-transparent to-black" />
      </div>

      <div className="absolute top-[30%] mx-auto text-center z-1 color-white p-[20px] left-0 right-0">
        {signIn ? (
          <SignUpScreen />
        ) : (
          <>
            <h1 className="text-4xl text-white mb-[20px]">
              Don't know what to do yet?
            </h1>
            <h2 className="text-2xl text-white font-normal mt-5">
              Bored of staying at home with no ideas? Sing up for free!
            </h2>
            <h3 className="text-md text-white font-semibold mt-9">
              Enter your email to create or restart your membership.
            </h3>
            <div className="m-[20px]">
              <form>
                <input
                  className="p-[10px] outline-none h-[40px] text-purple-900 w-[30%] border-none max-w-5xl"
                  type="emal"
                  placeholder="Email Adress"
                />
                <button
                  onClick={() => setSignIn(true)}
                  className="signIn-button"
                >
                  GET STARTED!
                </button>
              </form>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default LoginScreen;

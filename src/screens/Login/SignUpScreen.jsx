import { useRef } from "react";
import { auth } from "../../firebase";

function SignUpScreen() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const register = (e) => {
    e.preventDefault();

    auth
      .createUserWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((authUser) => {
        console.log(authUser);
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  const signIn = (e) => {
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((authUser) => {
        console.log(authUser);
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <div className="max-w-[400px] p-[40px] mx-auto my-auto bg-gradient-to-b opacity-80">
      <form className="flex flex-col my-auto">
        <h1 className="mb-[20px] text-left font-bold text-xl text-[#7e7eff]">
          Sign Up!
        </h1>
        <input
          className="input-signUp"
          ref={emailRef}
          placeholder="Email"
          type="email"
        />
        <input
          className="input-signUp"
          ref={passwordRef}
          placeholder="Password"
          type="password"
        />
        <button
          className="signIn-button rounded hover:bg-[#2626c0] hover:text-white hover:scale-[1.03] transition-all duration-150 ease-in"
          onClick={signIn}
          type="submit"
        >
          Sign in
        </button>

        <h4 className="mt-3">
          <span className="text-gray-200 mr-3">New Here? </span>
          <span
            onClick={register}
            className="cursor-pointer text-[#7e7eff] hover:underline"
          >
            Sign Up now!
          </span>
        </h4>
      </form>
    </div>
  );
}

export default SignUpScreen;

import { useEffect, useState } from "react";
import { MdOutlineArrowBack } from "react-icons/md";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { db } from "../../firebase";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import { registerInitiate } from "../../redux/Authentications/authActions";
import Gif from "../../components/Spinner/Gif";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Toast from "../../components/Toasts/Toast";

function SignUpScreen() {
  const [mount, setMount] = useState(false);
  const [state, setState] = useState({
    displayName: "",
    email: "",
    gender: "",
    age: 16,
    password: "",
    passwordConfirm: "",
    role: "Client/Guest",
  });

  const { currentUser } = useSelector((state) => state.user);
  const navigate = useNavigate();

  const notify = () => toast("Congrats! You've just registered into 5%!");

  useEffect(() => {
    if (currentUser) {
      navigate("/homePage");
      // if there's an user then push history to home => "/posts" in this case
    } else {
      setTimeout(() => {
        setMount(true);
      }, 800);
    }
  }, [currentUser, navigate]);

  const dispatch = useDispatch();

  const { email, password, gender, age, displayName, role, passwordConfirm } =
    state;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== passwordConfirm) {
      return;
    }
    setTimeout(() => {
      dispatch(registerInitiate(email, password, displayName));
      notify();
    }, 800);
    try {
      addDoc(collection(db, "users"), {
        email,
        displayName,
        gender,
        age,
        password,
        role,
        created: Timestamp.now(),
      });
    } catch (err) {
      alert(err);
    }

    setState({
      displayName: "",
      email: "",
      gender: "",
      age: "16",
      password: "",
      passwordConfirm: "",
    });
    // reset input to default => empty strings
  };

  const handleChange = (e) => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  return (
    <>
      {mount ? (
        <div className="max-w-[400px] h-screen p-[40px] mx-auto bg-gradient-to-b opacity-80">
          <Toast />
          <div className="flex justify-center mt-[50%]">
            <form className="flex flex-col mt-auto space-y-3">
              <div className="flex justify-between items-center">
                <Link to="/login">
                  <span className="mb-5">
                    <MdOutlineArrowBack className="text-5xl mb-2 text-white hover:bg-white rounded-full hover:text-[#4f4ff7] hover:scale-115 transition duration-75 ease-out" />
                    <p className="text-white">Go back</p>
                  </span>
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
                name="email"
              />
              <input
                className="input-signUp w-[400px] lg:w-[600px] "
                value={displayName}
                onChange={handleChange}
                placeholder="Full name"
                type="text"
                name="displayName"
              />
              <div className="flex justify-start items-center space-x-4 my-3">
                <input
                  className="appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                  value="Male"
                  onChange={handleChange}
                  type="radio"
                  name="gender"
                />
                <label className="inline-block text-gray-300">Male</label>
                <input
                  className="appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                  value="Female"
                  onChange={handleChange}
                  type="radio"
                  name="gender"
                />
                <label className="inline-block text-gray-300">Female</label>
                <input
                  className="appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                  value="Undefined"
                  onChange={handleChange}
                  type="radio"
                  name="gender"
                />
                <label className="inline-block text-gray-300">
                  I prefer not to specify
                </label>
              </div>

              <div className="flex justify-start items-center space-x-3">
                <input
                  className="px-5 w-[100px]"
                  value={age}
                  onChange={handleChange}
                  type="number"
                  name="age"
                  min="16"
                  max="80"
                  required
                />
                <label className="text-gray-300">Age</label>
              </div>

              <input
                className="input-signUp w-[400px] lg:w-[600px] "
                // // ref={passwordRef}
                value={password}
                onChange={handleChange}
                placeholder="Password"
                type="password"
                name="password"
              />
              <input
                className="input-signUp w-[400px] lg:w-[600px] "
                value={passwordConfirm}
                onChange={handleChange}
                placeholder="Confirm Password"
                type="password"
                name="passwordConfirm"
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
      ) : (
        <Gif />
      )}
    </>
  );
}

export default SignUpScreen;

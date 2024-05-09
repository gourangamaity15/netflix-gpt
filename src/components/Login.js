import React, { useRef, useState } from "react";
import Header from "./Header";
import { validateData } from "../utils/validate";

const Login = () => {
  const [isSignInFrom, setIsSignInForm] = useState(false);
  const [errorSms, setErrorSms] = useState(null);
  const userMail = useRef();
  const userPassword = useRef();

  function handleSubmit(e) {
    e.preventDefault();
    setIsSignInForm(!isSignInFrom);
    const email = userMail.current.value;
    const password = userPassword.current.value;
    console.log(email, password);
    const res = validateData(email, password);
    if (res === null) {
      console.log("valid");
      setErrorSms(res);
    } else {
      setErrorSms(res);
    }
  }

  // const logo = 'https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png'
  const url =
    "https://assets.nflxext.com/ffe/siteui/vlv3/d253acf4-a1e2-4462-a416-f78802dc2d85/f04bf88c-f71c-4d02-82ed-adb870b8f8db/IN-en-20240429-POP_SIGNUP_TWO_WEEKS-perspective_WEB_658a042e-62cf-473d-8da0-7b875f23e2ef_large.jpg";
  return (
    <div>
      <Header />
      <div className="">
        <div className="absolute">
          <img src={url} alt="backgroud movies" />
        </div>
        <div className="w-3/12 p-10 bg-black absolute my-32 mx-auto left-0 right-0  text-white bg-opacity-60 ">
          <h1 className="font-bold text-3xl py-3 m-2">
            {" "}
            {isSignInFrom ? "Sign In" : "Sign Up"}{" "}
          </h1>
          {isSignInFrom === false && (
            <input
              className="m-4 py-2 w-full bg-slate-600 pl-3"
              type="text"
              placeholder="Full Name"
            />
          )}

          <input
            className="m-4 py-2 w-full bg-slate-600 pl-3"
            type="email"
            placeholder="Email"
            ref={userMail}
          />
          
          <input
            className="m-4 py-2 w-full bg-slate-600 pl-3"
            type="password"
            placeholder="Password"
            ref={userPassword}
          />

          <button
            className="m-4 py-2 bg-red-500  w-full opacity-100"
            type="submit"
            value="Login"
            onClick={(e) => handleSubmit(e)}
          >
            {isSignInFrom ? "Sign In" : "Sign Up"}
          </button>
          <p
            className="py-2 mx-5 text-red-600"
            onClick={() => setIsSignInForm(!isSignInFrom)}
          >
            {errorSms === null && isSignInFrom ? "" : errorSms}
          </p>
          <p
            className="m-4 py-2 cursor-pointer"
            onClick={() => setIsSignInForm(!isSignInFrom)}
          >
            {isSignInFrom
              ? "New to Netflix? Sign up now."
              : "Already Registered? Sign in now"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;

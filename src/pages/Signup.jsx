import React, { useState } from "react";
import Shoe from '../assets/images/nike-just-do-it.jpg';
import SignupForm from "../components/SignupForm";
import SigninForm from "../components/SigninForm";

const Signup = () => {
  const [showSignup, setShowSignup] = useState(true);

  const toggleForm = () => {
    setShowSignup(!showSignup);
  };

  return (
    <div className="justify-center items-center align-middle mx-10 my-10">
      <div className="relative flex flex-col md:flex-row text-gray-700 bg-transparent shadow-none rounded-xl border-2 gap-10">
        <div className="px-10 py-10 w-full md:w-1/3">
          {showSignup ? (
            <SignupForm toggleForm={toggleForm} />
          ) : (
            <SigninForm toggleForm={toggleForm} />
          )}
        </div>
        <div className="hidden md:flex w-2/3">
          <img src={Shoe} alt="" className="object-cover h-full w-full rounded-r-xl" />
        </div>
      </div>
    </div>
  );
};


export default Signup;

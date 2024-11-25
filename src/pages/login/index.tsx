import React from "react";
import InputAuth from "../../components/input-auth";

export default function Login() {
  return (
    <div
      className="relative flex items-center justify-center min-h-screen bg-cover bg-center"
      style={{
        backgroundImage: "url('../../assets/login_image.png')",
      }}
    >
      <div className="relative z-10 w-full max-w-sm p-8 bg-gray-100 rounded-lg shadow-lg">
        <form className="bg-primary-light p-8 rounded-lg shadow-lg max-w-sm mx-auto">
          <InputAuth
            label="E-mail"
            type="text"
            name="email"
            placeholder="Enter your e-mail"
            className="mb-4"
          />

          <InputAuth
            label="Password"
            type="password"
            name="password"
            placeholder="Enter your password"
            className="mb-6"
          />

          <button className="w-full py-3 bg-primary text-white rounded-lg hover:bg-primary-dark transition duration-300">
            Sign In
          </button>
        </form>

        <p className="flex items-center text-center my-6 text-secondary">
          <span className="flex-grow border-t border-gray-300 mx-2"></span>
          <span>Or</span>
          <span className="flex-grow border-t border-gray-300 mx-2"></span>
        </p>

        <div className="flex justify-center">
          <button className="w-13 h-13 bg-white border-none rounded-lg m-10 mx-3 cursor-pointer shadow-md hover:shadow-lg transition duration-300">
            <img src="../../assets/facebook_auth.png" alt="Facebook Icon" />
          </button>

          <button className="w-13 h-13 bg-white border-none rounded-lg m-10 mx-3 cursor-pointer shadow-md hover:shadow-lg transition duration-300">
            <img src="../../assets/google_auth.png" alt="Google Icon" />
          </button>
        </div>

        <p className="text-center text-secondary">
          Didn't have an account?{" "}
          <a href="/" className="text-primary font-bold hover:underline">
            Sign Up
          </a>
        </p>
      </div>
    </div>
  );
}

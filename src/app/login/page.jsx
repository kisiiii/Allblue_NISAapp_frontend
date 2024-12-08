"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { FaEnvelope, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";

const LoginPage = () => {
  const router = useRouter();

  return (
    <form className="flex flex-col pb-60 mx-auto w-full text-xl font-extrabold leading-none bg-white max-w-[480px]">
      <div className="flex w-full bg-indigo-900 min-h-[80px]" />
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/eb93b8f696050944e5b2200bfe080ec90d591da46ff499c2849679cc5271985c?placeholderIfAbsent=true&apiKey=830249011bfc4b9a9e2dddb095d90bfd"
        alt="Logo"
        className="object-contain self-center mt-6 aspect-[7.52] max-w-[300px] w-[300px]"
      />
      <div className="flex flex-col pl-2 mt-6 w-full">
        <div className="flex flex-col px-6 py-6 bg-white text-zinc-900">
          <h1 className="self-center text-4xl leading-none text-center text-black">
            Login
          </h1>

          <div className="mt-6">
            <InputField
              icon={<FaEnvelope />}
              label="Email address"
              type="email"
              defaultValue="tech0-allblue@×××.com"
            />
          </div>

          <div className="mt-6">
            <PasswordInputField
              icon={<FaLock />}
              label="Password"
              defaultValue="nisapo-mecchaii"
            />
          </div>

          <div className="mt-12">
            <Button color="blue" onClick={() => router.push("/home/1111")}>
              Sign in
            </Button>
          </div>
          <div className="mt-12">
            <Button
              color="gray"
              onClick={() =>
                window.open(
                  "https://www.mizuhobank.co.jp/account/index.html",
                  "_blank"
                )
              }
            >
              アカウントを作成する
            </Button>
          </div>
        </div>
      </div>
    </form>
  );
};

const Button = ({ children, onClick, color = "blue", className = "" }) => {
  const bgColor =
    color === "blue"
      ? "bg-blue-800 hover:bg-blue-700"
      : "bg-gray-400 hover:bg-gray-500";

  return (
    <button
      onClick={onClick}
      className={`flex items-center justify-center px-4 py-3 w-full text-white rounded-2xl text-lg font-medium ${bgColor} ${className}`}
    >
      {children}
    </button>
  );
};

const InputField = ({ icon, label, type = "text", defaultValue }) => {
  const inputId = `${label.toLowerCase().replace(/\s/g, "-")}-input`;

  return (
    <div className="flex items-center px-4 py-3.5 w-full font-medium bg-white border-2 border-solid border-zinc-900 rounded-2xl">
      <div className="text-xl text-zinc-900">{icon}</div>
      <label htmlFor={inputId} className="sr-only">
        {label}
      </label>
      <input
        id={inputId}
        type={type}
        placeholder={label}
        defaultValue={defaultValue}
        className="flex-grow ml-3 bg-transparent border-none outline-none"
        aria-label={label}
      />
    </div>
  );
};

const PasswordInputField = ({ icon, label, defaultValue }) => {
  const [showPassword, setShowPassword] = React.useState(false);
  const togglePasswordVisibility = () => setShowPassword(!showPassword);
  const inputId = `${label.toLowerCase().replace(/\s/g, "-")}-input`;

  return (
    <div className="flex items-center px-4 py-3.5 w-full font-medium bg-white border-2 border-solid border-zinc-900 rounded-2xl relative">
      <div className="text-xl text-zinc-900 shrink-0">{icon}</div>
      <label htmlFor={inputId} className="sr-only">
        {label}
      </label>
      <input
        id={inputId}
        type={showPassword ? "text" : "password"}
        placeholder={label}
        defaultValue={defaultValue}
        className="flex-grow ml-3 pr-10 bg-transparent border-none outline-none"
        aria-label={label}
      />
      <button
        type="button"
        onClick={togglePasswordVisibility}
        className="absolute right-3 text-xl text-zinc-900 w-6 h-6 flex items-center justify-center"
        aria-label={showPassword ? "Hide password" : "Show password"}
      >
        {showPassword ? <FaEyeSlash /> : <FaEye />}
      </button>
    </div>
  );
};

export default LoginPage;

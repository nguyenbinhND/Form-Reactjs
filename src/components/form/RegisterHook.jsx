import React from "react";

const RegisterHook = () => {
  return (
    <div className="max-w-[300px] mx-auto my-10">
      <div className="flex flex-col gap-3">
        <label className="cursor-pointer" htmlFor="username">
          Username
        </label>
        <input
          id="username"
          type="text"
          placeholder="Please enter your user name"
          className="p-4 border border-gray-100 rounded-lg  bg-white outline-none
          transition-all focus:border-blue-500"
        />
        <p className="text-red-500  text-xs">Please enter your user name</p>
      </div>
    </div>
  );
};

export default RegisterHook;

import React from "react";
import { useForm } from "react-hook-form";
import CheckHook from "../checkbox/CheckHook";
import DropdownHook from "../dropdown/DropdownHook";
import InputHook from "../input/InputHook";
import RadioHook from "../radio/RadioHook";

const dropdownData = [
  {
    id: 1,
    value: "teacher",
    text: "teacher",
  },
  {
    id: 2,
    value: "developer",
    text: "developer",
  },
  {
    id: 3,
    value: "doctor",
    text: "doctor",
  },
];

const RegisterHook = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    setValue,
    getValues,
  } = useForm();
  const onsubmitHandler = (values) => {
    console.log(values);
  };
  return (
    <form
      onSubmit={handleSubmit(onsubmitHandler)}
      className="max-w-[300px] mx-auto my-10 "
    >
      <div className="flex flex-col gap-2 mb-2 text-[10px]">
        <label className="cursor-pointer" htmlFor="username">
          Username
        </label>
        <InputHook
          name="username"
          placeholder="Please enter your user name"
          id="username"
          control={control}
          type="text"
        ></InputHook>
        <p className="text-red-500 text-[8px]">Please enter your user name</p>
      </div>

      <div className="flex flex-col gap-2 mb-5 text-[10px]">
        <label className="cursor-pointer " htmlFor="email">
          email
        </label>
        <InputHook
          name="email"
          placeholder="Please enter  your email"
          id="email"
          control={control}
          type="email"
        ></InputHook>
        <p className="text-red-500 text-[8px]">Please enter your email</p>
      </div>

      <div className="flex flex-col gap-2 mb-5 text-[10px]">
        <label className="cursor-pointer" htmlFor="password">
          password
        </label>
        <InputHook
          name="password"
          placeholder="Please enter your password"
          id="password"
          control={control}
          type="password"
        ></InputHook>
        <p className="text-red-500 text-[8px]">Please enter your password</p>
      </div>

      <div className="flex flex-col gap-3 mb-5 text-[10px]">
        <label className="cursor-pointer">Gender</label>
        <div className="flex item-center gap-5">
          <div className="flex items-center gap-x-3">
            <RadioHook control={control} name="gender" value="male"></RadioHook>
            <span>Male</span>
          </div>
          <div className="flex items-center gap-x-3">
            <RadioHook
              control={control}
              name="gender"
              value="female"
            ></RadioHook>
            <span>Female</span>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-2 mb-5 text-[10px]">
        <label className="cursor-pointer" htmlFor="password">
          Your Job
        </label>
        <DropdownHook
          control={control}
          setValue={setValue}
          name="job"
          dropdownData={dropdownData}
        ></DropdownHook>
      </div>

      <div>
        <CheckHook
          control={control}
          name="terms"
          text="I accept the terms and conditions"
        ></CheckHook>
        {/* <span>I accept the terms and conditions</span> */}
      </div>
      <button className="w-[100px] p-2 bg-blue-500 text-white rounded-lg mt-2 font-semibold text-[10px]">
        Submit
      </button>
    </form>
  );
};

export default RegisterHook;

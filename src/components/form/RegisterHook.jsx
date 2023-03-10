import React from "react";
import { useForm } from "react-hook-form";
import CheckHook from "../checkbox/CheckHook";
import DropdownHook from "../dropdown/DropdownHook";
import InputHook from "../input/InputHook";
import RadioHook from "../radio/RadioHook";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup
  .object({
    username: yup.string().required("please enter your username"),
    email: yup
      .string()
      .email("please enter valid email address")
      .required("please enter your email"),
    password: yup
      .string()
      .min(8, "min 8 characters")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,10}$/,
        {
          message:
            "your password must have at least 8t characters, 1 uppercase letter, 1 lowercase letter, 1 number or special character",
        }
      )
      .required("please enter your password"),
    gender: yup
      .string()
      .required("please enter your gender")
      .oneOf(["male", "female"], "you can only select male or female"),
    job: yup.string().required("please enter your job"),
    terms: yup.boolean().required("please enter your terms"),
  })
  .required();

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
    formState: { errors, isValid, isSubmitting, isSubmitSuccessful },
    control,
    setValue,
    getValues,
    reset,
    watch,
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
    defaultValues: {
      gender: "male",
    },
  });

  const onsubmitHandler = (values) => {
    if (!isValid) return;
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
        console.log(values);
        reset({
          username: "",
          email: "",
          gender: "male",
          job: "",
          password: "",
          terms: false,
        });
      }, 3000);
    });
    console.log(values);
  };
  const watchGender = watch("gender");
  return (
    <form
      onSubmit={handleSubmit(onsubmitHandler)}
      className="max-w-[300px] mx-auto my-10 "
      autoComplete="off"
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
        {errors.username && (
          <p className="text-red-500 text-[8px]">{errors.username.message}</p>
        )}
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
        {/* <p className="text-red-500 text-[8px]">{errors.email?.message}</p> */}
        {errors.email && (
          <p className="text-red-500 text-[8px]">{errors.email.message}</p>
        )}
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
        {errors.password && (
          <p className="text-red-500 text-[8px]">{errors.password.message}</p>
        )}
      </div>

      <div className="flex flex-col gap-3 mb-5 text-[10px]">
        <label className="cursor-pointer">Gender</label>
        <div className="flex item-center gap-5">
          <div className="flex items-center gap-x-3">
            <RadioHook
              control={control}
              name="gender"
              value="male"
              checked={watchGender === "male"}
            ></RadioHook>
            <span>Male</span>
          </div>
          <div className="flex items-center gap-x-3">
            <RadioHook
              control={control}
              name="gender"
              value="female"
              checked={watchGender === "female"}
            ></RadioHook>
            <span>Female</span>
          </div>
        </div>
        {errors.gender && (
          <p className="text-red-500 text-[8px]">{errors.gender.message}</p>
        )}
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
          dropdownLabel={"select your job"}
        ></DropdownHook>
        {errors.job && (
          <p className="text-red-500 text-[8px]">{errors.job.message}</p>
        )}
      </div>

      <div className="flex flex-col gap-x-3">
        <CheckHook
          control={control}
          name="terms"
          text="I accept the terms and conditions"
        ></CheckHook>
        {errors.terms && (
          <p className="text-red-500 text-[8px]">{errors.terms.message}</p>
        )}
      </div>
      <button
        className={`w-[100px] p-2 bg-blue-500 text-white rounded-lg 
        mt-2 font-semibold text-[10px] ${isSubmitting ? "opacity-50" : ""}`}
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <div
            className="w-5 h-5 rounded-full border-2 border-white border-t-transparent mx-auto
       animate-spin "
          ></div>
        ) : (
          "Submit"
        )}
      </button>
    </form>
  );
};

export default RegisterHook;

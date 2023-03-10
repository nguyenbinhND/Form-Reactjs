import { Formik } from "formik";
import React from "react";
import InputFormik from "../input/InputFormik";
import RadioFormik from "../radio/RadioFormik";
import * as yup from "yup";

const RegisterFormik = () => {
  return (
    <Formik
      initialValues={{
        username: "",
        email: "",
        gender: "male",
        job: "",
        password: "",
        terms: false,
      }}
      validationSchema={yup.object({
        username: yup.string().required("please enter your user name"),
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
        // gender: yup
        //   .string()
        //   .required("please enter your gender")
        //   .oneOf(["male", "female"], "you can only select male or female"),
        // job: yup.string().required("please enter your job"),
        // terms: yup.boolean().required("please enter your terms"),
      })}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          console.log(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 3000);
      }}
    >
      {(formik) => (
        <form
          onSubmit={formik.handleSubmit}
          className="max-w-[300px] mx-auto my-10 "
          autoComplete="off"
        >
          <InputFormik
            name="username"
            placeholder="Please enter  your username"
            id="username"
            label="username"
            text="text"
          ></InputFormik>

          <InputFormik
            name="email"
            placeholder="Please enter  your email"
            id="email"
            label="email"
            type="email"
          ></InputFormik>

          <InputFormik
            name="password"
            placeholder="Please enter your password"
            id="password"
            label="password"
            type="password"
          ></InputFormik>

          {/* <div className="flex flex-col gap-3 mb-5 ">
            <label className="cursor-pointer">Gender</label>
            <div className="flex item-center gap-5">
              <div className="flex items-center gap-x-3">
                <RadioFormik name="gender" value="male"></RadioFormik>
                <span>Male</span>
              </div>
              <div className="flex items-center gap-x-3">
                <RadioFormik name="gender" value="female"></RadioFormik>
                <span>Female</span>
              </div>
            </div>
            <p className="text-red-500 text-[14px]">Error</p>
          </div> */}
          <button
            className="w-[100px] p-2 bg-blue-500 text-white rounded-lg 
        mt-2 font-semibold "
            type="submit"
          >
            {formik.isSubmitting ? (
              <div
                className="w-5 h-5 rounded-full border-2 border-white border-t-transparent mx-auto
       animate-spin "
              ></div>
            ) : (
              "Submit"
            )}
          </button>
        </form>
      )}
    </Formik>
  );
};

export default RegisterFormik;

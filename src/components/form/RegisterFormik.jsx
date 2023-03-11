import { Formik } from "formik";
import React from "react";
import InputFormik from "../input/InputFormik";
import RadioFormik from "../radio/RadioFormik";
import * as yup from "yup";
import CheckFormik from "../checkbox/CheckFormik";
import DropdownFormik from "../dropdown/DropdownFormik";

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
        gender: yup
          .string()
          .oneOf(["male", "female"], "you can only select male or female")
          .required("please enter your gender"),
        job: yup.string().required("please enter your job"),
        terms: yup.boolean().oneOf([true], "please enter your terms"),
      })}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        setTimeout(() => {
          console.log(JSON.stringify(values, null, 2));
          setSubmitting(false);
          resetForm();
        }, 3000);
      }}
    >
      {(formik) => {
        const watchGender = formik.values.gender;
        {
          /* console.log(watchGender); */
        }
        return (
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

            <div className="flex flex-col gap-3 mb-5 ">
              <label className="cursor-pointer">Gender</label>
              <div className="flex item-center gap-5">
                <RadioFormik
                  name="gender"
                  value="male"
                  checked={watchGender === "male"}
                  label="male"
                ></RadioFormik>

                <RadioFormik
                  name="gender"
                  value="female"
                  checked={watchGender === "female"}
                  label="female"
                ></RadioFormik>
              </div>
            </div>

            <DropdownFormik
              labelText=" Your Job"
              name="job"
              dropdownData={dropdownData}
              dropdownLabel={"select your job"}
              setValue={formik.setFieldValue}
            ></DropdownFormik>

            <div className="flex flex-col gap-x-3">
              <CheckFormik
                name="terms"
                text="I accept the terms and conditions"
              ></CheckFormik>
            </div>

            <button
              className="w-[100px] p-2 bg-blue-500 text-white rounded-lg 
        mt-2 font-semibold "
              type="submit"
              disabled={formik.isSubmitting}
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
        );
      }}
    </Formik>
  );
};

export default RegisterFormik;

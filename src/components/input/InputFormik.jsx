import { useField } from "formik";
import React from "react";

const InputFormik = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <div className="flex flex-col gap-2 mb-2 ">
      <label className="cursor-pointer" htmlFor={props.id}>
        {label}
      </label>
      <input
        className=" w-[300px] p-2 border border-gray-100 rounded-lg  bg-white outline-none
          transition-all focus:border-blue-500"
        {...props}
        {...field}
      />
      {meta.touched && meta.error && (
        <p className="text-red-500 text-[14px]">{meta.error}</p>
      )}
    </div>
  );
};

export default InputFormik;

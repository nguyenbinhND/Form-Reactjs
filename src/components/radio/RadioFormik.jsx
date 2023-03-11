import { useField } from "formik";
import React from "react";

const RadioFormik = (props) => {
  const [field, meta] = useField(props);
  return (
    <div className="flex items-center gap-x-3">
      <label className=" cursor-pointer custom-radio">
        <input
          {...field}
          type="radio"
          value={props.value}
          checked={props.checked}
          className="hidden"
        />
        <div className="rounded-full w-full h-full  bg-white "></div>
      </label>
      <span>{props.label}</span>
    </div>
  );
};

export default RadioFormik;

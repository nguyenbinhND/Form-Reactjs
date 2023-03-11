import { useField } from "formik";
import React from "react";

const CheckFormik = (props) => {
  const [field, meta] = useField(props);
  return (
    <div>
      <div className=" cursor-pointer  flex  items-start  flex-col  mb-2">
        <div className="">
          <input
            type="checkbox"
            {...field}
            {...props}
            checked={field.value}
            className="mr-2"
          />
          <span>{props.text}</span>
        </div>

        {meta.touched && meta.error && (
          <p className="text-red-500 text-[14px]">{meta.error}</p>
        )}
      </div>
    </div>
  );
};

export default CheckFormik;

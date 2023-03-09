import React from "react";
import { useController } from "react-hook-form";

const RadioHook = ({ control, ...props }) => {
  const { field } = useController({
    control,
    name: props.name,
    defaultValue: "",
  });
  return (
    <label className=" cursor-pointer custom-radio">
      <input type="radio" {...field} {...props} className="hidden" />
      <div className="rounded-full w-full h-full  bg-white "></div>
    </label>
  );
};

export default RadioHook;

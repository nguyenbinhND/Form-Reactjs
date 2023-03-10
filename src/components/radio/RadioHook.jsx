import React from "react";
import { useController } from "react-hook-form";

const RadioHook = ({ control, ...props }) => {
  const { field } = useController({
    control,
    name: props.name,
    defaultValue: props.value,
  });
  return (
    <label className=" cursor-pointer custom-radio">
      <input
        type="radio"
        {...field}
        {...props}
        value={props.value}
        checked={props.checked}
        className="hidden"
      />
      <div className="rounded-full w-full h-full  bg-white "></div>
    </label>
  );
};

export default RadioHook;

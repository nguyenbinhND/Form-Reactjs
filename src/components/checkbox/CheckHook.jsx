import React from "react";
import { useController } from "react-hook-form";

const CheckHook = ({ control, text, ...props }) => {
  const { field } = useController({
    control,
    name: props.name,
    defaultValue: "",
  });
  return (
    <div className=" cursor-pointer text-[8px] flex  items-center">
      <input type="checkbox" {...field} {...props} className="mr-2" />
      <span>{text}</span>
    </div>
  );
};

export default CheckHook;

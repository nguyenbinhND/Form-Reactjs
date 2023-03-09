import React from "react";
import { useController } from "react-hook-form";

const InputHook = ({ control, ...props }) => {
  const { field } = useController({
    control,
    name: props.name,
    defaultValue: "",
  });
  return (
    <div>
      <input
        className=" w-[200px] p-2 border border-gray-100 rounded-lg  bg-white outline-none
          transition-all focus:border-blue-500"
        type="text"
        {...field}
        {...props}
      />
    </div>
  );
};

export default InputHook;

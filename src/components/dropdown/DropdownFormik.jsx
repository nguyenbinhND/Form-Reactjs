import { useField } from "formik";
import React, { useEffect, useState } from "react";
import useClickOutSide from "../../hooks/useClickOutSide";

const DropdownFormik = ({
  dropdownData,
  dropdownLabel,
  name,
  labelText,
  setValue,
  ...props
}) => {
  const { show, setShow, nodeRef } = useClickOutSide();
  const [label, setLabel] = useState(dropdownLabel);
  const [field, meta] = useField(name);
  console.log(field);

  const handleClickDropdownItem = (e) => {
    setShow(false);
    setLabel(e.target.textContent);
    setValue(name, e.target.dataset.value);
  };
  useEffect(() => {
    if (field.value === "") {
      setLabel(dropdownLabel);
    }
  }, [field.value]);

  return (
    <div className="flex flex-col gap-2 mb-5 ">
      <label className="cursor-pointer" htmlFor="password">
        {labelText}
      </label>
      <div className="relative" ref={nodeRef}>
        <div
          className="p-1 rounded-lg border border-gray-100 bg-white
      flex items-center cursor-pointer w-[70%]"
          onClick={() => {
            setShow(!show);
          }}
        >
          <span>{label}</span>
        </div>
        <div
          className={`absolute top-full left-0 w-[70%] rounded-lg bg-white ${
            show ? "" : "opacity-0 invisible"
          }`}
        >
          {dropdownData &&
            dropdownData.length > 0 &&
            dropdownData.map((item, index) => (
              <div
                className="p-1 cursor-pointer hover:bg-gray-200"
                key={item.id}
                onClick={handleClickDropdownItem}
                data-value={item.value}
              >
                {item.value}
              </div>
            ))}
        </div>
      </div>
      {meta.touched && meta.error && (
        <p className="text-red-500 text-[14px]">{meta.error}</p>
      )}
    </div>
  );
};

export default DropdownFormik;

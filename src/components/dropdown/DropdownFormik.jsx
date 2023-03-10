import React, { useEffect, useState } from "react";
import useClickOutSide from "../../hooks/useClickOutSide";

const DropdownFormik = () => {
  const { show, setShow, nodeRef } = useClickOutSide();

  const [label, setLabel] = useState(dropdownLabel);

  const handleClickDropdownItem = (e) => {
    setShow(false);
    setLabel(e.target.textContent);
  };

  return (
    <div className="relative" ref={nodeRef}>
      <div
        className="p-1 rounded-lg border border-gray-100 bg-white
      flex items-center cursor-pointer w-[70%]"
        onClick={() => {
          setShow(!show);
        }}
      >
        <span></span>
      </div>
      <div className="absolute top-full left-0 w-[70%] rounded-lg bg-white ">
        {dropdownData.map((item, index) => (
          <div className="p-1 cursor-pointer hover:bg-gray-200"></div>
        ))}
      </div>
    </div>
  );
};

export default DropdownHook;

import React, { useEffect, useState } from "react";
import { useWatch } from "react-hook-form";
import useClickOutSide from "../../hooks/useClickOutSide";

const DropdownHook = ({
  control,
  setValue,
  name,
  dropdownData,
  dropdownLabel = "select your job",
}) => {
  const { show, setShow, nodeRef } = useClickOutSide();
  const dropdownValue = useWatch({
    control,
    name: "job",
  });

  const [label, setLabel] = useState(dropdownLabel);
  useEffect(() => {
    if (dropdownValue === "") {
      setLabel(dropdownLabel);
    }
  }, [dropdownValue]);

  const handleClickDropdownItem = (e) => {
    setValue(name, e.target.dataset.value);
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
        <span>{label}</span>
      </div>
      <div
        className={`absolute top-full left-0 w-[70%] rounded-lg bg-white ${
          show ? "" : "opacity-0 invisible"
        }`}
      >
        {dropdownData.map((item, index) => (
          <div
            className="p-1 cursor-pointer hover:bg-gray-200"
            onClick={handleClickDropdownItem}
            data-value={item.value}
            key={item.id}
          >
            {item.value}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DropdownHook;

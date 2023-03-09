import { useEffect, useRef, useState } from "react";

export default function useClickOutSide(dom) {
  const [show, setShow] = useState(false);
  const nodeRef = useRef(null);
  useEffect(() => {
    function handelClickOutSide(e) {
      if (
        nodeRef.current &&
        !nodeRef.current.contains(e.target) &&
        !e.target.matches(dom)
      ) {
        setShow(false);
      }
    }
    document.addEventListener("click", handelClickOutSide);
  }, []);
  return { show, setShow, nodeRef };
}

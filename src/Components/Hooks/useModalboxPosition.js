import { useEffect, useState } from "react";

export const useModalboxPosition = (widthPosition) => {
  const [boxPosition, setBoxPosition] = useState(
    window.innerWidth * widthPosition
  );

  const updateWindowWitdth = () => {
    if (window.innerWidth >= 910) {
      setBoxPosition(window.innerWidth * widthPosition);
    } else setBoxPosition(window.innerWidth - 320);
  };

  useEffect(() => {
    window.addEventListener("resize", updateWindowWitdth);
    return () => window.removeEventListener("resize", updateWindowWitdth);
  });
  return boxPosition;
};

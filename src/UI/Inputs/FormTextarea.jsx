import { useRef, useEffect } from "react";
import styled from "styled-components";

export default function FormTextarea({ ...otherProps }) {
  const customTexrarea = useRef(null);
  const MIN_TEXTAREA_HEIGHT = 18;

  useEffect(() => {
    customTexrarea.current.style.height = "inherit";
    customTexrarea.current.style.height = `${Math.max(
      customTexrarea.current.scrollHeight,
      MIN_TEXTAREA_HEIGHT
    )}px`;
  });
  return (
    <>
      <Textarea ref={customTexrarea} {...otherProps} />
    </>
  );
}

const Textarea = styled.textarea`
  width: 100%;
  font-size: 14px;
  line-height: 21px;
  font-weight: 600;
  resize: none;
  padding: 0 8px;
  border: none;
  &:focus {
    outline: none;
  }
  &::placeholder {
    font-weight: 700;
    font-size: 14px;
    line-height: 21px;
    color: #000;
  }
`;

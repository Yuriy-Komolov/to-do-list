import styled from "styled-components";
import React from "react";

export default function FormInput({ label, ...otherInputProps }) {
  return (
    <>
      <Group>
        <Label>{label}</Label>
        <Input {...otherInputProps}></Input>
      </Group>
    </>
  );
}

const Group = styled.div`
  display: flex;
  flex-direction: column;
`;
const Label = styled.label`
  font-size: 13px;
  font-weight: 700;
  margin-bottom: 5px;
`;

const Input = styled.input`
  border: 1px solid #ddd;
  border-radius: 5px;
  box-sizing: border-box;
  font-size: 13px;
  font-weight: 400;
  padding: 10px 14px;
`;

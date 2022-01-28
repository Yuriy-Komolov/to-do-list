import React from "react";
import styled from "styled-components";

export default function BurgerSidebar({ active, setActive }) {
  console.log(active);
  return (
    <>
      <SidebarWrapper active={active}></SidebarWrapper>
    </>
  );
}

const SidebarWrapper = styled.div`
  width: ${(props) => (props.active ? "328px" : "0")};
  height: 100vh;
  background-color: #fafafa;
  transition: all 0.4s;
`;

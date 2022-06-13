import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import Header from "../../Components/Header/Header";
import { useAuth } from "../../Components/Hooks/useAuth";

export default function MainLayout() {
  const [burger, setBurger] = useState(false);
  const userInfo = useAuth();
  return (
    <>
      {userInfo.isAuth && <Header burger={burger} setBurger={setBurger} />}
      <Main active={burger}>
        <Outlet />
      </Main>
    </>
  );
}

const Main = styled.main`
  margin-left: ${({ active }) => (active ? "328px" : "0")};
  transition: all 0.4s ease-in-out;
`;

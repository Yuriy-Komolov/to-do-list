import React, { useState } from "react";
import styled from "styled-components";

import GetCurrentDate from "../Components/Dates/GetCurrentDate";
import AddTaskButton from "../UI/Buttons/AddTaskButton";

import UploadTaskForm from "../UI/Forms/UploadTaskForm";
import Header from "../Components/Header";
import BurgerNavigation from "../Components/BurgerNavigation";

import ModalQuickAddForm from "../Components/Modals/ModalQuickAddForm";

export default function HomePage() {
  const [showTaskForm, setShowTaskForm] = useState(true);
  const [quickTaskForm, setQuickTaskForm] = useState(false);

  const [burger, setBurger] = useState(false);
  return (
    <>
      <MainWrapper>
        <Header
          handlerClick={() => {
            setQuickTaskForm(true);
          }}
          burgerHandler={() => {
            setBurger(burger ? false : true);
          }}
        />
        <BurgerNavigation active={burger} setActive={setBurger} />
        <PageContainer>
          <PageHeader>
            <GetCurrentDate />
            <Filter>
              <FilterIcon />
              View
            </Filter>
          </PageHeader>

          {showTaskForm ? (
            <InnerContent
              hadlerClick={() => {
                setShowTaskForm(false);
              }}
            />
          ) : (
            <UploadTaskForm
              hadlerClick={() => {
                setShowTaskForm(true);
              }}
            />
          )}

          {/* quickTaskForm  */}
          <ModalQuickAddForm
            active={quickTaskForm}
            setActive={setQuickTaskForm}
          >
            <UploadTaskForm
              hadlerClick={() => {
                setQuickTaskForm(false);
              }}
            />
          </ModalQuickAddForm>
        </PageContainer>
      </MainWrapper>
    </>
  );
}

const InnerContent = ({ hadlerClick }) => {
  return (
    <>
      <AddTaskButton
        type="button"
        text="Add task"
        $mode="withIcon"
        onClick={hadlerClick}
      />
      <Content>
        <ContentImage>
          <img src="/Images/home-page-bg.png" alt="imag" />
        </ContentImage>
        <ContentTitle>Get a clear view of the day ahead</ContentTitle>
        <ContentSubtitle>
          All your tasks that are due today will show up here.
        </ContentSubtitle>
        <AddTaskButton type="button" text="Add task" onClick={hadlerClick} />
      </Content>
    </>
  );
};

const MainWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  position: relative;
`;

const PageContainer = styled.div`
  max-width: 820px;
  margin: 0 auto;
  padding: 0 10px;
  width: 100%;
  position: relative;
  margin-top: 100px;
`;

const PageHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  padding-right: 4px;
  &:hover {
    background-color: rgba(38, 38, 38, 0.2);
    border-radius: 3px;
  }
`;

const FilterIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
    >
      <path
        d="M15 14.5a2 2 0 011.936 1.498L19.5 16a.5.5 0 010 1l-2.563.001a2.001 2.001 0 01-3.874 0L4.5 17a.5.5 0 010-1l8.564-.002A2 2 0 0115 14.5zm-.982 1.81l.005-.025-.005.026-.003.014-.004.025-.007.061A.897.897 0 0014 16.5l.008.125.007.047-.001.002.003.014.006.024h-.001l.004.018.016.058.007.021.004.013.009.026.013.033.012.027-.011-.026.019.043-.008-.017.029.06-.018-.037.048.09a1 1 0 001.784-.155l.015-.039.006-.018-.015.039.022-.06-.001-.001.016-.057.004-.018.005-.024.001-.006v-.001l.005-.033.008-.06A.877.877 0 0016 16.5l-.008-.124-.007-.051-.001-.001-.003-.014-.01-.047-.004-.016-.007-.024-.01-.034-.004-.012-.01-.03-.006-.013-.007-.017-.01-.026a.998.998 0 00-1.843.043l-.014.034-.007.022-.014.047-.002.009v.001l-.005.016-.01.047zM9 9.5a2 2 0 011.936 1.498L19.5 11a.5.5 0 010 1l-8.563.001a2.001 2.001 0 01-3.874 0L4.5 12a.5.5 0 010-1l2.564-.002A2 2 0 019 9.5zm0 1a.998.998 0 00-.93.634l-.014.034-.007.022-.014.047-.002.009v.001l-.005.016-.01.047.005-.025-.005.026-.003.014-.004.025-.007.061C8 11.441 8 11.471 8 11.5l.008.125.007.047-.001.002.003.014.006.024h-.001l.004.018.016.058.007.021.004.013.009.026.013.033.012.027-.011-.026.019.043-.008-.017.029.06-.018-.037.048.09a1 1 0 001.784-.155l.015-.039.006-.018-.015.039.022-.06-.001-.001.016-.057.004-.018.005-.024.001-.006v-.001l.005-.033.008-.06A.877.877 0 0010 11.5l-.008-.124-.007-.051-.001-.001-.003-.014-.01-.047-.004-.016-.007-.024-.01-.034-.004-.012-.01-.03-.006-.013-.007-.017-.01-.026A1.002 1.002 0 009 10.5zm6-6a2 2 0 011.936 1.498L19.5 6a.5.5 0 010 1l-2.563.001a2.001 2.001 0 01-3.874 0L4.5 7a.5.5 0 010-1l8.564-.002A2 2 0 0115 4.5zm0 1a.998.998 0 00-.93.634l-.014.034-.007.022-.014.047-.002.009v.001l-.005.016-.01.047.005-.025-.005.026-.003.014-.004.025-.007.061C14 6.441 14 6.471 14 6.5l.008.125.007.047-.001.002.003.014.006.024h-.001l.004.018.016.058.007.021.004.013.009.026.013.033.012.027-.011-.026.019.043-.008-.017.029.06-.018-.037.048.09a1 1 0 001.784-.155l.015-.039.006-.018-.015.039.022-.06-.001-.001.016-.057.004-.018.005-.024.001-.006v-.001l.005-.033.008-.06C16 6.557 16 6.528 16 6.5l-.008-.124-.007-.051-.001-.001-.003-.014-.01-.047-.004-.016-.007-.024-.01-.034-.004-.012-.01-.03-.006-.013-.007-.017-.01-.026A1.002 1.002 0 0015 5.5z"
        fill="currentColor"
        fillRule="nonzero"
      ></path>
    </svg>
  );
};

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ContentImage = styled.div`
  width: 220px;
  height: 200px;
  & img {
    max-width: 100%;
    object-fit: cover;
  }
`;

const ContentTitle = styled.h3`
  font-size: 16px;
  color: #202020;
  margin: 8px 0;
`;

const ContentSubtitle = styled.p`
  color: #777;
  margin: 8px 0;
`;

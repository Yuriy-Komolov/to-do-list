import React, { useState } from "react";
import { useSelector } from "react-redux";

import styled from "styled-components";

import GetCurrentDate from "../Dates/GetCurrentDate";
import AddTaskButton from "../../UI/Buttons/AddTaskButton";

import UploadTaskForm from "../../UI/Forms/UploadTask/UploadTaskForm";

import EstablishIcon from "../../UI/Icons/HomePage/EstablishIcon";
import FilterIcon from "../../UI/Icons/HomePage/FilterIcon";
import CheckIcon from "../../UI/Icons/HomePage/CheckIcon";

import TasksList from "../../Components/Task/TasksList";
import Filters from "../Filters/Filters";
import ViewFiltersOption from "./ViewFiltersOption";

export default function HomeComponent() {
  const tasks = useSelector((state) => state.persistedReduser.tasks.taskList);
  const sortingMethod = useSelector(
    (state) => state.persistedReduser.tasks.sortBy.method
  );
  const [showTaskForm, setShowTaskForm] = useState(false);
  const [filtersBox, setFiltersBox] = useState(false);
  return (
    <>
      <MainWrapper>
        <PageContainer>
          <PageHeader>
            <GetCurrentDate />
            <Filter onClick={() => setFiltersBox(true)}>
              <FilterIcon />
              View
            </Filter>
          </PageHeader>

          {sortingMethod === "Default" ? null : (
            <ViewFiltersOption setFiltersBox={setFiltersBox} />
          )}

          {/* ==================Tasks Section ====================================== */}
          <TasksList />

          {showTaskForm ? null : (
            <AddTaskButton
              type="button"
              text="Add task"
              $mode="withIcon"
              onClick={() => setShowTaskForm(true)}
            />
          )}
          {/* =======================Basic Add Form =================================*/}
          {showTaskForm ? (
            <UploadTaskForm
              cancelHendler={() => setShowTaskForm(false)}
              activeForm={showTaskForm}
            />
          ) : tasks.length === 0 ? (
            <InnerContent setShowTaskForm={setShowTaskForm} />
          ) : null}
        </PageContainer>
        <Filters filtersBox={filtersBox} setFiltersBox={setFiltersBox} />
      </MainWrapper>
    </>
  );
}

// Some components, made to achive more easier reading of main component ---------------------------------------------
const InnerContent = ({ setShowTaskForm }) => {
  const [establishTooltip, setEstablishTooltip] = useState(false);
  return (
    <>
      <Content>
        <ContentImage>
          <img src="/Images/home-page-bg.png" alt="imag" />
        </ContentImage>
        <ContentTitle>Get a clear view of the day ahead</ContentTitle>
        <ContentSubtitle>
          All your tasks that are due today will show up here.
        </ContentSubtitle>
        <AddTaskButton
          type="button"
          text="Add task"
          onClick={() => {
            setShowTaskForm(true);
          }}
        />
        <ContentEstablish
          onMouseEnter={() => {
            setEstablishTooltip(true);
          }}
          onMouseLeave={() => {
            setEstablishTooltip(false);
          }}
        >
          <EstablishIcon />
          Establish your daily habit
        </ContentEstablish>
        <EstablishModal active={establishTooltip} />
      </Content>
    </>
  );
};
const EstablishModal = ({ active }) => {
  return (
    <>
      <EstablishModalConatiner active={active}>
        <EstablishModalTitle>
          <EstablishIcon />
          Establish your daily habit
        </EstablishModalTitle>
        <EstablishString>
          <CheckIcon />
          <p>
            Each morning, take a few minutes to clear your minds and plan your
            day.
          </p>
        </EstablishString>
        <EstablishString>
          <CheckIcon />
          <p>Decide what you can do today and postpone the rest later.</p>
        </EstablishString>
        <EstablishString>
          <CheckIcon />
          <p>Set priority and start with your important task first.</p>
        </EstablishString>
      </EstablishModalConatiner>
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
  color: grey;
  font-size: 12px;
  &:hover {
    background-color: rgba(38, 38, 38, 0.2);
    border-radius: 3px;
    color: #000;
    & svg path {
      fill: #000;
    }
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
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

const ContentEstablish = styled.div`
  display: flex;
  align-items: center;
  padding: 4px 6px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  margin-top: 20px;
  font-size: 13px;
  cursor: default;
  column-gap: 4px;
`;

const EstablishModalConatiner = styled.div`
  background-color: #2f3642;
  color: #fff;
  padding: 8px 12px;
  border-radius: 2px;
  font-size: 13px;
  max-width: 400px;
  position: absolute;
  bottom: 45px;
  visibility: ${(props) => (props.active ? "visible" : "hidden")};
  transition-delay: 1s, 1ms;
`;
const EstablishModalTitle = styled.div`
  display: flex;
  align-items: center;
  column-gap: 4px;
  font-size: 14px;
  font-weight: 700;
`;
const EstablishString = styled.div`
  display: flex;
  align-items: flex-start;
  padding: 4px 0;
  & p {
    padding: 2px 0 0 8px;
  }
`;

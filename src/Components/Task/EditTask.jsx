import React from "react";
import styled from "styled-components";
import CloseIconButton from "../../UI/Buttons/CloseIconButton";
import TaskItemCheckIcon from "../../UI/Icons/HomePage/TaskItemCheckIcon";
import TodayIcon from "../../UI/Icons/HomePage/TodayIcon";
import InboxIcon from "../../UI/Icons/Navigation/InboxIcon";

export default function EditTask({ taskEditModal, setTaskEditModal }) {
  return (
    <>
      <ModalWrapper active={taskEditModal}>
        <ModalBox>
          <BoxHeader>
            <InboxBtn>
              <InboxIcon />
              Inbox
            </InboxBtn>
            <CloseIconButton
              clickHandler={() => {
                setTaskEditModal(false);
              }}
            />
          </BoxHeader>
          <ItemBody>
            <Checkbox>
              <StyledCheckBoxIcon>
                <TaskItemCheckIcon />
              </StyledCheckBoxIcon>
            </Checkbox>
            <ItemContent>
              <TitleEdit>Text</TitleEdit>
              <DescriptionEdit>DescriptionEdit</DescriptionEdit>

              <div>
                <TodayButton>
                  <TodayIcon />
                  Today
                </TodayButton>
              </div>
            </ItemContent>
          </ItemBody>
        </ModalBox>
      </ModalWrapper>
    </>
  );
}

const ModalWrapper = styled.div`
  height: 100vh;
  width: 100vw;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 100;
  background-color: rgba(0, 0, 0, 0.4);
  display: ${(props) => (props.active ? "flex" : "none")};
  align-items: center;
  justify-content: center;
`;

const ModalBox = styled.div`
  background-color: #fff;
  position: relative;
  width: 100%;
  max-width: 650px;
  border-radius: 10px;
  max-height: 960px;
  min-height: 400px;
  padding: 20px 24px;
`;

const BoxHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;

const ItemBody = styled.div`
  display: flex;
`;

const InboxBtn = styled.button`
  display: flex;
  align-items: center;
  border: none;
  outline: none;
  column-gap: 10px;
  & svg {
    width: 16px;
    height: 16px;
  }
`;

const Checkbox = styled.div`
  width: 18px;
  height: 18px;
  border-radius: 50%;
  border: 1px solid rgba(0, 0, 0, 0.4);
  position: relative;
  margin-top: 2px;
  margin-right: 10px;
  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
    cursor: pointer;
    & div {
      transition: opacity 0.4s;
      opacity: 1;
    }
  }
`;

const StyledCheckBoxIcon = styled.div`
  opacity: 0;
  position: absolute;
  top: -4px;
  right: -4px;
  border-radius: 50%;
`;
const ItemContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
const TitleEdit = styled.span`
  font-size: 20px;
  font-weight: 700;
  line-height: 25px;
  cursor: text;
  width: 100%;
  margin-bottom: 10px;
`;
const DescriptionEdit = styled.span`
  cursor: text;
  color: rgba(0, 0, 0, 0.4);
  font-size: 13px;
  margin-bottom: 25px;
`;

const TodayButton = styled.button`
  display: flex;
  flex-flow: row wrap;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  color: #058527;
  padding: 4px 8px;
  cursor: pointer;
  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;

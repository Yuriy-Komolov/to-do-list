import React from "react";
import styled from "styled-components";

import ProfileAvatar from "../../UI/Atoms/ProfileAvatar";
import { useAuth } from "../Hooks/useAuth";

import { signOut } from "firebase/auth";
import { auth } from "../../FireBase/firebase";
import { useDispatch } from "react-redux";
import { removeUser } from "../../Store/slices/userSlice";

import { Line } from "../../UI/Atoms/Line";
import SettingsIcon from "../../UI/Icons/Profile/SettingsIcon";
import ThemeIcon from "../../UI/Icons/Profile/ThemeIcon";
import ActivityIcon from "../../UI/Icons/Profile/ActivityIcon";
import PrintIcon from "../../UI/Icons/Profile/PrintIcon";
import IntegrationsIcon from "../../UI/Icons/Profile/IntegrationsIcon";
import LogOutIcon from "../../UI/Icons/Profile/LogOutIcon";

export default function ProfileComponent({ userProfile, setUserProfile }) {
  const user = useAuth();
  const dispatch = useDispatch();

  const logout = async () => {
    await signOut(auth);
    dispatch(removeUser());
  };
  return (
    <>
      <Wrapper
        active={userProfile}
        onClick={() => {
          setUserProfile(false);
        }}
      >
        <Container>
          <Section>
            <SettingsSection>
              <SettingsHeader>
                <StyledProfileAvatar />
                <UserInfo>
                  <strong>{user.userName}</strong>
                  <UserEmail>{user.email}</UserEmail>
                </UserInfo>
              </SettingsHeader>
              {/* fedf ed */}
              <SettingsBottom>
                <Settings>
                  <SettingsIcon />
                  Settings
                </Settings>
                <ControlersButton>O then S</ControlersButton>
              </SettingsBottom>
            </SettingsSection>
          </Section>
          <Line />
          <Section>
            <SectionRow>
              <SectionIcon>
                <ThemeIcon /> Theme
              </SectionIcon>
              <ControlersButton>O then T</ControlersButton>
            </SectionRow>
            <SectionRow>
              <SectionIcon>
                <ActivityIcon /> Activity log
              </SectionIcon>
              <ControlersButton>G then A</ControlersButton>
            </SectionRow>
            <SectionRow>
              <SectionIcon>
                <PrintIcon /> Print
              </SectionIcon>
              <ControlersButton>O then T</ControlersButton>
            </SectionRow>
            <SectionRow>
              <SectionIcon>
                <IntegrationsIcon /> Theme
              </SectionIcon>
              <ControlersButton>O then T</ControlersButton>
            </SectionRow>
          </Section>
          <Line />
          <Section>
            <RowWithoutControles onClick={logout}>
              <LogOutIcon />
              Log out
            </RowWithoutControles>
          </Section>
        </Container>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  z-index: 1000;
  display: ${(props) => (props.active ? "block" : "none")};
`;

const Container = styled.div`
  position: absolute;
  top: 50px;
  right: 40px;
  width: auto;
  max-width: 350px;
  min-width: 276px;
  max-height: 80vh;
  box-shadow: 0 2px 4px 0 rgb(0 0 0 / 8%);
  background-color: #fff;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 12px;
`;

const Section = styled.div`
  padding: 6px;
`;
const SectionRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  column-gap: 4px;
  padding: 4px 8px 4px;
  border-radius: 8px;
  cursor: pointer;
  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;
const RowWithoutControles = styled(SectionRow)`
  justify-content: flex-start;
  align-items: center;
`;

const SectionIcon = styled.div`
  display: flex;
  align-items: center;
  column-gap: 4px;
`;
const SettingsSection = styled.div`
  padding: 0 8px 6px;
  border-radius: 8px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  row-gap: 14px;
  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;

const SettingsHeader = styled.div`
  display: flex;
  column-gap: 12px;
`;
const StyledProfileAvatar = styled(ProfileAvatar)`
  font-size: 24px;
`;

const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
`;
const UserEmail = styled.span`
  color: grey;
`;

const Settings = styled.div`
  display: flex;
  align-items: center;
  column-gap: 4px;
`;
const SettingsBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const ControlersButton = styled.span`
  color: grey;
  font-size: 12px;
`;

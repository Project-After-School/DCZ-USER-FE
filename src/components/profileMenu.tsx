import { BasicProfile, LogOutIcon, ProfileChangeIcon } from "@/assets/svg";
import { theme } from "@/styles/theme";
import { useState } from "react";
import { styled } from "styled-components";
import { Modal } from "./common/modal";
import { useNavigate } from "react-router-dom";

export const ProfileMenu = () => {
  const navitaion = useNavigate();
  const [logout, setLogout] = useState<boolean>(false);
  const grade = 2;
  const class_num = 2;
  const name = "박현아";
  return (
    <Container>
      <UserInfomationBox>
        <img src={BasicProfile} width={48} height={48} alt="" />
        <InfomationText>
          {grade}학년 {class_num}반 {name}
        </InfomationText>
      </UserInfomationBox>
      <Content>계정</Content>
      <Content>
        <img src={ProfileChangeIcon} alt="" />
        프로필 사진 변경
      </Content>
      <Content onClick={() => setLogout(true)}>
        <img src={LogOutIcon} alt="" />
        로그아웃
      </Content>
      {logout && (
        <Modal
          title="로그아웃 하시겠습니까?"
          subTitle="다음 접속 시 로그인을 해야합니다."
          onCancel={() => setLogout(false)}
          onConfirm={() => navitaion("/login")}
        />
      )}
    </Container>
  );
};

const Container = styled.div`
  left: -310%;
  position: absolute;
  border: 1px solid ${theme.color.gray[800]};
  border-radius: 12px;
  width: 380px;
  padding: 0px 24px;
  top: 140%;
`;

const UserInfomationBox = styled.div`
  display: flex;
  padding: 12px 0px;
  gap: 16px;
  color: ${theme.color.gray[100]};
  align-items: center;
  user-select: none;
  font-size: ${theme.font.subTitle[2].size};
  font-weight: ${theme.font.subTitle[2].fontweight};
`;

const InfomationText = styled.p`
  font-size: ${theme.font.subTitle[1].size};
  font-weight: ${theme.font.subTitle[1].fontweight};
`;

const Content = styled.div`
  display: flex;
  padding: 20px 0px;
  gap: 20px;
  color: ${theme.color.gray[100]};
  user-select: none;
  cursor: pointer;
  font-size: ${theme.font.subTitle[2].size};
  font-weight: ${theme.font.subTitle[2].fontweight};
`;

import { styled } from "styled-components";
import { theme } from "@/styles/theme";
import Subject from "@/components/notice/subject/index";
import NoticeComponent from "@/components/notice/noticeList";

const Notice = () => {
  return (
    <Container>
      <TitleText>공지사항</TitleText>
      <SubjectContainer>
        <Subject />
        <Subject />
        <Subject />
        <Subject />
        <Subject />
        <Subject />
        <Subject />
        <Subject />
        <Subject />
        <Subject />
        <Subject />
      </SubjectContainer>
      <SubjectText>수학</SubjectText>
      <NoticeContentContainer>
        <NoticeComponent id="1" /> <NoticeComponent id="1" />
        <NoticeComponent id="1" /> <NoticeComponent id="1" />
        <NoticeComponent id="1" /> <NoticeComponent id="1" />
        <NoticeComponent id="1" /> <NoticeComponent id="1" />
        <NoticeComponent id="1" /> <NoticeComponent id="1" />
        <NoticeComponent id="1" /> <NoticeComponent id="1" />
        <NoticeComponent id="1" /> <NoticeComponent id="1" />
        <NoticeComponent id="1" /> <NoticeComponent id="1" />
        <NoticeComponent id="1" /> <NoticeComponent id="1" />
        <NoticeComponent id="1" />
      </NoticeContentContainer>
    </Container>
  );
};

export default Notice;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100dvh;
  gap: 40px;
`;

const TitleText = styled.p`
  font-size: ${theme.font.heading[1].size};
  font-weight: ${theme.font.heading[1].fontWeight};
  color: ${theme.color.white};
  user-select: none;
`;

const SubjectContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  gap: 44px;
  overflow-x: scroll;
  overflow-y: hidden;
  scrollbar-width: none;
`;

const SubjectText = styled.p`
  font-size: ${theme.font.heading[2].size};
  font-weight: ${theme.font.heading[2].fontweight};
  color: ${theme.color.white};
  user-select: none;
`;

const NoticeContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  /* height: 100%; */
  gap: 68px; //padding으로 못 바꾸나...?
  overflow-x: hidden;
  overflow-y: scroll;
`;

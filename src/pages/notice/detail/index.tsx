import { styled } from "styled-components";
import { theme } from "@/styles/theme";
import { QnaContainer } from "@/components/QnA";

const NoticeDetail = () => {
  return (
    <MainContainer>
      <ContentContainer>
        <TitleContainer>
          <TitleText>추석 때 새자 해야됨</TitleText>
          <SubContainer>
            <TeacherText>박현아 일 안함😵‍💫</TeacherText>
            <DateText>9월 22일</DateText>
          </SubContainer>
        </TitleContainer>
        <ContentText>
          fjsal;jdfl;kajflskdk fslakjlsadj;lfjas
          fsdak;ljfsljk;fdfdsjflk;dsaj;kfljkldsflk
        </ContentText>
      </ContentContainer>
      <QnaContainer type="notice" />
    </MainContainer>
  );
};

export default NoticeDetail;

const MainContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 100dvh;
  gap: 40px;
  color: ${theme.color.white};
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100dvh;
  gap: 28px;
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 20px;
  padding: 20px 0px 40px 0px;
  border-bottom: 1px solid ${theme.color.gray[900]};
`;
const TitleText = styled.p`
  font-size: ${theme.font.heading[2].size};
  font-weight: ${theme.font.heading[2].fontweight};
  user-select: none;
`;

const SubContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 13.5px 0px;
`;

const TeacherText = styled.p`
  font-size: ${theme.font.caption[1].size};
  font-weight: ${theme.font.caption[1].fontweight};
  color: ${theme.color.gray[100]};
  user-select: none;
`;

const DateText = styled.p`
  font-size: ${theme.font.heading[4].size};
  font-weight: ${theme.font.heading[4].fontweight};
  color: ${theme.color.gray[100]};
  user-select: none;
`;

const ContentText = styled.p`
  font-size: ${theme.font.body[2].size};
  font-weight: ${theme.font.body[2].fontweight};
  color: ${theme.color.gray[50]};
`;

import { QnaContainer } from "@/components/QnA";
import { theme } from "@/styles/theme";
import { styled } from "styled-components";
import { UploadTask } from "../components/uploadTask";

interface AssignmentDetailProp {
  title: string;
  subject: string;
  teacher: string;
  period: string;
  explain: string;
  submission_form: string;
  file_form?: string;
}

export const AssignmentDetailPage = ({
  title,
  subject,
  teacher,
  period,
  explain,
  submission_form,
  file_form,
}: AssignmentDetailProp) => {
  return (
    <Container>
      <TitleContainer>
        <TopText>{title}</TopText>
        <BottomTitle>
          <BottomTitleLeft>
            <SubTitleText>{subject}</SubTitleText>
            <SubTitleText> {teacher}</SubTitleText>
          </BottomTitleLeft>
          <Period> {period}</Period>
        </BottomTitle>
      </TitleContainer>
      <Content>
        <div>
          <div>
            <ContentTitleText>과제 설명</ContentTitleText>
            <ContentExplainText>{explain}</ContentExplainText>

            <ContentTitleText>과제 양식</ContentTitleText>
            <ContentExplainText>{submission_form}</ContentExplainText>
          </div>
          {file_form && <ContentTitleText>파일 양식</ContentTitleText>}
        </div>
        <QnaContainer type="notice" />
      </Content>
      <UploadTask />
    </Container>
  );
};

const Container = styled.div`
  color: ${theme.color.white};
`;

const TopText = styled.p`
  font-size: ${theme.font.heading[2].size};
  font-weight: ${theme.font.heading[2].fontweight};
  margin-bottom: 20px;
`;

const BottomTitleLeft = styled.div`
  display: flex;
  gap: 20px;
`;

const TitleContainer = styled.div`
  width: 100%;
  padding: 20px 0px 40px 0px;
  border-bottom: 1px solid ${theme.color.gray[900]};
`;

const BottomTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const SubTitleText = styled.p`
  font-size: ${theme.font.body[1].size};
  font-weight: ${theme.font.body[1].fontweight};
  color: ${theme.color.gray[300]};
`;

const Period = styled.p`
  font-size: ${theme.font.heading[4].size};
  font-weight: ${theme.font.heading[4].fontweight};
  color: ${theme.color.gray[100]};
`;

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 32px;
  gap: 40px;
`;

const ContentTitleText = styled.p`
  font-size: ${theme.font.heading[4].size};
  font-weight: ${theme.font.heading[4].fontweight};
  margin-bottom: 12px;
`;

const ContentExplainText = styled.p`
  font-size: ${theme.font.caption[1].size};
  font-weight: ${theme.font.caption[1].fontweight};
  color: ${theme.color.gray[200]};
  margin-bottom: 32px;
`;

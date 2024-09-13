import { styled } from "styled-components";
import { theme } from "@/styles/theme";
import { Link } from "react-router-dom";

interface NoticeProps {
  id: string;
}

const NoticeComponent = ({ id }: NoticeProps) => {
  return (
    <Container to={id}>
      <TitleContainer>
        <TitleText>수학 수행 안내</TitleText>
        <SubTitleText>1일전</SubTitleText>
      </TitleContainer>
      <CheckText>읽음</CheckText>
    </Container>
  );
};

export default NoticeComponent;

const Container = styled(Link)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  text-decoration: none;
  user-select: none;
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 15px;
`;

const TitleText = styled.p`
  font-size: ${theme.font.heading[3].size};
  font-weight: ${theme.font.heading[3].fontweight};
  color: ${theme.color.white};
`;

const SubTitleText = styled.p`
  font-size: ${theme.font.body[1].size};
  font-weight: ${theme.font.body[1].fontweight};
  color: ${theme.color.gray[200]};
`;

const CheckText = styled.p`
  font-size: ${theme.font.body[1].size};
  font-weight: ${theme.font.body[1].fontweight};
  color: ${theme.color.gray[600]};
`;

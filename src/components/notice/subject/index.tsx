import { styled } from "styled-components";
import { theme } from "@/styles/theme";
import { useState } from "react";

const Subject = () => {
  const [isHovered, setIsHovered] = useState<boolean>(false);

  return (
    <Container
      onMouseLeave={() => setIsHovered(false)}
      onMouseEnter={() => setIsHovered(true)}
    >
      <ImageContainer isHovered={isHovered} />
      <SubjectText isHovered={isHovered}>수학</SubjectText>
    </Container>
  );
};

export default Subject;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  gap: 15px;
  cursor: pointer;
`;

const ImageContainer = styled.img<{ isHovered: boolean }>`
  height: 76px;
  width: 76px;
  border-radius: 50%;
  border: 2px solid
    ${({ isHovered }) =>
      isHovered ? theme.color.main[500] : theme.color.gray[400]};
  background-color: ${theme.color.gray[400]};
  user-select: none;
`;

const SubjectText = styled.p<{ isHovered: boolean }>`
  font-size: ${theme.font.heading[4].size};
  font-weight: ${theme.font.heading[4].fontweight};
  color: ${({ isHovered }) =>
    isHovered ? theme.color.main[500] : theme.color.gray[400]};
  user-select: none;
`;

import { AssignmentIcon } from "@/assets/svg";
import { theme } from "@/styles/theme";
import { Link } from "react-router-dom";
import { styled } from "styled-components";

interface assignment {
  d_day: number;
  date: string;
  tomorrow?: boolean;
  img: string;
  subject: string;
  teacher: string;
  assignmentContent: string;
  id: string;
}

export const AssignmentComponent = ({
  teacher,
  d_day,
  tomorrow,
  img,
  subject,
  assignmentContent,
  id,
}: assignment) => {
  return (
    <Container to={id} tomorrow={tomorrow}>
      <Top tomorrow={tomorrow}>
        <D_day>D-{d_day}</D_day>
        {tomorrow && <ImminentText>기간이 하루 남았어요!</ImminentText>}
      </Top>
      <Middle>
        <SubjectIcon tomorrow={tomorrow} src={img} alt="" />
        <MiddleText>{subject}</MiddleText>
        <MiddleText>{teacher}</MiddleText>
      </Middle>
      <Line />
      <Bottom>
        <AssignmentIcon
          Fill={tomorrow ? theme.color.sub.green : theme.color.main[900]}
        />
        {assignmentContent}
      </Bottom>
    </Container>
  );
};

const Container = styled(Link)<{ tomorrow?: boolean }>`
  border: 1px solid
    ${({ tomorrow }) =>
      tomorrow ? theme.color.sub.green : theme.color.gray[900]};
  padding: 20px;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  color: ${theme.color.white};
  text-decoration: none;
  cursor: pointer;
  color: ${({ tomorrow }) =>
    tomorrow ? theme.color.sub.green : theme.color.white};
`;

const D_day = styled.p<{ tomorrow?: boolean }>`
  font-size: ${theme.font.heading[3].size};
  font-weight: ${theme.font.heading[3].fontweight};
`;

const Top = styled.div<{ tomorrow?: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${({ tomorrow }) =>
    tomorrow ? theme.color.sub.green : theme.color.main[900]};
`;

const ImminentText = styled.p`
  font-size: ${theme.font.heading[4].size};
  font-weight: ${theme.font.heading[4].fontweight};
`;

const Middle = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
  color: ${theme.color.gray[200]};
`;

const SubjectIcon = styled.img<{ tomorrow?: boolean }>`
  width: 32px;
  border-radius: 50%;
  height: 32px;
  border: 1px solid
    ${({ tomorrow }) =>
      tomorrow ? theme.color.sub.green : theme.color.main[900]};
`;

const MiddleText = styled.p`
  font-size: ${theme.font.body[1].size};
  font-weight: ${theme.font.body[1].fontweight};
`;

const Bottom = styled.div`
  display: flex;
  gap: 8px;
`;

const Line = styled.div`
  border-bottom: 1px solid ${theme.color.gray[900]};
`;

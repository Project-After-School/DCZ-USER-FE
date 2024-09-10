import { theme } from "@/styles/theme";
import { Link } from "react-router-dom";
import { styled } from "styled-components";

interface ListProps {
  text: string;
  link: string;
  path: string;
}

interface TabProps {
  list: ListProps[];
  selected: string;
}

export default function Tab({ list, selected }: TabProps) {
  return (
    <Container>
      {list.map((v) => (
        <TabStyle key={v.path} to={v.path} selected={v.link === selected}>
          {v.text}
        </TabStyle>
      ))}
    </Container>
  );
}

const TabStyle = styled(Link)<{ selected: boolean }>`
  border-bottom: 2px solid
    ${({ selected }) => (selected ? theme.color.main[500] : "none")};
  padding: 12px;
  text-decoration: none;
  color: ${theme.color.white};
  font-size: ${theme.font.heading[3].size};
  font-weight: ${theme.font.heading[3].fontweight};
`;

const Container = styled.div`
  display: flex;
  gap: 40px;
  background-color: ${theme.color.BG};
`;

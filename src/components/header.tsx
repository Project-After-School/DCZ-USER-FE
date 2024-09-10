import { useLocation } from "react-router-dom";
import Tab from "./common/tab";
import { BasicProfile, DCZLogo } from "@/assets/svg";
import { styled } from "styled-components";
import { theme } from "@/styles/theme";

const Header = () => {
  const pathname = useLocation().pathname.split("/")[1];
  console.log(pathname);

  return (
    <Container>
      <LeftHeaderContent>
        <a href="/home">
          <img src={DCZLogo} width={129} height={64} />
        </a>
        <Tab
          list={[
            { text: "홈", link: "home", path: "/home" },
            { text: "공지사항", link: "notice", path: "/notice" },
            { text: "제출된 과제", link: "homework", path: "/homework" },
          ]}
          selected={pathname}
        />
      </LeftHeaderContent>
      <img src={BasicProfile} alt="" width={52} height={52} />
    </Container>
  );
};

export default Header;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 30px 23% 0px 23%;
`;

const LeftHeaderContent = styled.div`
  display: flex;
  align-items: center;
  gap: 56px;
`;

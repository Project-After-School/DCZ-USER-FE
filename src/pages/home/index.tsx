import { DCZLogo } from "@/assets/svg";
import { AssignmentComponent } from "@/components/assignment";
import { theme } from "@/styles/theme";
import { styled } from "styled-components";

const Home = () => {
  const data = [
    {
      teacher: "고은영 선생님",
      d_day: 1,
      date: "2024-09-15",
      img: { DCZLogo },
      subject: "영어",
      assignmentContent: "영어 ppt 제출",
      tomorrow: true,
      id: "1",
    },
    {
      teacher: "고은영 선생님",
      d_day: 1,
      date: "2024-09-15",
      img: { DCZLogo },
      subject: "영어",
      assignmentContent: "영어 ppt 제출",
      tomorrow: false,
      id: "1",
    },
    {
      teacher: "고은영 선생님",
      d_day: 1,
      date: "2024-09-15",
      img: { DCZLogo },
      subject: "영어",
      assignmentContent: "영어 ppt 제출",
      tomorrow: false,
      id: "1",
    },
    {
      teacher: "고은영 선생님",
      d_day: 1,
      date: "2024-09-15",
      img: { DCZLogo },
      subject: "영어",
      assignmentContent: "영어 ppt 제출",
      tomorrow: false,
      id: "1",
    },
  ];

  return (
    <Container>
      <Head>
        <Title>해결할 과제</Title> <SubTitle>임박순 정렬</SubTitle>
      </Head>
      <Content>
        {data.map((item) => (
          <AssignmentComponent
            d_day={item.d_day}
            date={item.date}
            teacher={item.teacher}
            tomorrow={item.tomorrow}
            img={item.img.DCZLogo}
            id={item.id}
            subject={item.subject}
            assignmentContent={item.assignmentContent}
          />
        ))}
      </Content>
    </Container>
  );
};

export default Home;

const Container = styled.div`
  color: ${theme.color.white};
  margin-bottom: 60px;
`;

const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 40px;
  margin-top: 60px;
  overflow-y: auto;
`;

const Head = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid ${theme.color.gray[900]};
  align-items: center;
  padding: 20px 0px 40px 0px;
`;

const Title = styled.h1`
  font-size: ${theme.font.heading[1].size};
  font-weight: ${theme.font.heading[1].fontWeight};
`;

const SubTitle = styled.p`
  font-size: ${theme.font.body[1].size};
  font-weight: ${theme.font.body[1].fontweight};
  color: ${theme.color.gray[100]};
`;

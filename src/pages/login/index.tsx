import Input from "@/components/common/Input";
import Button from "@/components/common/Button";
import { styled } from "styled-components";
import { DCZLogo } from "@/assets/svg";
import { theme } from "@/styles/theme";
import { loginInstance } from "@/apis";
import { useState } from "react";
import { cookie } from "@/utils/auth";
import { useNavigate } from "react-router-dom";
import axios from "axios";

interface LoginData {
  account_id: string;
  password: string;
}

const Login = () => {
  const router = useNavigate();
  const [data, setData] = useState<LoginData>({
    account_id: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleLogin = async () => {
    try {
      const res = await loginInstance.post("user/login", data);
      cookie.set("access_token", res.data.access_token);
      router("/home");
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (error.response?.status === 401) {
          // 토스트 메시지 구현
          console.error("로그인 실패: 잘못된 자격 증명");
        } else {
          // 토스트 메시지 구현
          console.error("로그인 중 오류 발생:", error.message);
        }
      } else {
        // 토스트 메시지 구현
        console.error("알 수 없는 오류 발생:", error);
      }
    }
  };
  return (
    <Container>
      <img src={DCZLogo} />
      <SubContainer>
        <InputContainer>
          <TextContainer>
            <LoginText>로그인 하기</LoginText>
            <SubText>스퀘어 계정으로 로그인해주세요</SubText>
          </TextContainer>
          <Input
            onChange={handleChange}
            name="account_id"
            value={data.account_id}
            type="text"
            label="아이디"
            placeholder="아이디 입력"
          />
          <Input
            onChange={handleChange}
            name="password"
            value={data.password}
            type="password"
            label="비밀번호"
            placeholder="비밀번호 입력"
          />
        </InputContainer>
        <Button width="318px" onClick={handleLogin}>
          로그인하기
        </Button>
      </SubContainer>
    </Container>
  );
};

export default Login;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100dvh;
  gap: 24px;
`;

const SubContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: end;
  gap: 80px;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 60px;
`;

const LoginText = styled.p`
  font-size: ${theme.font.heading[2].size};
  font-weight: ${theme.font.heading[2].fontweight};
  color: ${theme.color.white};
  user-select: none;
`;

const SubText = styled.p`
  font-size: ${theme.font.label[1].size};
  font-weight: ${theme.font.label[1].fontweight};
  color: ${theme.color.gray[200]};
  user-select: none;
`;

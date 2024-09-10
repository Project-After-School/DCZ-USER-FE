import Input from '@/components/common/Input';
import Button from '@/components/common/Button';
import { styled } from "styled-components";
import { DCZLogo } from '@/assets/svg';
import { theme } from "@/styles/theme";

const Login = () => {
  return (
    <Container>
        <img src={DCZLogo}/>
        <SubContainer>
        <InputContainer>
        <TextContainer>
            <LoginText>
                로그인 하기
            </LoginText>
            <SubText>
                스퀘어 계정으로 로그인해주세요
            </SubText>
        </TextContainer>
            <Input
                type='text'
                label='아이디'
                placeholder='아이디 입력'
            />
            <Input
                type='password'
                label='비밀번호'
                placeholder='비밀번호 입력'
            />
        </InputContainer>
        <Button
            width='318px'
        >
        로그인하기
        </Button>
        </SubContainer>
    </Container>
  )
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


import { theme } from "../../../styles/theme";
import { useState } from "react";
import { styled } from "styled-components";
import { EyeOff, EyeOpen } from "@/assets/svg";

interface InputProp {
  label?: string;
  type: "text" | "password" | "textarea";
  placeholder?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name?: string;
  value?: string;
  onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
}

const Input = ({
  label,
  type,
  placeholder,
  onChange,
  name,
  value,
  onKeyDown,
}: InputProp) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  return (
    <Container>
      <InputLabel>{label}</InputLabel>
      <InputContainer>
        <InputContent
          type={
            type === "password" ? (showPassword ? "text" : "password") : type
          }
          placeholder={placeholder}
          onChange={onChange}
          onKeyDown={onKeyDown}
          name={name}
          value={value}
          autoComplete="off"
        />
        {type === "password" && (
          <EyesContainer onClick={() => setShowPassword(!showPassword)}>
            {showPassword ? (
              <EyeImg src={EyeOpen} alt="" />
            ) : (
              <EyeImg src={EyeOff} alt="" />
            )}
          </EyesContainer>
        )}
      </InputContainer>
    </Container>
  );
};

export default Input;

const InputContainer = styled.div`
  display: flex;
  width: 600px;
  border-radius: 8px;
  padding: 11px 16px;
  background-color: ${theme.color.gray[900]};
  border: 1px solid ${theme.color.gray[900]};

  &:hover {
    border: 1px solid ${theme.color.main[500]};
  }

  &:focus-within {
    border: 1px solid ${theme.color.main[500]};
  }
`;

const InputContent = styled.input`
  display: flex;
  height: 24px;
  width: 100%;

  background-color: ${theme.color.gray[900]};
  color: ${theme.color.white};
  outline: none;

  caret-color: ${theme.color.main[500]};

  &::placeholder {
    font-size: ${theme.font.caption[1].size};
    font-weight: ${theme.font.caption[1].fontweight};
    color: ${theme.color.gray[600]};
  }
`;

const InputLabel = styled.label`
  font-size: ${theme.font.label[1].size};
  font-weight: ${theme.font.label[1].fontweight};
  color: ${theme.color.white};
`;

const EyesContainer = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const EyeImg = styled.img`
  background-color: ${theme.color.gray[900]};
`;

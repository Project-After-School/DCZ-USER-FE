import { theme } from "@/styles/theme";
import React from "react";
import styled from "styled-components";

interface QnaProps {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name: string;
  value: string;
  onKeyDown: (event: React.KeyboardEvent<HTMLInputElement>) => void;
}

export default function QnAInput({
  onChange,
  name,
  value,
  onKeyDown,
}: QnaProps) {
  return (
    <Input
      onKeyDown={onKeyDown}
      name={name}
      onChange={onChange}
      value={value}
      type="text"
      placeholder="질문을 입력해주세요"
    />
  );
}

const Input = styled.input`
  background-color: ${theme.color.gray[900]};
  padding: 8px 16px;
  border-radius: 8px;
  color: ${theme.color.white};
  outline: none;
  border: 1px solid ${theme.color.gray[900]};

  &:focus {
    border-color: ${theme.color.main[900]};
  }
`;

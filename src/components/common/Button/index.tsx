import { theme } from "@/styles/theme";
import { styled } from "styled-components";

interface ButtonProps {
  width: string;
  children?: React.ReactNode;
  disabled?: boolean;
  onClick?: () => void;
  error?: boolean;
  height?: string;
}

const Button = ({
  width,
  children,
  disabled = false,
  onClick,
  error,
  height,
}: ButtonProps) => {
  return (
    <ButtonContainer
      error={error}
      width={width}
      disabled={disabled}
      onClick={onClick}
      height={height}
    >
      {children}
    </ButtonContainer>
  );
};

export default Button;

const ButtonContainer = styled.button<{
  width: string;
  error?: boolean;
  height?: string;
}>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${({ width }) => width};
  padding: 20px;
  color: ${theme.color.black};
  background-color: ${theme.color.main[500]};
  border-radius: 8px;
  height: ${({ height }) => (height ? height : "auto")};

  font-size: ${theme.font.button[1].size};
  font-weight: ${theme.font.button[1].fontweight};

  &:hover {
    background-color: ${theme.color.main[300]};
  }

  &:active {
    background-color: ${theme.color.main[700]};
  }

  &:disabled {
    background-color: ${theme.color.main[100]};
  }
`;

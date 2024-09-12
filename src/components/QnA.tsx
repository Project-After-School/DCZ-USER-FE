import { theme } from "@/styles/theme";
import { styled } from "styled-components";
import QnAInput from "./common/Input/qnainput";
import { SubmitIcon } from "@/assets/svg";
import { useState } from "react";

interface QnAProps {
  type: "notice" | "assignment";
}

interface Message {
  text: string;
}

export const QnaContainer = ({ type }: QnAProps) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [currentMessage, setCurrentMessage] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentMessage(e.target.value);
  };

  const handleSubmit = () => {
    if (currentMessage.trim()) {
      const newMessage: Message = {
        text: currentMessage,
      };
      setMessages((prev) => [...prev, newMessage]);
      setCurrentMessage("");
    }
  };

  const handleKeyDown = async (
    event: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (event.key === "Enter") {
      handleSubmit();
    }
  };

  return (
    <Container>
      <Header>
        <p>Q&A</p>
        {type === "assignment" ? (
          <ExplainText>작성자와 관리자만 열람 가능합니다.</ExplainText>
        ) : (
          <ExplainText>모든 사람이 볼 수 있습니다.</ExplainText>
        )}
      </Header>
      <Middle>
        {messages.map((message, index) => (
          <MessageBubble key={index}>{message.text}</MessageBubble>
        ))}
      </Middle>
      <InputWrap>
        <QnAInput
          onChange={handleChange}
          name="question"
          value={currentMessage}
          onKeyDown={handleKeyDown}
        />
        <Submit
          src={SubmitIcon}
          type="image"
          alt="Submit"
          onClick={handleSubmit}
        />
      </InputWrap>
    </Container>
  );
};

const Header = styled.div`
  margin-bottom: 10px;
`;

const Middle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  scrollbar-width: none;
  height: 80%;
  overflow: auto;
  margin-bottom: 20px;
`;

const MessageBubble = styled.div`
  color: ${theme.color.white};
  padding: 12px;
  background-color: ${theme.color.gray[800]};
  border-radius: 12px;
  width: 70%;
  display: flex;
  align-self: flex-end;
`;

const Container = styled.div`
  border: 1px solid ${theme.color.gray[900]};
  padding: 20px;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 420px;
  width: 280px;
`;

const ExplainText = styled.p`
  font-size: ${theme.font.body[3].size};
  font-weight: ${theme.font.body[3].fontweight};
  color: ${theme.color.gray[100]};
  margin-top: 8px;
`;

const InputWrap = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
`;

const Submit = styled.input`
  cursor: pointer;
  width: 24px;
  height: 24px;
`;

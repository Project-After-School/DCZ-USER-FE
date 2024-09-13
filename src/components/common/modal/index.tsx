import { styled } from "styled-components";
import { theme } from "@/styles/theme";

interface ModalProp {
  title: string;
  subTitle: string;
  onCancel: () => void;
  onConfirm: () => void;
  initialDate?: string;
}
export const Modal = ({ title, subTitle, onCancel, onConfirm }: ModalProp) => {
  return (
    <ModalWrap>
      <ModalStyle>
        <TextWrap>
          <ModalTitle>{title}</ModalTitle>
          <ModalSubTitle>{subTitle}</ModalSubTitle>
        </TextWrap>
        <ButtonWrap>
          <CancelButton onClick={onCancel}>취소</CancelButton>
          <ConfirmButton onClick={onConfirm}>확인</ConfirmButton>
        </ButtonWrap>
      </ModalStyle>
    </ModalWrap>
  );
};

const ModalWrap = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: #0000008c;
  backdrop-filter: blur(1px);
  height: 100%;
  z-index: 1;
  color: ${theme.color.white};
`;

const ModalStyle = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  background-color: ${theme.color.BG};
  border-radius: 12px;
  opacity: 1;
  border: 1px solid ${theme.color.gray[800]};
`;

const ButtonWrap = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 100px;
  border-radius: 0px 0px 12px 12px;
`;

const ModalTitle = styled.p`
  text-align: center;
  font-size: ${theme.font.heading[2].size};
  font-weight: ${theme.font.heading[2].fontweight};
`;

const ModalSubTitle = styled.p`
  text-align: center;
  font-size: ${theme.font.subTitle[1].size};
  font-weight: ${theme.font.subTitle[1].fontweight};
  color: ${theme.color.gray[200]};
`;

const ConfirmButton = styled.button`
  width: 100%;
  height: 100%;
  color: ${theme.color.sub.red};
  background-color: ${theme.color.BG};
  border-radius: 0px 0px 12px 0px;
  font-size: ${theme.font.button[1].size};
  font-weight: ${theme.font.button[1].fontweight};
`;

const CancelButton = styled.button`
  width: 100%;
  height: 100%;
  background-color: ${theme.color.BG};
  color: ${theme.color.white};
  border-radius: 0px 0px 0px 12px;
  font-size: ${theme.font.button[1].size};
  font-weight: ${theme.font.button[1].fontweight};
`;

const TextWrap = styled.div`
  align-items: center;
  display: flex;
  gap: 20px;
  flex-direction: column;
  width: 100%;
  padding: 48px 132px;
  border-radius: 12px;
`;

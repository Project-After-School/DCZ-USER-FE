import { DeleteIcon } from "@/assets/svg";
import Button from "@/components/common/Button";
import { theme } from "@/styles/theme";
import { useState } from "react";
import { styled } from "styled-components";

export const UploadTask = () => {
  const [file, setFile] = useState<File[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    if (files.length > 0) {
      setFile((prevFiles) => [...prevFiles, ...files]);
    }
  };

  const handleRemoveFile = (index: number) => {
    setFile((prevFiles) => prevFiles.filter((_, i) => i !== index));
  };

  return (
    <Task>
      <Top>
        <UploadTitleText>과제 업로드</UploadTitleText>
        <AddFileButton htmlFor="test">
          파일 추가
          <input type="file" hidden id="test" onChange={handleChange} />
        </AddFileButton>
      </Top>
      <Middle>
        {file.map((item, index) => (
          <FileList key={index}>
            {item.name}
            <DeleteButton
              src={DeleteIcon}
              onClick={() => handleRemoveFile(index)}
            />
          </FileList>
        ))}
      </Middle>
      <Button width="100%" disabled={file.length === 0} height="51px">
        과제 제출하기
      </Button>
    </Task>
  );
};

const Middle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const DeleteButton = styled.img`
  color: ${theme.color.white};
  border-radius: 50%;
  padding: 4px 8px;
  width: 40px;
  height: 40px;
  background-color: transparent;
`;

const Task = styled.div`
  display: flex;
  flex-direction: column;
  padding: 24px;
  border: 1px solid ${theme.color.gray[900]};
  border-radius: 16px;
  margin-top: 42px;
  justify-content: space-between;
  min-height: 220px;
  gap: 40px;
`;

const FileList = styled.div`
  background-color: ${theme.color.gray[900]};
  padding: 16px 20px;
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const UploadTitleText = styled.p`
  font-size: ${theme.font.heading[4].size};
  font-weight: ${theme.font.heading[4].fontweight};
`;

const AddFileButton = styled.label`
  border: 1px solid ${theme.color.main[500]};
  padding: 16px 20px;
  border-radius: 12px;
  color: ${theme.color.main[500]};
  font-size: ${theme.font.button[1].size};
  font-weight: ${theme.font.button[1].fontweight};
  &:hover {
    background-color: ${theme.color.main[500]};
    color: ${theme.color.white};
  }
  &:active {
    background-color: ${theme.color.main[900]};
  }
  user-select: none;
`;

const Top = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

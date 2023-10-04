import React from "react";
import styled from "styled-components";

// ChatGPT input message icon
import { BsArrowRight } from "react-icons/bs";
import DotSpinner from "./DotSpinner";

const InputContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  align-items: center;
  padding: 12px;
  background: var(--onyx);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(60, 60, 60, 0.1);
  backdrop-filter: blur(9.4px);
  -webkit-backdrop-filter: blur(9.4px);
  touch-action: manipulation; /* Add this line to prevent zooming */
`;

const TextAreaField = styled.textarea`
  flex: 1;
  border: none;
  background-color: transparent;
  font-size: 1rem;
  outline: none;
  margin-right: 10px;
  resize: none;
  font-family: inherit;
  color: var(--french-gray);

  &::placeholder {
    color: var(--platinum);
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.2;
  }

  &:focus {
    &::placeholder {
      color: transparent;
    }
    outline: none;
  }
`;

const SubmitIcon = styled(BsArrowRight)`
  font-size: 24px;
  color: var(--platinum);
  cursor: pointer;
`;

interface TextAreaProps {
  value: string;
  placeholder?: string;
  handleInputChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  loading?: boolean;
}

const TextArea: React.FC<TextAreaProps> = ({
  value,
  placeholder,
  handleInputChange,
  handleSubmit,
  loading,
}) => {
  return (
    <InputContainer typeof="submit">
      <TextAreaField
        placeholder={placeholder}
        value={value}
        onChange={handleInputChange}
        disabled={loading}
      />
      {!loading ? <SubmitIcon onClick={handleSubmit} /> : <DotSpinner />}
    </InputContainer>
  );
};

export default TextArea;

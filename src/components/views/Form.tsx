import React, { ChangeEvent, FormEvent, FunctionComponent } from "react";
import styled from "styled-components";
import TextArea from "../ui/TextArea";

const FormContainer = styled.form`
  position: fixed;
  bottom: 0;
  z-index: 1;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  padding: 0 1rem;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  background: linear-gradient(
    180deg,
    rgba(248, 249, 250, 0) 0%,
    rgba(248, 249, 250, 0.5) 100%
  );
`;

type FormSubmitHandler = (e: FormEvent<HTMLFormElement>) => void;
type InputChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => void;

interface FormProps {
  handleSubmit: FormSubmitHandler;
  input: string;
  handleInputChange: InputChangeHandler;
  loading: boolean;
}

const Form: FunctionComponent<FormProps> = ({
  handleSubmit,
  input,
  handleInputChange,
  loading,
}) => {
  return (
    <React.Fragment>
      <FormContainer
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit(e);
        }}
      >
        <TextArea
          placeholder="Type a message"
          value={input}
          handleInputChange={handleInputChange}
          loading={loading}
          handleSubmit={handleSubmit}
        />
      </FormContainer>
    </React.Fragment>
  );
};

export default Form;

import styled from "styled-components";
import { motion } from "framer-motion";
import { Message } from "ai/react";
import { AiFillRobot } from "react-icons/ai";
import { FaUserAlt } from "react-icons/fa";

import Form from "./Form";
import MessageComponent from "./Message";
import { useDataContext } from "@/context/data-context";

const Container = styled.div`
  width: 100%;
  padding-bottom: 80px;
  overflow-y: scroll;
  scrollbar-width: none;
  -ms-overflow-style: none;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const MessageContainer = styled.div<{ role: string }>`
  display: flex;
  justify-content: ${({ role }) =>
    role === "assistant" ? "flex-start" : "flex-end"};
  text-align: left;
  width: 100%;
  align-items: flex-start; /* Align items at the start */
  gap: 0.5rem;
`;

const Sender = styled.section`
  display: flex;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  color: var(--onyx);

  @media (max-width: 510px) {
    width: 23px;
    height: 23px;
  }

  svg {
    width: 100%;
    height: 100%;
  }
`;

const EmptyMessageContainer = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: fit-content;
  padding-top: 2rem;
  height: 100%;
  color: var(--french-darker-gray);
  text-transform: uppercase;
  font-weight: 800;
  font-size: 2rem;
`;

export default function ChatComponent() {
  const { messages, handleInputChange, handleSubmit, input, isLoading } =
    useDataContext();

  const formProps = {
    handleSubmit,
    input,
    handleInputChange,
    loading: isLoading,
  };

  return (
    <Container>
      {messages.length === 0 && (
        <EmptyMessageContainer
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <h3>Chat AI</h3>
        </EmptyMessageContainer>
      )}
      {messages.map((message: Message) => {
        return (
          <MessageContainer key={message.id} role={message.role}>
            {message.role === "assistant" && (
              <Sender>
                <AiFillRobot />
              </Sender>
            )}
            <MessageComponent message={message} />
            {message.role !== "assistant" && (
              <Sender>
                <FaUserAlt />
              </Sender>
            )}
          </MessageContainer>
        );
      })}
      <Form {...formProps} />
    </Container>
  );
}

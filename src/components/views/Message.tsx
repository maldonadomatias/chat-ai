import { Message } from "ai/react";
import React, { FunctionComponent } from "react";
import { motion } from "framer-motion";
import { CopyBlock, codepen } from "react-code-blocks";
import styled from "styled-components";

interface CopyBlockProps {
  text: string;
  language: string;
  theme: Record<string, string>;
  showLineNumbers: boolean;
  wrapLines: boolean;
}

const Content = styled(motion.div)`
  border-radius: 0.5rem;
  width: fit-content;
  min-height: fit-content;
  white-space: pre-wrap;
  text-overflow: ellipsis;
  overflow: hidden;
  background-color: var(--platinum);
  color: var(--onyx);
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.3rem;

  div {
    width: 100%;
    overflow-x: auto;
  }

  @media (max-width: 768px) {
    width: 90%;

    div {
      font-size: 0.8rem;
    }
  }
`;

interface Props {
  message: Message;
}

const MessageComponent: FunctionComponent<Props> = ({ message }) => {
  let language = "plaintext"; // Default language

  return (
    <Content
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {message.content
        .split(/```([a-zA-Z]+)\n([\s\S]+?)```/) // Use regex to match code blocks and extract language prefix
        .map((textPart: string, index: number) => {
          if (index % 3 === 0) {
            // Non-code block part
            return textPart
              .split("\n")
              .map((line, lineIndex) => (
                <p key={message.id + index + lineIndex}>{line}</p>
              ));
          } else if (index % 3 === 1) {
            // Extracted language prefix
            language = textPart; // This is the extracted language prefix, save it in our variable
            return null;
          } else {
            const copyBlockProps: CopyBlockProps = {
              text: textPart,
              language: language,
              theme: codepen,
              showLineNumbers: true,
              wrapLines: true,
            };
            return <CopyBlock key={message.id + index} {...copyBlockProps} />;
          }
        })}
    </Content>
  );
};

export default MessageComponent;

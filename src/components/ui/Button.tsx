import styled from "styled-components";
import { motion } from "framer-motion";
import { FunctionComponent } from "react";

const Container = styled(motion.button)`
  background-color: var(--onyx);
  border: none;
  font-family: inherit;
  font-weight: 600;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  transition: background-color 0.2s ease;
  cursor: pointer;

  &:hover {
    background-color: var(--outer-space);
  }
`;

interface Props {
  children: React.ReactNode;
}

const Button: FunctionComponent<Props> = ({ children }) => {
  return (
    <Container
      whileHover={{
        scale: 1.05,
        transition: { duration: 0.3 },
      }}
      whileTap={{ scale: 0.95 }}
    >
      {children}
    </Container>
  );
};

export default Button;

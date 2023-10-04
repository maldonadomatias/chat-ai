import { motion } from "framer-motion";
import styled from "styled-components";

import Button from "../ui/Button";
import Link from "next/link";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;
  color: var(--onyx);
`;

export const Title = styled.h1`
  font-size: 2rem;
  text-transform: uppercase;
  font-weight: 800;
`;

export const Description = styled.p`
  font-size: 1rem;
  margin-bottom: 2rem;
  font-weight: 300;
`;

const HomePage = () => {
  return (
    <Container
      as={motion.div}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Title>Welcome to Chatbot</Title>
      <Description>Get instant help from our smart AI chatbot.</Description>
      <Link href="/start">
        <Button>START</Button>
      </Link>
    </Container>
  );
};

export default HomePage;

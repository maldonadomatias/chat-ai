"use client";
import styled from "styled-components";

import HomePage from "@/components/views/HomePage";

const Container = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 0 6rem;
  min-height: 100dvh;

  @media (max-width: 768px) {
    padding: 4%;
  }
`;

export default function Home() {
  return (
    <Container>
      <HomePage />
    </Container>
  );
}

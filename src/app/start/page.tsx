"use client";
import styled from "styled-components";

import ChatComponent from "@/components/views/ChatComponent";

const Container = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 4.5rem 6rem 6rem 6rem;
  min-height: 100dvh;

  @media (max-width: 768px) {
    padding: 4rem 4%;
  }
`;

export default function Home() {
  return (
    <Container>
      <ChatComponent />
    </Container>
  );
}

"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import styled from "styled-components";
import Link from "next/link";

import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import { RiRefreshFill } from "react-icons/ri";
import { motion } from "framer-motion";

import { useDataContext } from "@/context/data-context";

const NavbarContainer = styled(motion.nav)`
  position: fixed;
  width: 100%;
  height: 45px;
  z-index: 100;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding: 0 20px;
  background-color: var(--seasalt);
`;

const IconContainer = styled(motion.button)`
  background-color: transparent;
  height: fit-content;
  width: fit-content;
  border: none;
  font-family: inherit;
  font-weight: 600;
  color: white;
  border-radius: 0.5rem;
  transition: background-color 0.2s ease;
  cursor: pointer;

  &:hover {
    svg {
      fill: var(--eerie-black);
      color: var(--eerie-black);
    }
  }
`;

const Navbar: React.FC = () => {
  const pathname = usePathname();

  const { messages, setMessages } = useDataContext();

  const [insideConversations, setInsideConversations] =
    useState<boolean>(false);

  useEffect(() => {
    if (pathname === "/start") {
      setInsideConversations(true);
    } else {
      setInsideConversations(false);
    }
  }, [pathname]);

  if (!insideConversations) return null;

  return (
    <NavbarContainer
      initial={{ opacity: 0, top: -100 }}
      animate={{ opacity: 1, top: 0 }}
      exit={{ opacity: 0, top: -100 }}
    >
      <Link href="/">
        <IconContainer
          whileHover={{
            scale: 1.05,
            transition: { duration: 0.3 },
          }}
          whileTap={{ scale: 0.95 }}
        >
          <BsFillArrowLeftCircleFill
            size="2rem"
            color="var(--onyx)"
            style={{
              cursor: "pointer",
            }}
          />
        </IconContainer>
      </Link>
      {messages.length > 0 && (
        <IconContainer
          whileHover={{
            scale: 1.05,
            transition: { duration: 0.3 },
          }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setMessages([])}
        >
          <RiRefreshFill
            size="2rem"
            color="var(--onyx)"
            style={{
              cursor: "pointer",
            }}
          />
        </IconContainer>
      )}
    </NavbarContainer>
  );
};

export default Navbar;

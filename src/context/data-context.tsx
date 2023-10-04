"use client";

import { Message } from "ai";
import { useChat } from "ai/react";
import { createContext, useContext, useState } from "react";

interface DataContextValue {
  input: string;
  handleInputChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  isLoading: boolean;
  messages: Message[];
  setMessages: (messages: Message[]) => void;
}

interface DataContextProviderProps {
  children: React.ReactNode;
}

const DataContext = createContext<DataContextValue>({
  input: "",
  handleInputChange: () => {},
  handleSubmit: () => {},
  isLoading: false,
  messages: [],
  setMessages: () => {},
});

export const DataContextProvider: React.FC<DataContextProviderProps> = ({
  children,
}: any) => {
  const {
    input,
    handleInputChange,
    handleSubmit,
    isLoading,
    messages,
    setMessages,
  } = useChat();

  const value = {
    input,
    handleInputChange,
    handleSubmit,
    isLoading,
    messages,
    setMessages,
  };

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};

export const useDataContext = (): DataContextValue => {
  const context = useContext(DataContext);

  if (!context) {
    throw new Error("useDataContext must be used within a DataContextProvider");
  }

  return context;
};

export const DataCtx = DataContext;

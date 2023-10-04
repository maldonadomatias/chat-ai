import styled, { keyframes } from "styled-components";

interface Props {
  color?: string;
}

const SpinnerContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 5px 0;
`;

const DotAnimation = keyframes`
  0%, 80%, 100% {
    opacity: 0;
    transform: scale(0);
  }
  40% {
    opacity: 1;
    transform: scale(1);
  }
`;

const Dot = styled.span<{ delay: number }>`
  display: inline-block;
  width: 8px;
  height: 8px;
  margin: 0 4px;
  border-radius: 50%;
  animation: ${DotAnimation} 1s infinite ease-in-out;
  animation-delay: ${(props: { delay: number }) => props.delay}ms;
`;

const DotSpinner = ({ color }: Props) => {
  return (
    <SpinnerContainer>
      <Dot
        style={{ backgroundColor: color ? color : "var(--french-gray)" }}
        delay={0}
      />
      <Dot
        style={{ backgroundColor: color ? color : "var(--french-gray)" }}
        delay={160}
      />
      <Dot
        style={{ backgroundColor: color ? color : "var(--french-gray)" }}
        delay={320}
      />
    </SpinnerContainer>
  );
};

export default DotSpinner;

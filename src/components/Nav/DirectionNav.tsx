import styled from "@emotion/styled";
import { useState } from "react";

interface SpanProps {
  isSelected: boolean;
}

export type Direction = "upper" | "lower";

const Wrapper = styled.div`
  display: flex;
  background-color: #f8f8f8;
  height: 2.6rem;
  justify-content: space-evenly;
  font-size: 0.9rem;
  position: fixed;
  top: 3.4rem;
  left: 0;
  right: 0;
  z-index: 99;
`;
const StyledSpan = styled.span<SpanProps>`
  display: flex;
  color: black;
  text-decoration: none;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  text-align: center;
  border: none;
  font-weight: 600;
  box-sizing: border-box;
  border-bottom: ${(props) =>
    props.isSelected ? "4px solid lightgreen" : "none"};
  :focus {
    background-color: #999;
  }
`;

interface DirectionProps {
  upperDirection: string;
  lowerDirection: string;
  setDirection: React.Dispatch<React.SetStateAction<Direction>>;
}
const DirectionNav = ({
  upperDirection,
  lowerDirection,
  setDirection,
}: DirectionProps) => {
  const [selected, setSelected] = useState<Direction>("upper");
  const clickUpper = () => {
    setSelected("upper");
    setDirection("upper");
  };
  const clickLower = () => {
    setSelected("lower");
    setDirection("lower");
  };
  return (
    <>
      <Wrapper>
        <StyledSpan onClick={clickUpper} isSelected={selected === "upper"}>
          {upperDirection}방향
        </StyledSpan>
        <StyledSpan onClick={clickLower} isSelected={selected === "lower"}>
          {lowerDirection}방향
        </StyledSpan>
      </Wrapper>
    </>
  );
};

export default DirectionNav;

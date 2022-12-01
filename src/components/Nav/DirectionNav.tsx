import styled from "@emotion/styled";
import { useState } from "react";

const Wrapper = styled.div`
  display: flex;
  background-color: #f8f8f8;
  height: 2.5rem;
  justify-content: space-evenly;
  font-size: 0.9rem;
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

interface SpanProps {
  isSelected: boolean;
}

interface DirectionProps {
  upperDirection: string;
  lowerDirection: string;
  setDirection: React.Dispatch<React.SetStateAction<Direction | undefined>>;
}
export type Direction = "upper" | "lower";
const DirectionNav = ({
  upperDirection,
  lowerDirection,
  setDirection,
}: DirectionProps) => {
  const [selected, setSelected] = useState<Direction>("upper");
  const click = () => {
    if (selected === "lower") {
      setSelected("upper");
      setDirection("upper");
    }
    if (selected === "upper") {
      setSelected("lower");
      setDirection("lower");
    }
  };
  return (
    <Wrapper>
      <StyledSpan onClick={click} isSelected={selected === "upper"}>
        {upperDirection}방향
      </StyledSpan>
      <StyledSpan onClick={click} isSelected={selected === "lower"}>
        {lowerDirection}방향
      </StyledSpan>
    </Wrapper>
  );
};

export default DirectionNav;

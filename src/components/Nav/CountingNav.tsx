import { useEffect, useState } from "react";
import styled from "@emotion/styled";

interface BusColorProps {
  color: string;
}

const UPDATE_TIME = 15;

const Wrapper = styled.div`
  display: flex;
  background-color: #f8f8f8;
  height: 2.5rem;
  justify-content: space-evenly;
  font-size: 0.9rem;
  position: fixed;
  top: 3.4rem;
  left: 0;
  right: 0;
  z-index: 99;
`;
const Counter = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
`;
const BusColor = styled.div<BusColorProps>`
  background-color: ${(props) => props.color};
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  flex-grow: 1;
`;
interface NavProps {
  setIsUpdate: React.Dispatch<React.SetStateAction<boolean>>;
}

const CountingNav = ({ setIsUpdate }: NavProps) => {
  const [time, setTime] = useState(UPDATE_TIME);

  useEffect(() => {
    const count = setInterval(() => {
      setTime((prev) => {
        if (prev > 1) {
          return prev - 1;
        } else {
          return UPDATE_TIME;
        }
      });
    }, 1000);
    return () => clearInterval(count);
  }, []);
  useEffect(() => {
    if (time === 1) {
      setIsUpdate((prev) => !prev);
    }
  }, [time]);

  return (
    <Wrapper>
      <Counter>{time}초 후 새로고침</Counter>
      <BusColor color="#44CCCC">일반</BusColor>
      <BusColor color="#FFC033">저상</BusColor>
      <BusColor color="#FF6766">막차</BusColor>
    </Wrapper>
  );
};

export default CountingNav;

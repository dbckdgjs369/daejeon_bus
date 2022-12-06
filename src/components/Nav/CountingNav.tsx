import { useEffect, useState } from "react";
import styled from "@emotion/styled";

interface BusColorProps {
  color: string;
}

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

const CountingNav = () => {
  const [time, setTime] = useState(15);

  useEffect(() => {
    const count = setInterval(() => {
      if (time >= 0) {
        setTime((prev) => {
          if (prev > 0) {
            return prev - 1;
          } else {
            return 15;
          }
        });
      }
    }, 1000);
    return () => clearInterval(count);
  }, []);
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

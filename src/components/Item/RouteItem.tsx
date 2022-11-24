import styled from "@emotion/styled";
import Arrow from "../../images/arrow-left-right.svg";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  border-bottom: 1px solid #eee;
  height: 3rem;
  padding: 0 1rem;
`;
const H1 = styled.h1`
  font-size: 1.1rem;
  font-weight: 600;
`;
const P = styled.p`
  font-size: 0.8rem;
  font-weight: 500;
`;

interface RouteItemProps {
  busTitle: string;
  busStart: string;
  busEnd: string;
}

const RouteItem = ({ busTitle, busStart, busEnd }: RouteItemProps) => {
  return (
    <Wrapper>
      <H1>{busTitle}</H1>
      <P>{busStart}</P>
      <img src={Arrow} />
      <P>{busEnd}</P>
    </Wrapper>
  );
};

export default RouteItem;

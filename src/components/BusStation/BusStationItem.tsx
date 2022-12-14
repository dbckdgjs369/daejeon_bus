import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import Bus from "/public/favicon-32x32.png";

const Station = styled(Link)`
  display: flex;
  color: black;
  text-decoration: none;
  border-bottom: 1px solid #bbb8b8;
  height: 2.5rem;
  align-items: center;
  justify-content: flex-start;
  padding-left: 6rem;
`;
const BusPosition = styled.div<BusPositionProps>`
  border-left: 1px solid #333;
  height: 2.5rem;
  position: absolute;
  left: 2rem;
`;
const BusImg = styled.img`
  height: 1.5rem;
  position: relative;
  left: -0.8rem;
  bottom: -0.4rem;
  display: table;
`;

interface BusPositionProps {
  isBusHere?: boolean;
}
interface BusStationProps extends BusPositionProps {
  content: string;
  busId: string;
}

const BusStationItem = ({ content, isBusHere, busId }: BusStationProps) => {
  return (
    <Station to={`/station/${busId}`} state={{ busName: content }}>
      <BusPosition>{isBusHere ? <BusImg src={Bus} /> : null}</BusPosition>
      {content}
    </Station>
  );
};

export default BusStationItem;

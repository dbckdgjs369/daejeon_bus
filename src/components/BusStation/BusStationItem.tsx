import styled from "@emotion/styled";

const Station = styled.div`
  display: flex;
  border-bottom: 1px solid #bbb8b8;
  height: 2.5rem;
  align-items: center;
  justify-content: flex-start;
  padding-left: 6rem;
`;
const BusPosition = styled.div`
  border-left: 1px solid #333;
  height: 2.5rem;
  position: absolute;
  left: 2rem;
`;

interface BusPositionProps {
  isBusHere?: boolean;
}
interface BusStationProps {
  content: string;
}

const BusStationItem = ({ content }: BusStationProps) => {
  return (
    <Station>
      <BusPosition />
      {content}
    </Station>
  );
};

export default BusStationItem;

import styled from "@emotion/styled";

interface BusArriveProps {
  busNumber: string;
  busRemainTime: string;
  busDirection: string;
  busRemainStation: string;
  busType: string;
}
interface BusTypeColor {
  color: string;
}

const Wrapper = styled.div`
  height: 2.5rem;
  display: flex;
  align-items: center;
  gap: 2rem;
  justify-content: space-between;
  padding: 0 1rem;
  border-bottom: 1px solid #eee;
  flex-grow: 1;
`;

const Span = styled.span`
  font-size: 1rem;
  font-weight: 600;
`;
const InfoWrapper = styled.div`
  font-size: 0.8rem;
  display: flex;
  margin-left: -5rem;
  flex-direction: column;
  justify-content: center;
  gap: 0.3rem;
  height: 2.5rem;
`;
const BusType = styled.div<BusTypeColor>`
  display: inline;
  border-left: 8px solid ${(props) => props.color};
  height: 2.5rem;
`;
const ItemWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

const BusArriveItem = ({
  busNumber,
  busRemainStation,
  busDirection,
  busRemainTime,
  busType,
}: BusArriveProps) => {
  const color = ["#44CCCC", "#FFC033", "#FF6766", "#44CCCC"];
  return (
    <ItemWrapper>
      <BusType color={color[Number.parseInt(busType.trim())]} />
      <Wrapper>
        <Span>{busNumber}</Span>
        <InfoWrapper>
          <div>{busDirection} 방향</div>
          <div>{busRemainStation} 정류장 전</div>
        </InfoWrapper>
        <Span>{Math.ceil(Number.parseInt(busRemainTime) / 60)}분</Span>
      </Wrapper>
    </ItemWrapper>
  );
};

export default BusArriveItem;

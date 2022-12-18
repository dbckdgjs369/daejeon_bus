import styled from "@emotion/styled";

interface BusArriveProps {
  busNumber: string;
  busRemainTime: string;
  busDirection: string;
  busRemainStation: string;
  busType: string;
  busMsg: string;
}
interface BusTypeColor {
  color: string;
}

const Wrapper = styled.div`
  height: 2.5rem;
  display: flex;
  align-items: center;
  gap: 2rem;
  padding: 0 1rem;
  border-bottom: 1px solid #eee;
  flex-grow: 1;
`;

const Span = styled.span`
  font-size: 1rem;
  font-weight: 600;
  width: 15%;
`;
const Time = styled.span`
  font-size: 1rem;
  font-weight: 600;
  position: absolute;
  margin-right: 1rem;
  right: 0;
`;
const Arrive = styled.span`
  font-size: 1rem;
  font-weight: 600;
  position: absolute;
  margin-right: 1rem;
  color: red;
  right: 0;
`;
const InfoWrapper = styled.div`
  font-size: 0.8rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.3rem;
  height: 2.5rem;
`;
const BusType = styled.div<BusTypeColor>`
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
  busMsg,
}: BusArriveProps) => {
  const color = ["#44CCCC", "#FFC033", "#FF6766", "#44CCCC"];
  const Msg = () => {
    switch (busMsg) {
      case "03":
        return <Time>{Math.ceil(Number.parseInt(busRemainTime) / 60)}분</Time>;
      case "06":
        return <Arrive>진입</Arrive>;
      case "07":
        return <Time>차고지 운행 대기중</Time>;
    }
  };

  return (
    <ItemWrapper>
      <BusType color={color[Number.parseInt(busType.trim())]} />
      <Wrapper>
        <Span>{busNumber}</Span>

        {busMsg === "03" ? (
          <>
            <InfoWrapper>
              <div>{busDirection} 방향</div>
              <div>{busRemainStation} 정류장 전</div>
            </InfoWrapper>
            <Time>{Math.ceil(Number.parseInt(busRemainTime) / 60)}분</Time>
          </>
        ) : busMsg === "06" ? (
          <Arrive>진입</Arrive>
        ) : (
          <>
            <InfoWrapper>
              <div>{busDirection} 방향</div>
              <div>
                {busRemainTime.slice(0, 2) + ":" + busRemainTime.slice(2)} 출발
                예정
              </div>
            </InfoWrapper>
            <Time>운행 대기</Time>
          </>
        )}
      </Wrapper>
    </ItemWrapper>
  );
};

export default BusArriveItem;

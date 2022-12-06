import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getBusRouteId } from "../utils/getBusRouteID";
import { getBusRoute } from "../apis/getBusRoute";
import BusStationItem from "../components/BusStation/BusStationItem";
import DirectionNav, { Direction } from "../components/Nav/DirectionNav";
import StationInfoHeader from "../components/Header/StationInfoHeader";
import { getRouteBusPosition } from "../apis/getArriveInfo";
import { BusInfo, BusPos } from "../types/bus";
import styled from "@emotion/styled";

const ContentWrapper = styled.div`
  padding-top: 6rem;
`;

const BusRoutePage = () => {
  const { busNumber } = useParams();
  const [busStationArr, setBusTationArr] = useState<BusInfo[]>([]);
  const [direction, setDirection] = useState<Direction>("upper");
  const [upperBusRoute, setUpperBusRoute] = useState<BusInfo[]>([]);
  const [lowerBusRoute, setLowerBusRoute] = useState<BusInfo[]>([]);
  const [busPosition, setBusPosition] = useState<BusPos[]>([]);
  const [busNodeIdArr, setBusNodeIdArr] = useState<string[]>([]);
  const [upperStation, setUpperStation] = useState("");
  const [lowerStation, setLowerStation] = useState("");

  useEffect(() => {
    (async function fetchData() {
      const id = getBusRouteId(busNumber);
      const busInfo = await getBusRoute(id);
      const currentPos: BusPos[] = await getRouteBusPosition(id).then(
        (res) => res.ServiceResult.msgBody.itemList
      );
      setBusNodeIdArr(currentPos.map((e: BusPos) => e.BUS_NODE_ID));
      setBusPosition(currentPos);
      setBusTationArr(busInfo.ServiceResult.msgBody.itemList);
    })();
  }, [busNumber]);
  useEffect(() => {
    if (busStationArr.length !== 0) {
      const index = busStationArr.findIndex((element) => {
        return element.BUSSTOP_TP === "2";
      });
      const upper = busStationArr.slice(0, index + 1);
      const lower = busStationArr.slice(index, busStationArr.length);
      setUpperBusRoute(upper);
      setLowerBusRoute(lower);
      setUpperStation(busStationArr[0].BUSSTOP_NM);
      setLowerStation(busStationArr[index].BUSSTOP_NM);
    }
  }, [busStationArr]);

  return (
    <div>
      <StationInfoHeader title={busNumber ? busNumber : ""} />
      <DirectionNav
        setDirection={setDirection}
        lowerDirection={upperStation}
        upperDirection={lowerStation}
      />
      <ContentWrapper>
        {direction === "upper"
          ? upperBusRoute?.map((e) => (
              <BusStationItem
                isBusHere={busNodeIdArr.includes(e.BUS_NODE_ID)}
                content={e.BUSSTOP_NM}
                key={e.BUSSTOP_SEQ}
                busId={e.BUS_STOP_ID}
              />
            ))
          : lowerBusRoute?.map((e) => (
              <BusStationItem
                content={e.BUSSTOP_NM}
                key={e.BUSSTOP_SEQ}
                isBusHere={busNodeIdArr.includes(e.BUS_NODE_ID)}
                busId={e.BUS_STOP_ID}
              />
            ))}
      </ContentWrapper>
    </div>
  );
};

export default BusRoutePage;

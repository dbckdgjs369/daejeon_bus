import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getBusRouteId } from "../utils/getBusRouteID";
import { getBusRoute } from "../apis/getBusRoute";
import BusStationItem from "../components/BusStation/BusStationItem";
import DirectionNav, { Direction } from "../components/Nav/DirectionNav";
import StationInfoHeader from "../components/Header/StationInfoHeader";

type BusInfo = {
  BUSSTOP_ENG_NM: string;
  BUSSTOP_NM: string;
  BUSSTOP_SEQ: string;
  BUSSTOP_TP: string;
  BUS_NODE_ID: string;
  BUS_STOP_ID: string;
  GPS_LATI: string;
  GPS_LONG: string;
  ROAD_NM: string;
  ROAD_NM_ADDR: string;
  ROUTE_CD: string;
  TOTAL_DIST: string;
};

const BusRoutePage = () => {
  const { busNumber } = useParams();
  const [busStationArr, setBusTationArr] = useState<BusInfo[]>([]);
  const [direction, setDirection] = useState<Direction>("upper");
  const [upperBusRoute, setUpperBusRoute] = useState<BusInfo[]>([]);
  const [lowerBusRoute, setLowerBusRoute] = useState<BusInfo[]>([]);
  const [upperStation, setUpperStation] = useState("");
  const [lowerStation, setLowerStation] = useState("");

  useEffect(() => {
    (async function fetchData() {
      console.log(busNumber);
      const id = getBusRouteId(busNumber);
      const busInfo = await getBusRoute(id);
      //   console.log("temp", busInfo.ServiceResult.msgBody.itemList);
      setBusTationArr(busInfo.ServiceResult.msgBody.itemList);
    })();
  }, [busNumber]);
  useEffect(() => {
    console.log("bus", busStationArr);
    if (busStationArr.length !== 0) {
      const index = busStationArr.findIndex((element, index, array) => {
        return element.BUSSTOP_TP === "2";
      });
      console.log(index);
      const upper = busStationArr.slice(0, index + 1);
      const lower = busStationArr.slice(index, busStationArr.length);
      setUpperBusRoute(upper);
      setLowerBusRoute(lower);
      setUpperStation(busStationArr[0].BUSSTOP_NM);
      setLowerStation(busStationArr[index].BUSSTOP_NM);
    }
  }, [busStationArr]);

  useEffect(() => {
    console.log("direction", direction);
  }, [direction]);
  return (
    <div>
      <StationInfoHeader title={busNumber ? busNumber : ""} />
      <DirectionNav
        setDirection={setDirection}
        lowerDirection={upperStation}
        upperDirection={lowerStation}
      />
      {direction === "upper"
        ? upperBusRoute?.map((e) => (
            <BusStationItem content={e.BUSSTOP_NM} key={e.BUSSTOP_SEQ} />
          ))
        : lowerBusRoute?.map((e) => (
            <BusStationItem content={e.BUSSTOP_NM} key={e.BUSSTOP_SEQ} />
          ))}
    </div>
  );
};

export default BusRoutePage;

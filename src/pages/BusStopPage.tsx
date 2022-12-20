import { useLocation, useParams } from "react-router-dom";
import StationInfoHeader from "../components/Header/StationInfoHeader";
import PageTemplate from "../components/Template/PageTemplate";
import { getBusStopInfo } from "../apis/getBusStopArriveInfo";
import { useEffect, useState } from "react";
import BusArriveItem from "../components/Item/BusArriveItem";
import CountingNav from "../components/Nav/CountingNav";

type BusArriveInfo = {
  BUS_NODE_ID: "8001877";
  BUS_STOP_ID: "41730";
  CAR_REG_NO: "대전75자3201";
  DESTINATION: "동춘당";
  EXTIME_MIN: "1";
  EXTIME_SEC: "1605";
  INFO_OFFER_TM: "2022-12-06 15:53:12.0";
  LAST_CAT: "0";
  LAST_STOP_ID: "41650";
  MSG_TP: "07";
  ROUTE_CD: "30300038";
  ROUTE_NO: "103";
  ROUTE_TP: "2  ";
  STATUS_POS: "3";
  STOP_NAME: "삼성화재연수원";
};

const BusStopPage = () => {
  const [arriveInfo, setArriveInfo] = useState<BusArriveInfo[]>([]);
  const [isUpdate, setIsUpdate] = useState(false);
  const { busStopId } = useParams();
  const location = useLocation();
  const busStopTitle = location.state.busName;
  useEffect(() => {
    (async function fetchData() {
      const result = await getBusStopInfo(busStopId).then(
        (res) => res.ServiceResult.msgBody.itemList
      );
      console.log(arriveInfo);
      setArriveInfo(
        result.sort(
          (a: BusArriveInfo, b: BusArriveInfo) =>
            Number.parseInt(a.ROUTE_NO) - Number.parseInt(b.ROUTE_NO)
        )
      );
    })();
  }, [busStopId, isUpdate]);
  return (
    <PageTemplate>
      <StationInfoHeader title={busStopTitle} busId="1" />
      <PageTemplate.Main>
        <CountingNav setIsUpdate={setIsUpdate} />
        {arriveInfo.map((e) => (
          <BusArriveItem
            busDirection={e.DESTINATION}
            busNumber={e.ROUTE_NO}
            busRemainStation={e.STATUS_POS}
            busRemainTime={e.EXTIME_SEC}
            busType={e.LAST_CAT}
            busMsg={e.MSG_TP}
            key={e.ROUTE_NO}
          />
        ))}
      </PageTemplate.Main>
    </PageTemplate>
  );
};

export default BusStopPage;

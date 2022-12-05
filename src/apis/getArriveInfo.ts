import { xmlToJson } from "../utils/xmltoJson";

const getStationArriveInfo = async (busStopId: string | undefined) => {
  if (busStopId === undefined) {
    return;
  }
  const res = await fetch(
    `/api/rest/arrive/getArrInfoByStopID?busStopID=${busStopId}&serviceKey=${process.env.REACT_APP_Service_Key}`
  );
  const xmlString = await res.text();
  const xmlNode = new DOMParser().parseFromString(xmlString, "text/xml");

  return xmlToJson(xmlNode);
};

const getRouteBusPosition = async (routeId: string | undefined) => {
  if (routeId === undefined) {
    return;
  }
  const res = await fetch(
    `/api/rest/busposinfo/getBusPosByRtid?busRouteId=${routeId}&serviceKey=${process.env.REACT_APP_Service_Key}`
  );
  const xmlString = await res.text();
  const xmlNode = new DOMParser().parseFromString(xmlString, "text/xml");

  return xmlToJson(xmlNode);
};

export { getStationArriveInfo, getRouteBusPosition };

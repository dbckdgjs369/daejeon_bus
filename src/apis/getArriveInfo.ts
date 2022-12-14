import { xmlToJson } from "../utils/xmltoJson";

const getStationArriveInfo = async (busStopId: string | undefined) => {
  if (busStopId === undefined) {
    return;
  }
  const res = await fetch(
    `${process.env.API_URL}/api/rest/arrive/getArrInfoByStopID?busStopID=${busStopId}&serviceKey=${process.env.REACT_APP_SERVICE_KEY}`
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
    `${process.env.API_URL}/api/rest/busposinfo/getBusPosByRtid?busRouteId=${routeId}&serviceKey=${process.env.REACT_APP_SERVICE_KEY}`
  );
  const xmlString = await res.text();
  const xmlNode = new DOMParser().parseFromString(xmlString, "text/xml");

  return xmlToJson(xmlNode);
};

export { getStationArriveInfo, getRouteBusPosition };

import { xmlToJson } from "../utils/xmltoJson";

const getBusStopInfo = async (busStopId: string | undefined) => {
  if (busStopId === undefined) {
    return;
  }
  const res = await fetch(
    `${process.env.API_URL}/api/rest/arrive/getArrInfoByUid?arsId=${busStopId}&serviceKey=${process.env.REACT_APP_SERVICE_KEY}`
  );
  const xmlString = await res.text();
  const xmlNode = new DOMParser().parseFromString(xmlString, "text/xml");

  return xmlToJson(xmlNode);
};

export { getBusStopInfo };

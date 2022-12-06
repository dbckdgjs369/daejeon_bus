import { xmlToJson } from "../utils/xmltoJson";

const getBusStopInfo = async (busStopId: string | undefined) => {
  if (busStopId === undefined) {
    return;
  }
  const res = await fetch(
    `/api/rest/arrive/getArrInfoByUid?arsId=${busStopId}&serviceKey=${process.env.REACT_APP_Service_Key}`
  );
  const xmlString = await res.text();
  const xmlNode = new DOMParser().parseFromString(xmlString, "text/xml");

  return xmlToJson(xmlNode);
};

export { getBusStopInfo };

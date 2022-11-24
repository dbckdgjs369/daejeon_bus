import { xmlToJson } from "../utils/xmltoJson";

const getBusRoute = async (busId: string | undefined) => {
  if (busId === undefined) {
    return;
  }
  const res = await fetch(
    `/api/rest/busRouteInfo/getStaionByRoute?busRouteId=${busId}&serviceKey=${process.env.REACT_APP_Service_Key}`
  );
  const xmlString = await res.text();
  const xmlNode = new DOMParser().parseFromString(xmlString, "text/xml");

  return xmlToJson(xmlNode);
};

export { getBusRoute };

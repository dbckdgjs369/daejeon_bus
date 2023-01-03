import { xmlToJson } from "../utils/xmltoJson";

const getBusRoute = async (busId: string | undefined) => {
  if (busId === undefined) {
    return;
  }
  const res = await fetch(
    `${process.env.API_URL}/api/rest/busRouteInfo/getStaionByRoute?busRouteId=${busId}&serviceKey=${process.env.REACT_APP_SERVICE_KEY}`
  );
  const xmlString = await res.text();
  const xmlNode = new DOMParser().parseFromString(xmlString, "text/xml");

  return xmlToJson(xmlNode);
};

export { getBusRoute };

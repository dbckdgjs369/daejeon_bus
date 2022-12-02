import data from "../../output_file.js";

const getBusRouteId = (busNumber: string | undefined) => {
  if (busNumber === undefined) {
    return;
  }
  const busInfo = data.ServiceResult.msgBody.itemList.filter(
    (e) => e.ROUTE_NO === busNumber
  );
  return busInfo[0].ROUTE_CD;
};

export { getBusRouteId };

import axios from "axios";

// axios.defaults.baseURL = "http://openapitraffic.daejeon.go.kr";

const getBusRoute = async (busId: string | undefined) => {
  if (busId === undefined) {
    return;
  }
  const res = axios(
    `/api/rest/busRouteInfo/getStaionByRoute?busRouteId=${busId}&serviceKey=${process.env.REACT_APP_Service_Key}`,
    {
      method: "GET",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
      withCredentials: true,
    }
  ).then((response) => {
    console.log(response);
  });
  //   const response = await axios
  //     .get(
  //       `${BASE_URL}/api/rest/busRouteInfo/getStaionByRoute?busRouteId=${busId}&serviceKey=${process.env.REACT_APP_Service_Key}`,
  //       {
  //         withCredentials: true,
  //       }
  //       // {
  //       //   headers: {
  //       //     "Access-Control-Allow-Origin:": "http://localhost:3000/",
  //       //     "Content-Type": "application/json",
  //       //   },
  //       // }
  //     )
  //     .then((res) => console.log(res));
  //   return response;
  //   console.log(await response.json());
};

export { getBusRoute };

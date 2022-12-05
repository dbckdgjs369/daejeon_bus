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

type BusPos = {
  ARR_TIME: string;
  BUS_NODE_ID: string;
  BUS_STOP_ID: string;
  DIR: string;
  EVT_CD: string;
  GPS_LATI: string;
  GPS_LONG: string;
  PLATE_NO: string;
  ROUTE_CD: string;
  STRE_DT: string;
  TOTAL_DIST: string;
  ud_type: string;
};

export type { BusInfo, BusPos };

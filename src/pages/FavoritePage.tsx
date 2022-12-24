import Nav, { SelectedProps } from "../components/Nav/Nav";
import FavoriteItem from "../components/Item/FavoriteItem";
import Header from "../components/Header/MainHeader";
import PageTemplate from "../components/Template/PageTemplate";
import { useEffect, useState } from "react";
import BusStationItem from "../components/BusStation/BusStationItem";

const FavoritePage = () => {
  const [favoriteRouteList, setFavoriteRouteList] = useState<string[]>();
  const [idArr, setIdArr] = useState<string[]>([]);
  const [favoriteStationList, setFavoriteStationList] = useState<string[]>();
  useEffect(() => {
    const route = localStorage.getItem("favorite_route");
    const station = localStorage.getItem("favorite_station");
    if (route) {
      setFavoriteRouteList(Object.keys(JSON.parse(route)));
    }
    if (station) {
      setFavoriteStationList(Object.keys(JSON.parse(station)));
      setIdArr(Object.values(JSON.parse(station)));
    }
    // if (route) {
    //   let temp = Object.values(route);
    //   console.log(temp);
    // }

    // const station = localStorage.getItem("favorite_station");
    // if (route) {
    //   setFavoriteRouteList(Object.values(route));
    // }
    // if (station) {
    //   setFavoriteStationList(Object.keys(station));
    // }
  }, []);
  return (
    <PageTemplate>
      <Header />
      <Nav />
      <PageTemplate.Main>
        <FavoriteItem content="정류장" isTitle />
        {favoriteStationList?.map((e, index) => (
          <FavoriteItem
            content={e}
            isTitle={false}
            itemType="station"
            busId={idArr[index]}
            key={e}
          />
          // <BusStationItem
          //   isBusHere={false}
          //   content={e}
          //   key={e}
          //   busId={idArr[index]}
          // />
        ))}
        {/* <FavoriteItem content="둥지아파트" isTitle={false} itemType="station" />
        <FavoriteItem content="둥지아파트" isTitle={false} itemType="station" /> */}
        <FavoriteItem content="노선" isTitle />
        {favoriteRouteList?.map((e) => (
          <FavoriteItem
            content={e}
            isTitle={false}
            itemType="busNumber"
            key={e}
          />
        ))}
      </PageTemplate.Main>
    </PageTemplate>
  );
};

export default FavoritePage;

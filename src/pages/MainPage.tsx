import Nav from "../components/Nav/Nav";
import MainHeader from "../components/Header/MainHeader";
import { SelectedProps } from "../components/Nav/Nav";
import { useState } from "react";
import FavoritePage from "./FavoritePage";
import RoutePage from "./RoutePage";
import StationPage from "./StationPage";
import SubwayPage from "./SubwayPage";

const MainPage = () => {
  const [selectedPage, setSelectedPage] = useState<SelectedProps>("favorite");
  return (
    <div>
      <MainHeader />
      <Nav setSelectedPage={setSelectedPage} />
      {selectedPage === "favorite" ? <FavoritePage /> : null}
      {selectedPage === "route" ? <RoutePage /> : null}
      {selectedPage === "station" ? <StationPage /> : null}
      {selectedPage === "subway" ? <SubwayPage /> : null}
    </div>
  );
};

export default MainPage;

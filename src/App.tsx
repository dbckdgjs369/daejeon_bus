import { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import RoutePage from "./pages/RoutePage";
import StationPage from "./pages/StationPage";
import SubwayPage from "./pages/SubwayPage";
import MainHeader from "./components/Header/MainHeader";
import Nav from "./components/Nav/Nav";
import { SelectedProps } from "./components/Nav/Nav";
import FavoritePage from "./pages/FavoritePage";

const App = () => {
  const [selectedPage, setSelectedPage] = useState<SelectedProps>("favorite");
  return (
    <>
      <MainHeader />
      <BrowserRouter>
        <Nav setSelectedPage={setSelectedPage} />
        <Routes>
          <Route path="/" element={<Navigate to={"/favorite"} />} />
          <Route path="/favorite" element={<FavoritePage />} />
          <Route path="/route:routeNumber" element={<RoutePage />} />
          <Route path="/station" element={<StationPage />} />
          <Route path="/subway" element={<SubwayPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;

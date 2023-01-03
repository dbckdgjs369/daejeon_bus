import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import RoutePage from "./pages/RoutePage";
import StationSearchPage from "./pages/StationSearchPage";
import SubwayPage from "./pages/SubwayPage";
import FavoritePage from "./pages/FavoritePage";
import BusRoutePage from "./pages/BusRoutePage";
import BusStopPage from "./pages/BusStopPage";

const App = () => {
  console.log(process.env.NODE_ENV);
  console.log(process.env.API_URL);
  return (
    <>
      <BrowserRouter>
        <>
          <Routes>
            <Route path="/" element={<Navigate to={"/favorite"} />} />
            <Route path="/favorite" element={<FavoritePage />} />
            <Route path="/allroute" element={<RoutePage />} />
            <Route path="/route/:busNumber" element={<BusRoutePage />} />
            <Route path="/station" element={<StationSearchPage />} />
            <Route path="/station/:busStopId" element={<BusStopPage />} />
            <Route path="/subway" element={<SubwayPage />} />
          </Routes>
        </>
      </BrowserRouter>
    </>
  );
};

export default App;

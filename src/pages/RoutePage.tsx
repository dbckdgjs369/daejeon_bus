import Nav from "../components/Nav/Nav";
import RouteItem from "../components/Item/RouteItem";
import Header from "../components/Header/MainHeader";

const RoutePage = () => {
  return (
    <div>
      <Header />
      <Nav />
      <RouteItem
        busTitle="108"
        busEnd="충대 농대 종점"
        busStart="사학연금회관"
      />
    </div>
  );
};

export default RoutePage;

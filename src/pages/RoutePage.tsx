import Nav from "../components/Nav/Nav";
import RouteItem from "../components/Item/RouteItem";
import Header from "../components/Header/MainHeader";
import PageTemplate from "../components/Template/PageTemplate";

const RoutePage = () => {
  return (
    <PageTemplate>
      <Header />
      <Nav />
      <PageTemplate.Main>
        <RouteItem
          busTitle="108"
          busEnd="충대 농대 종점"
          busStart="사학연금회관"
        />
      </PageTemplate.Main>
    </PageTemplate>
  );
};

export default RoutePage;

import PageTemplate from "../components/Template/PageTemplate";
import Header from "../components/Header/MainHeader";
import Nav from "../components/Nav/Nav";

const StationSearchPage = () => {
  return (
    <PageTemplate>
      <Header />
      <Nav />
      <PageTemplate.Main>StationPage</PageTemplate.Main>
    </PageTemplate>
  );
};

export default StationSearchPage;

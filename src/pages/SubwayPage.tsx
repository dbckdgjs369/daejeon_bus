import PageTemplate from "../components/Template/PageTemplate";
import Header from "../components/Header/MainHeader";
import Nav from "../components/Nav/Nav";

const SubwayPage = () => {
  return (
    <PageTemplate>
      <Header />
      <Nav />
      <PageTemplate.Main>SubwayPage</PageTemplate.Main>
    </PageTemplate>
  );
};

export default SubwayPage;

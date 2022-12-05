import Nav, { SelectedProps } from "../components/Nav/Nav";
import FavoriteItem from "../components/Item/FavoriteItem";
import Header from "../components/Header/MainHeader";
import PageTemplate from "../components/Template/PageTemplate";

const FavoritePage = () => {
  return (
    <PageTemplate>
      <Header />
      <Nav />
      <PageTemplate.Main>
        <FavoriteItem content="정류장" isTitle />
        <FavoriteItem content="둥지아파트" isTitle={false} />
        <FavoriteItem content="둥지아파트" isTitle={false} />
        <FavoriteItem content="노선" isTitle />
        <FavoriteItem content="102" isTitle={false} />
        <FavoriteItem content="108" isTitle={false} />
      </PageTemplate.Main>
    </PageTemplate>
  );
};

export default FavoritePage;

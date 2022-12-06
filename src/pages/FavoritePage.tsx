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
        <FavoriteItem content="둥지아파트" isTitle={false} itemType="station" />
        <FavoriteItem content="둥지아파트" isTitle={false} itemType="station" />
        <FavoriteItem content="노선" isTitle />
        <FavoriteItem content="102" isTitle={false} itemType="busNumber" />
        <FavoriteItem content="108" isTitle={false} itemType="busNumber" />
      </PageTemplate.Main>
    </PageTemplate>
  );
};

export default FavoritePage;

import Nav, { SelectedProps } from "../components/Nav/Nav";
import FavoriteItem from "../components/Item/FavoriteItem";
import { useState } from "react";
import Header from "../components/Header/MainHeader";

const FavoritePage = () => {
  const [selectedPage, setSelectedPage] = useState<SelectedProps>("favorite");
  return (
    <div>
      <Header />
      <Nav />
      <FavoriteItem content="정류장" isTitle />
      <FavoriteItem content="둥지아파트" isTitle={false} />
      <FavoriteItem content="둥지아파트" isTitle={false} />
      <FavoriteItem content="노선" isTitle />
      <FavoriteItem content="102" isTitle={false} />
      <FavoriteItem content="108" isTitle={false} />
    </div>
  );
};

export default FavoritePage;

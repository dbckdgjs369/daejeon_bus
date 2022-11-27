import FavoriteItem from "../components/Item/FavoriteItem";

const FavoritePage = () => {
  return (
    <div>
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

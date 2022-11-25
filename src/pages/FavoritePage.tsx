import FavoriteItem from "../components/Item/FavoriteItem";
import { getBusRouteId } from "../utils/getBusRouteID";
import { getBusRoute } from "../apis/getBusRoute";

const FavoritePage = () => {
  const clickItem = async (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    console.log(getBusRouteId(e.currentTarget.textContent));
    const id = getBusRouteId(e.currentTarget.textContent);
    const temp = await getBusRoute(id);
    console.log(temp);
  };
  return (
    <div>
      <FavoriteItem content="정류장" isTitle />
      <FavoriteItem content="둥지아파트" isTitle={false} />
      <FavoriteItem content="둥지아파트" isTitle={false} />
      <FavoriteItem content="노선" isTitle />
      <FavoriteItem
        content="102"
        isTitle={false}
        onClick={(e) => clickItem(e)}
      />
    </div>
  );
};

export default FavoritePage;

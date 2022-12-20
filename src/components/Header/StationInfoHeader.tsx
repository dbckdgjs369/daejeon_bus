import styled from "@emotion/styled";
import LeftArrow from "../../images/arrow-left.svg";
import Star from "../../images/star.svg";
import Refresh from "../../images/refresh-cw.svg";
import More from "../../images/more-vertical.svg";

const Wrapper = styled.div`
  color: white;
  background-color: #333;
  height: 2rem;
  display: flex;
  padding: 0.7rem 1rem;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  position: fixed;
  left: 0;
  right: 0;
  z-index: 99;
`;
const OptionWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
`;

const Button = styled.button`
  width: 2rem;
  height: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #333;
  border: none;
  color: white;
  border-radius: 100%;
  :focus {
    background-color: #555;
  }
  :hover {
    background-color: #555;
  }
`;
const H1 = styled.h1`
  font-size: 1.2rem;
  font-weight: 900;
  margin-left: -5rem;
`;
const BackButton = styled(Button)`
  margin-right: 2.5rem;
`;
interface StationInfoHeaderProps {
  title: string;
  busId: string;
}

const StationInfoHeader = ({ title, busId }: StationInfoHeaderProps) => {
  const setFavorite = () => {
    if (Number.isNaN(Number.parseInt(title))) {
      //역 이름일 때
      const favorite = JSON.parse(
        localStorage.getItem("favorite_station") || "[]"
      );
      localStorage.setItem(
        "favorite_station",
        JSON.stringify([...favorite, title])
      );
    } else {
      // 버스 번호일 때
      const favorite = JSON.parse(
        localStorage.getItem("favorite_route") || "[]"
      );
      localStorage.setItem(
        "favorite_route",
        JSON.stringify([...favorite, { busId, title }])
      );
    }
  };
  return (
    <Wrapper>
      <BackButton onClick={() => history.back()}>
        <img src={LeftArrow} alt="뒤로가기 버튼" />
      </BackButton>
      <H1>{title}</H1>
      <OptionWrapper>
        <Button onClick={() => setFavorite()}>
          <img src={Star} alt="즐겨찾기 아이콘" />
        </Button>
        <Button>
          <img src={Refresh} alt="새로고침 아이콘" />
        </Button>
        <Button>
          <img src={More} alt="더 보기 아이콘" />
        </Button>
      </OptionWrapper>
    </Wrapper>
  );
};

export default StationInfoHeader;

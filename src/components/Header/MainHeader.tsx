import styled from "@emotion/styled";
import Search from "../../images/search.svg";
import Setting from "../../images/settings.svg";
import MapIcon from "../../images/map-pin.svg";

const Wrapper = styled.div`
  color: white;
  background-color: #333;
  height: 5vh;
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

const Header = () => {
  return (
    <Wrapper>
      <h1>대전버스</h1>
      <OptionWrapper>
        <Button>
          <img src={MapIcon} alt="지도 아이콘" />
        </Button>
        <Button>
          <img src={Search} alt="검색 아이콘" />
        </Button>
        <Button>
          <img src={Setting} alt="설정 아이콘" />
        </Button>
      </OptionWrapper>
    </Wrapper>
  );
};

export default Header;

import styled from "@emotion/styled";
import Search from "../images/search.svg";
import Setting from "../images/settings.svg";
import MapIcon from "../images/map-pin.svg";

const Wrapper = styled.div`
  color: white;
  background-color: #333;
  height: 5vh;
  display: flex;
  padding: 10px;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
`;
const OptionWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
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
`;

const Header = () => {
  return (
    <Wrapper>
      <h1>대전버스</h1>
      <OptionWrapper>
        <Button>
          <img src={MapIcon} />
        </Button>
        <Button>
          <img src={Search} />
        </Button>
        <Button>
          <img src={Setting} />
        </Button>
      </OptionWrapper>
    </Wrapper>
  );
};

export default Header;

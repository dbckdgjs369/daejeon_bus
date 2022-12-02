import styled from "@emotion/styled";
import LeftArrow from "../../images/arrow-left.svg";
import Star from "../../images/star.svg";
import Refresh from "../../images/refresh-cw.svg";
import More from "../../images/more-vertical.svg";

const Wrapper = styled.div`
  color: white;
  background-color: #333;
  height: 5vh;
  display: flex;
  padding: 0.7rem 1rem;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
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

interface StationInfoHeaderProps {
  title: string;
}

const StationInfoHeader = ({ title }: StationInfoHeaderProps) => {
  return (
    <Wrapper>
      <Button>
        <img src={LeftArrow} />
      </Button>
      <H1>{title}</H1>
      <OptionWrapper>
        <Button>
          <img src={Star} />
        </Button>
        <Button>
          <img src={Refresh} />
        </Button>
        <Button>
          <img src={More} />
        </Button>
      </OptionWrapper>
    </Wrapper>
  );
};

export default StationInfoHeader;

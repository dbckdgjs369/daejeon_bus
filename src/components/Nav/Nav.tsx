import styled from "@emotion/styled";
import { useState } from "react";
import { Link } from "react-router-dom";

const NavWrapper = styled.div`
  display: flex;
  background-color: #f8f8f8;
  height: 2.5rem;
  justify-content: space-evenly;
  font-size: 0.9rem;
`;
const Content = styled.button<ContentProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  text-align: center;
  border: none;
  font-weight: 600;
  border-bottom: ${(props) =>
    props.isSelected ? "4px solid lightgreen" : "none"};
  :focus {
    background-color: #999;
  }
`;

const StyledLink = styled(Link)`
  color: black;
  text-decoration: none;
`;
interface ContentProps {
  isSelected: boolean;
}
interface NavProps {
  setSelectedPage: React.Dispatch<React.SetStateAction<SelectedProps>>;
}
export type SelectedProps = "favorite" | "route" | "station" | "subway";

const Nav = ({ setSelectedPage }: NavProps) => {
  const [selected, setSelected] = useState<SelectedProps>("favorite");
  const clicked = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    setSelected(e.currentTarget.value as SelectedProps);
    setSelectedPage(e.currentTarget.value as SelectedProps);
  };

  return (
    <NavWrapper>
      <Content
        isSelected={selected === "favorite"}
        value="favorite"
        onClick={(e) => clicked(e)}
      >
        <StyledLink to={"/"}>즐겨찾기</StyledLink>
      </Content>
      <Content
        isSelected={selected === "route"}
        value="route"
        onClick={(e) => clicked(e)}
      >
        <StyledLink to={"/route"}>노선</StyledLink>
      </Content>
      <Content
        isSelected={selected === "station"}
        value="station"
        onClick={(e) => clicked(e)}
      >
        <StyledLink to={"/station"}>정류장</StyledLink>
      </Content>
      <Content
        isSelected={selected === "subway"}
        value="subway"
        onClick={(e) => clicked(e)}
      >
        <StyledLink to={"/subway"}>지하철</StyledLink>
      </Content>
    </NavWrapper>
  );
};

export default Nav;

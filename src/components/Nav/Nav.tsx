import styled from "@emotion/styled";
import { useState } from "react";

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
interface ContentProps {
  isSelected: boolean;
}
type SelectedProps = "favorite" | "route" | "station" | "subway";
const Nav = () => {
  const [selected, setSelected] = useState<SelectedProps>("favorite");
  const clicked = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    setSelected(e.currentTarget.value as SelectedProps);
    console.log(e.currentTarget.value);
  };
  return (
    <NavWrapper>
      <Content
        isSelected={selected === "favorite"}
        value="favorite"
        onClick={(e) => clicked(e)}
      >
        즐겨찾기
      </Content>
      <Content
        isSelected={selected === "route"}
        value="route"
        onClick={(e) => clicked(e)}
      >
        노선
      </Content>
      <Content
        isSelected={selected === "station"}
        value="station"
        onClick={(e) => clicked(e)}
      >
        정류장
      </Content>
      <Content
        isSelected={selected === "subway"}
        value="subway"
        onClick={(e) => clicked(e)}
      >
        지하철
      </Content>
    </NavWrapper>
  );
};

export default Nav;

import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

interface ContentProps {
  isselected: string;
}

export type SelectedProps = "favorite" | "allroute" | "station" | "subway";

const NavWrapper = styled.div`
  display: flex;
  background-color: #f8f8f8;
  height: 2.5rem;
  justify-content: space-evenly;
  font-size: 0.9rem;
`;
const Content = styled(Link)<ContentProps>`
  display: flex;
  color: black;
  text-decoration: none;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  text-align: center;
  border: none;
  font-weight: 600;
  border-bottom: ${(props) =>
    props.isselected === "true" ? "4px solid lightgreen" : "none"};
  :focus {
    background-color: #999;
  }
`;

const Nav = () => {
  const [selected, setSelected] = useState<SelectedProps>();
  const currentLocation = useLocation();

  useEffect(() => {
    setSelected(currentLocation.pathname?.split("/")[1] as SelectedProps);
  }, []);

  return (
    <>
      <NavWrapper>
        <Content
          to={"/"}
          isselected={selected === "favorite" ? "true" : "false"}
        >
          즐겨찾기
        </Content>
        <Content
          to={"/allroute"}
          isselected={selected === "allroute" ? "true" : "false"}
        >
          노선
        </Content>
        <Content
          to={"/station"}
          isselected={selected === "station" ? "true" : "false"}
        >
          정류장
        </Content>
        <Content
          to={"/subway"}
          isselected={selected === "subway" ? "true" : "false"}
        >
          지하철
        </Content>
      </NavWrapper>
    </>
  );
};

export default Nav;

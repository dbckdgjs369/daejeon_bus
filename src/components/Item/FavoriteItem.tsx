import styled from "@emotion/styled";
import { Link } from "react-router-dom";

const Wrapper = styled(Link)<WrapperProps>`
  display: flex;
  justify-content: flex-start;
  color: black;
  text-decoration: none;
  align-items: center;
  border-bottom: 1px solid #eee;
  height: 2.5rem;
  padding: ${(props) => (props.isTitle ? "0 0.5rem" : "0 calc(0.5rem + 8px)")};
  font-weight: ${(props) => (props.isTitle ? "800" : "500")};
  border-left: ${(props) => (props.isTitle ? "8px solid lightgreen" : "none")};
`;
const Title = styled.div<WrapperProps>`
  display: flex;
  justify-content: flex-start;
  color: black;
  text-decoration: none;
  align-items: center;
  border-bottom: 1px solid #eee;
  height: 2.5rem;
  padding: ${(props) => (props.isTitle ? "0 0.5rem" : "0 calc(0.5rem + 8px)")};
  font-weight: ${(props) => (props.isTitle ? "800" : "500")};
  border-left: ${(props) => (props.isTitle ? "8px solid lightgreen" : "none")};
`;

interface WrapperProps {
  isTitle: boolean;
}
interface ItemProps extends WrapperProps, React.HTMLAttributes<HTMLElement> {
  content: string;
  itemType?: "station" | "busNumber";
}

const Item = ({ content, isTitle, itemType, ...rest }: ItemProps) => {
  return (
    <>
      {isTitle ? (
        <Title isTitle={isTitle}>{content}</Title>
      ) : (
        <>
          {itemType === "busNumber" ? (
            <Wrapper to={`/route/${content}`} isTitle={isTitle} {...rest}>
              {content}
            </Wrapper>
          ) : (
            <Wrapper to={`/station/${content}`} isTitle={isTitle} {...rest}>
              {content}
            </Wrapper>
          )}
        </>
      )}
    </>
  );
};

export default Item;

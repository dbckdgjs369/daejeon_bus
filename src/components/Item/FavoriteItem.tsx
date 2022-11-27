import styled from "@emotion/styled";
import { Link } from "react-router-dom";

const Wrapper = styled.div<WrapperProps>`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border-bottom: 1px solid #eee;
  height: 2.5rem;
  padding: ${(props) => (props.isTitle ? "0 0.5rem" : "0 calc(0.5rem + 8px)")};
  font-weight: ${(props) => (props.isTitle ? "800" : "500")};
  border-left: ${(props) => (props.isTitle ? "8px solid lightgreen" : "none")};
`;
const StyledLink = styled(Link)`
  color: black;
  text-decoration: none;
`;
interface WrapperProps {
  isTitle: boolean;
}
interface ItemProps extends WrapperProps, React.HTMLAttributes<HTMLElement> {
  content: string;
}

const Item = ({ content, isTitle, ...rest }: ItemProps) => {
  return (
    <Wrapper isTitle={isTitle} {...rest}>
      <StyledLink to={`/route/${content}`}>{content}</StyledLink>
    </Wrapper>
  );
};

export default Item;

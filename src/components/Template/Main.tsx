import styled from "@emotion/styled";

export interface PageLayoutProps {
  children: React.ReactNode;
}
const MainWrapper = styled.main`
  padding-top: 6rem;
`;

const Main = ({ children }: PageLayoutProps) => {
  return <MainWrapper>{children}</MainWrapper>;
};

export default Main;

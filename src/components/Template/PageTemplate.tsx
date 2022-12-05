import styled from "@emotion/styled";
import Main, { PageLayoutProps } from "./Main";

const Layout = styled.div``;

const PageTemplate = ({ children }: PageLayoutProps) => {
  return (
    <>
      <Layout>{children}</Layout>
    </>
  );
};

PageTemplate.Main = Main;

export default PageTemplate;

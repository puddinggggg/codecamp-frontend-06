import LayoutHeader from "./header";
import LayoutBanner from "./banner";
import LayoutNavigation from "./navigation";
import LayoutFooter from "./footer";
import styled from "@emotion/styled";
import { ReactNode } from "react";
import { useRouter } from "next/router";
const Body = styled.div`
  height: 500px;
`;
const BodyWrapper = styled.div`
  display: flex;
`;

const LayoutSidebar = styled.div`
  height: 500px;
  width: 500px;
  background-color: lightblue;
`;

// const NO_HEADER_LIST = ["/11-01-library-icon"];

interface ILayoutProps {
  children: ReactNode;
}
export default function Layout(props: ILayoutProps) {
  const router = useRouter();
  console.log(router);
  // const noHeader = NO_HEADER_LIST.includes(router.asPath);

  return (
    <div>
      <LayoutHeader />
      <LayoutBanner />
      <LayoutNavigation />
      <BodyWrapper>
        <LayoutSidebar>Sidebar area 사이드바영역</LayoutSidebar>
        <Body>{props.children}</Body>
      </BodyWrapper>
      <LayoutFooter />
    </div>
  );
}

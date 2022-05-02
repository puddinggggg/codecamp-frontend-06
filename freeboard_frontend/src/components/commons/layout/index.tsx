import LayoutHeader from "./header";
import LayoutBanner from "./banner";
import LayoutNavigation from "./navigation";
import LayoutFooter from "./footer";
import styled from "@emotion/styled";
import { ReactNode } from "react";
import { useRouter } from "next/router";
import LayoutSidebar from "./sidebar";
const Body = styled.div`
  margin: 0 auto;
`;
const BodyWrapper = styled.div`
  display: flex;
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
        <Body>{props.children}</Body>
        <LayoutSidebar />
      </BodyWrapper>
      <LayoutFooter />
    </div>
  );
}

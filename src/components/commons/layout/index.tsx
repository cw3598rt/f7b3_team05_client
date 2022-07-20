import { ReactNode } from "react";
import { useRouter } from "next/router";
import { breakPoints } from "../../../commons/styles/media";

import styled from "@emotion/styled";
import LayoutHeader from "./header/LayoutHeader.container";
import LayoutFooter from "./footer/LayoutFooter.container";
import LayoutTopHeader from "./topheader/LayoutTopHeader.container";
import LayoutBanner from "./banner/LayoutBanner";
import LayoutSideBar from "./sidebar/LayoutSidebar.container";
import LayoutSidebarAdmin from "./sidebarAdmin/LayoutSidebar.container";

const HIDDEN_HEADER = ["/"];
const HIDDEN_BANNER = ["/", "/home", "/cafe"];
const HIDDEN_TOP_HEADER = ["/"];
const HIDDEN_FOOTER = ["/"];

const Wrapper = styled.section`
  width: 100%;
  height: 100%;

  @media ${breakPoints.tablet} {
    padding: 0em 1em 0em 1em;

    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  @media ${breakPoints.mobile} {
    padding: 0em 0.5em 0em 0.5em;

    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`;

const Body = styled.div`
  width: 100%;
  height: 70%;
  padding: 0em 0.5em;
`;

interface ILayoutProps {
  children: ReactNode;
}
export default function Layout(props: ILayoutProps) {
  const router = useRouter();

  const isHiddenTopHeader = HIDDEN_TOP_HEADER.includes(router.asPath);
  const isHiddenHeader = HIDDEN_HEADER.includes(router.asPath);
  const isHiddenBanner = HIDDEN_BANNER.includes(router.asPath);
  const isVISBLESIDEBAR = router.asPath.includes("/mypage");
  const isVISBLEADMINSIDEBAR = router.asPath.includes("/admin");

  const isHiddenFooter = HIDDEN_FOOTER.includes(router.asPath);

  return (
    <Wrapper>
      {!isHiddenTopHeader && <LayoutTopHeader />}
      {!isHiddenHeader && <LayoutHeader />}
      {!isHiddenBanner && <LayoutBanner />}
      <div style={{ display: "flex" }}>
        {isVISBLESIDEBAR && <LayoutSideBar />}
        {isVISBLEADMINSIDEBAR && <LayoutSidebarAdmin />}
        <Body>{props.children}</Body>
      </div>
      {!isHiddenFooter && <LayoutFooter />}
    </Wrapper>
  );
}

import styled from "@emotion/styled";
import { useRouter } from "next/router";
const Wrapper = styled.div`
  background-color: yellow;
  height: 40px;
  text-align: center;
`;
const Menu = styled.span`
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;
  color: black;
  line-height: 40px;
`;
const MenuBar = styled.span`
  font-size: 20px;

  color: gray;
  line-height: 40px;
`;
export default function LayoutNavigation() {
  const router = useRouter();
  function goBoards() {
    router.push("/boards");
  }
  function goFirebase() {
    router.push("/firebase");
  }
  // function goMarket(){
  //   router.push("/market");
  // }
  // function goMypage(){
  //   router.push("/mypage");
  // }

  function onClickAPI() {
    router.push("/openapi/");
  }
  return (
    <div>
      <Wrapper>
        <Menu onClick={goBoards}>게시판</Menu>
        <MenuBar> ｜ </MenuBar>
        <Menu onClick={goFirebase}>파이어베이스</Menu>
        <MenuBar> ｜ </MenuBar>
        <Menu>장터</Menu>
        <MenuBar> ｜ </MenuBar>
        <Menu>마이 페이지</Menu>
        <MenuBar> ｜ </MenuBar>
        <Menu onClick={onClickAPI}>강아지</Menu>
      </Wrapper>
      ;
    </div>
  );
}

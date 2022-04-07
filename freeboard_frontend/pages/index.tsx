import styled from "@emotion/styled";
import { useRouter } from "next/router";
const Wrapper = styled.div``;
const Img = styled.img`
  margin: 0 auto;
  width: 100%;
  height: 100%;
  object-fit: cover;
  background-image: url("https://postfiles.pstatic.net/MjAyMjA0MDRfMTcy/MDAxNjQ5MDYxNDUxMzA2.4BwLaV717Oyc10DEXgYLwtVVbdujeG6e8XI-ISMHw6sg.Bbdn0rxqzZnp7mHLgfikzZHgLW1hlGK0jzdPjRUdi9sg.JPEG.cicls/pudding.jpg?type=w773");
  cursor: pointer;
`;

export default function Home() {
  const router = useRouter();
  const onClickMove = () => {
    router.push("/boards");
  };
  return (
    <Wrapper>
      <div>이미지를 클릭하시면 게시판으로 이동합니다.</div>
      <Img onClick={onClickMove} src="/images/pudding.jpg" />
    </Wrapper>
  );
}

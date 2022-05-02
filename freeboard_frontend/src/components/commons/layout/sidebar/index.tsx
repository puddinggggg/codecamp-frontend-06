import { gql } from "@apollo/client";
import styled from "@emotion/styled";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { getToday } from "../../../../commons/libraries/utils";

export const FETCH_USEDITEMS = gql`
  query fetchUseditems($isSoldout: Boolean, $page: Int, $search: String) {
    fetchUseditems(page: $page, search: $search, isSoldout: $isSoldout) {
      _id
      name
      remarks
      contents
      price
      tags
      images
      pickedCount
      seller {
        name
        picture
      }
    }
  }
`;

const Wrapper = styled.div`
  width: 230px;
  height: 390px;
  padding: 0 20px;
  overflow: auto;
`;
const TodayViewWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin-left: 10px;
  padding: 10px;
  border: 1px solid #bdbdbd;
  height: 800px;
  overflow: auto;
`;
const TodayProductWrapper = styled.div`
  padding: 10px;
  border: 1px solid #bdbdbd;
  margin-bottom: 10px;
  cursor: pointer;
`;
const TodayImgWrapper = styled.div`
  width: 85px;
  height: 85px;

  & > img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  & > span {
    font-size: 0.8rem;
  }
`;

export default function LayoutSidebar() {
  const [todayView, setTodayView] = useState([]);
  const router = useRouter();
  const onClickProduct = (item) => (event) => {
    const today = JSON.parse(localStorage.getItem("today") || "[]");
    const temp = today.filter(
      (el) => el._id === item._id && el.date === getToday()
    );
    // 같은 글이 아니거나 같은 날짜가 아닐 경우에만 실행
    if (temp.length === 0) {
      const { __typename, ...rest } = item;
      const aaa = { ...rest, date: getToday() };
      today.push(aaa);
      localStorage.setItem("today", JSON.stringify(today));
    }
    router.push(`/${event.currentTarget.id}`);
  };
  useEffect(() => {
    const today = JSON.parse(localStorage.getItem("today") || "[]");
    const temp = today.filter((el) => el.date === getToday());
    setTodayView(temp);
  });

  return (
    <Wrapper>
      <TodayViewWrapper>
        <h3>최근 본 상품</h3>
        {todayView.map((el) => (
          <TodayProductWrapper
            key={uuidv4()}
            id={el._id}
            onClick={onClickProduct(el)}
          >
            {el.images[0] ? (
              <TodayImgWrapper>
                <img src={`https://storage.googleapis.com/${el.images[0]}`} />
              </TodayImgWrapper>
            ) : (
              <TodayImgWrapper>
                <img src="/images/noimage.png" alt="이미지미등록" />
              </TodayImgWrapper>
            )}
          </TodayProductWrapper>
        ))}
      </TodayViewWrapper>
    </Wrapper>
  );
}

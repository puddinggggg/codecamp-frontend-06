import { useQuery, gql } from "@apollo/client";
import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { IBoard } from "../../src/commons/types/generated/types";


const FETCH_BOARDS = gql`
  query fetchBoards {
    fetchBoards {
      _id
      writer
      title
      contents
    }
  }
`;

const MyRow = styled.div`
  display: flex;
`;

const MyColumn = styled.div`
  width: 200px;
`;
const Wrapper = styled.div`
display:flex;`;
const ymd =() =>{
  const date = new Date()
  
  return date.getFullYear() + "-" + ("0" + (1 + date.getMonth())).slice(-2) + "-" + ("0" + date.getDate()).slice(-2);}
export default function BasketPage() {
  const [basketItems, setBasketItems] = useState([]);
  const { data } = useQuery(FETCH_BOARDS);
  let date = ymd();


  const onClickBasket = (el) => () => {
    
    // 1. 기존 장바구니 가져오기
    const baskets = JSON.parse(localStorage.getItem(JSON.stringify(date)) || "[]");

    // 2. 이미 담겼는지 확인하기
    const temp = baskets.filter((basketEl: IBoard) => basketEl._id === el._id);
    if (temp.length === 1) {
      alert("이미 담겨있음")
      return;
    }

    // const newBaskets = baskets.filter((basketEl: IBoard) => basketEl._id !== el._id);

    // 3. 장바구니에 담기
    const { __typename, ...newEl } = el;
    baskets.push(newEl);
    localStorage.setItem(JSON.stringify(date), JSON.stringify(baskets));
    setBasketItems(baskets)
  };
// const onClickRemove = (el)=>()=>{
//   const baskets = JSON.parse(localStorage.getItem("baskets") );
//   const newBaskets = baskets.filter((basketEl: IBoard) => basketEl._id !== el._id);
//   // const { __typename, ...newEl } = el;
//   // newBaskets.push(newEl);
//     localStorage.setItem("baskets", JSON.stringify(newBaskets));
//     setInclude(false)
// }
useEffect(() => {
  const baskets = JSON.parse(localStorage.getItem(JSON.stringify(date)) || "[]" );
  setBasketItems(baskets);
}, []);
  return (
    <div>
      <Wrapper>
<div>
  <div>게시글목록</div>
      {data?.fetchBoards.map((el: IBoard) => (
        <MyRow key={el._id} onClick={ onClickBasket(el)}>
          <MyColumn>{el.writer}</MyColumn>
          <MyColumn>{el.title}</MyColumn>
        </MyRow>
      ))}
      </div>
<div>
<div>오늘 담은 목록</div>
{basketItems.map((el: IBoard) => (
          <div key={el._id}>
            <MyRow>{el.title}</MyRow>
          </div>
        ))}
        </div>
      </Wrapper>
    </div>
  );
}

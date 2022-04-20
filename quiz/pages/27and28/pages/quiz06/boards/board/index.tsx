import styled from "@emotion/styled";
import { useState } from "react";
import { IBoard } from "../../src/commons/types/generated/types";


const MyRow = styled.div`
  display: flex;
`;

const MyColumn = styled.div`
  width: 200px;
`;

export default function BasketList(props) {
  const [include, setInclude] = useState(false)
 
  const onClickBasket = (el) => () => {

    // 1. 기존 장바구니 가져오기
    const baskets = JSON.parse(localStorage.getItem("baskets") || "[]");

    // 2. 이미 담겼는지 확인하기
    const temp = baskets.filter((basketEl: IBoard) => basketEl._id === el._id);
    if (temp.length === 1) {
      alert("이미 담으신 물품입니다!!!");
      return;
    }

    // const newBaskets = baskets.filter((basketEl: IBoard) => basketEl._id !== el._id);

    // 3. 장바구니에 담기
    const { __typename, ...newEl } = el;
    baskets.push(newEl);
    localStorage.setItem("baskets", JSON.stringify(baskets));
    setInclude(true)
  };
const onClickRemove = (el)=>()=>{
  const baskets = JSON.parse(localStorage.getItem("baskets") || "[]" );
  const newBaskets = baskets.filter((basketEl: IBoard) => basketEl._id !== el._id);
  // const { __typename, ...newEl } = el;
  // newBaskets.push(newEl);
    localStorage.setItem("baskets", JSON.stringify(newBaskets));
    setInclude(false)
}
  return (
    <div>
       
        <MyRow key={props.el._id}>
          <MyColumn>{props.el.writer}</MyColumn>
          <MyColumn>{props.el.title}</MyColumn>
          {include ? <button onClick= {onClickRemove(props.el)}>담기취소</button> : <button onClick= {onClickBasket(props.el)}>게시물담기</button> }
        </MyRow>
      
    </div>
  );
}

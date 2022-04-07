import { useState } from "react";
import styled from "@emotion/styled";

export default function ModalSelfPage() {
  const [isVisible, setIsVisible] = useState(false);
  const onToggleModal = () => {
    setIsVisible((prev) => !prev);
  };
  const ModalWrapper = styled.div`
    background-color: rgba(0, 0, 0, 0.5);
    width: 100vw;
    height: 100vh;
  `;
  const Btn = styled.button``;

  const Modal = styled.div`
    width: 500px;
    height: 350px;
    border: 1px solid black;
    margin: auto;
  `;

  return (
    <>
      <ModalWrapper>
        <Btn onClick={onToggleModal}> 모달열기 </Btn>
        {isVisible && <Modal>게시글이 등록되었습니다.</Modal>}
      </ModalWrapper>
    </>
  );
}

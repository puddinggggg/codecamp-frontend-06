import { useState } from "react";
import styled from "@emotion/styled";

export default function ModalSelfPage() {
  const [isVisible, setIsVisible] = useState(false);
  const onToggleModal = () => {
    setIsVisible((prev) => !prev);
  };

  const Btn = styled.button``;
  const ModalHeader = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 10px;
    align-items: center;
    border-bottom: 1px solid #dbdbdb;
    height: 15%;
  `;
  const ModalTitle = styled.div`
    font-size: 20px;
  `;
  const ModalHeaderBtn = styled.img`
    width: 13px;
    height: 13px;
  `;
  const ModalTxt = styled.div`
    height: 70%;
    border-bottom: 1px solid #dbdbdb;
    padding: 10px;
  `;
  const ModalFooter = styled.div`
    display: flex;
    height: 15%;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    padding: 3px;
  `;
  const Modal = styled.div`
    width: 500px;
    height: 350px;
    border: 1px solid black;
    margin: auto;
  `;
  const OKBtn = styled.button`
    background-color: lightblue;
    padding: 10px 15px;
    margin: 0 10px;
    line-height: 20px;
    height: 40px;
  `;
  const CancelBtn = styled.button`
    padding: 10px 15px;
    padding: 10px 15px;
    margin: 0 10px;
    line-height: 20px;
    height: 40px;
  `;

  return (
    <div>
      <Btn onClick={onToggleModal}> 모달열기 </Btn>
      {isVisible && (
        <Modal>
          <ModalHeader>
            <ModalTitle>게시물 등록 모달 self</ModalTitle>
            <ModalHeaderBtn
              src="https://cdn-icons-png.flaticon.com/512/61/61155.png"
              onClick={onToggleModal}
            />
          </ModalHeader>
          <ModalTxt>게시글이 등록되었습니다.</ModalTxt>
          <ModalFooter>
            <CancelBtn onClick={onToggleModal}>닫기</CancelBtn>
            <OKBtn onClick={onToggleModal}>확인</OKBtn>
          </ModalFooter>
        </Modal>
      )}
    </div>
  );
}

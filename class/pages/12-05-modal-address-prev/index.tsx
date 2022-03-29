import { useState } from "react";
import { Modal, Button } from "antd";
import DaumPostcode from "react-daum-postcode";
const ModalCustomPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  // visible이 보이다 안보이다 하는 개념이라 modal을 껐다가 켜도 기존 데이터 유지됨(주소입력 확인 후 다시 켜면 아무 것도 안 뜸)
  const onToggleModal = () => {
    setIsVisible((prev) => !prev);
  };

  const handleComplete = (data: any) => {
    console.log(data);
    onToggleModal();
  };
  return (
    <>
      <Button onClick={onToggleModal}>Address Modal</Button>
      {isVisible && (
        <Modal visible={true} onOk={onToggleModal} onCancel={onToggleModal}>
          주소
          <br />
          <DaumPostcode onComplete={handleComplete} />
        </Modal>
      )}
    </>
  );
};

export default ModalCustomPage;

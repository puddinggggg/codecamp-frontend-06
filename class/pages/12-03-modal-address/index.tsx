import { useState } from "react";
import { Modal, Button } from "antd";
import DaumPostcode from "react-daum-postcode";
const ModalCustomPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  // visible이 보이다 안보이다 하는 개념이라 modal을 껐다가 켜도 기존 데이터 유지됨(주소입력 확인 후 다시 켜면 아무 것도 안 뜸)
  const showModal = () => {
    setIsVisible(true);
  };

  const handleOk = () => {
    setIsVisible(false);
  };

  const handleCancel = () => {
    setIsVisible(false);
  };
  const handleComplete = (data) => {
    console.log(data);
    setIsVisible(false);
  };
  return (
    <>
      <Button type="primary" onClick={showModal}>
        Address Modal
      </Button>
      {/* 켜기 & 끄기 방법 */}
      {isVisible && (
        <Modal
          title="Basic Modal"
          visible={true}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          주소
          <br />
          <DaumPostcode onComplete={handleComplete} />
        </Modal>
      )}
      {/* 나타내기 & 숨기기 방법 */}
      {/* <Modal
        title="Basic Modal"
        visible={isVisible} 
        onOk={handleOk}
        onCancel={handleCancel}
      >
        주소
        <br />
        <DaumPostcode onComplete={handleComplete} />
      </Modal> */}
    </>
  );
};

export default ModalCustomPage;

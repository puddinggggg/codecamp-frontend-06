import { useState } from "react";
import { Modal, Button } from "antd";
import DaumPostcode from "react-daum-postcode";
export default function AddressPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [addressData, setAddressData] = useState("");
  const onToggleModal = () => {
    setIsVisible((prev) => !prev);
  };

  const handleComplete = (data) => {
    setAddressData(data.address);
    onToggleModal();
  };
  return (
    <>
      <Button onClick={onToggleModal}>Address Modal</Button>
      {addressData && addressData}
      {isVisible && (
        <Modal visible={true} onOk={onToggleModal} onCancel={onToggleModal}>
          <DaumPostcode onComplete={handleComplete} />
        </Modal>
      )}
    </>
  );
}

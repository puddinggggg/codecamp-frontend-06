import { useState } from "react";
import { Modal, Button } from "antd";

const ModalCustomPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [password, setPassword] = useState("");

  const showModal = () => {
    setIsVisible(true);
  };

  const handleOk = () => {
    setIsVisible(false);
  };

  const handleCancel = () => {
    setIsVisible(false);
  };
  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };
  return (
    <>
      <Button type="primary" onClick={showModal}>
        Open Modal
      </Button>
      <Modal
        title="Basic Modal"
        visible={isVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        Write Your Password
        <br />
        <input type="password" onChange={onChangePassword} />
      </Modal>
    </>
  );
};

export default ModalCustomPage;

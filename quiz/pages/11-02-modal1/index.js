import { useState } from "react";
import { Modal, Button } from "antd";

export default function ModalCustomPage() {
  const [isVisible, setIsVisible] = useState(false);

  const onToggleModal = () => {
    setIsVisible((prev) => !prev);
  };

  return (
    <>
      <Button title="게시글 등록" onClick={onToggleModal}>
        모달열기
      </Button>
      {isVisible && (
        <Modal visible={true} onOk={onToggleModal} onCancel={onToggleModal}>
          게시글이 등록되었습니다.
        </Modal>
      )}
    </>
  );
}

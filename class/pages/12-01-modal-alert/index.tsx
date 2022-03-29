import { Modal } from "antd";
export default function ModalAlertPage() {
  const onClickSuccess = () => {
    Modal.success({ content: "게시물 등록 성공" });
  };
  const onClickError = () => {
    Modal.error({ content: "비밀번호 오류" });
  };
  return (
    <div>
      <button onClick={onClickSuccess}>성공</button>
      <button onClick={onClickError}>오류</button>
    </div>
  );
}

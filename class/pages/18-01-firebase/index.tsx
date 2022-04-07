import {
  collection,
  getFirestore,
  addDoc,
  getDocs,
} from "firebase/firestore/lite";
import { firebaseApp } from "../_app";

export default function FirebasePage() {
  const onClickSubmit = async () => {
    // firebase에 데이터 등록
    const board = collection(getFirestore(firebaseApp), "board");
    await addDoc(board, { writer: "작성자", title: "제목", contents: "내용" });
  };
  const onClickFetch = async () => {
    // firebase에서 데이터 조회
    const board = collection(getFirestore(firebaseApp), "board");
    const result = await getDocs(board);
    result.docs.map((el) => el.data());
  };
  return (
    <div>
      <div>firebase 츄라이</div>
      <button onClick={onClickSubmit}>등록</button>
      <button onClick={onClickFetch}>조회</button>
    </div>
  );
}

import { useEffect, useState } from "react";
import FirebaseListUI from "./firebase.list.presenter";
import {
  collection,
  getFirestore,
  getDocs,
  DocumentData,
} from "firebase/firestore/lite";
import { firebaseApp } from "../../../../../pages/_app";
import { useRouter } from "next/router";

export default function FirebaseList() {
  const router = useRouter();
  const [dataBoards, setDataBoards] = useState<DocumentData[]>([]);

  useEffect(() => {
    async function fetchBoards() {
      const board = collection(getFirestore(firebaseApp), "board");
      const result = await getDocs(board);
      const boards = result.docs.map((el) => el.data());
      setDataBoards(boards);
    }
    fetchBoards();
  }, []);

  function onClickMoveToBoardNew() {
    router.push("/firebase/new");
  }

  return (
    <FirebaseListUI
      dataBoards={dataBoards}
      onClickMoveToBoardNew={onClickMoveToBoardNew}
    />
  );
}

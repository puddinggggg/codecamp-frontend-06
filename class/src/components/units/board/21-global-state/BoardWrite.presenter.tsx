import { useState } from "react";
import { useRecoilState } from "recoil";

export default function GlobalStatePresenter() {
  const [isEdit, setIsEdit] = useRecoilState(false);

  return <div>{isEdit ? "수정" : "등록"}</div>;
}

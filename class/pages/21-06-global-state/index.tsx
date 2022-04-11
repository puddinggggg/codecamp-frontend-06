import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import GlobalStateContainer from "../../src/components/units/board/21-global-state/BoardWrite.container";

export default function GlobalStatePage() {
  const [isEdit, setIsEdit] = useRecoilState(false);

  useEffect(() => {
    setIsEdit(true);
  }, []);

  return <GlobalStateContainer />;
}

import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { isEditState } from "../../../src/commons/store";
import WritePresenter from "../../../src/components/units/recoil/write";

export default function EditPage() {
  const [isEdit, setIsEdit] = useRecoilState(isEditState);

  useEffect(() => {
    setIsEdit(true);
  }, []);

  return <WritePresenter />;
}

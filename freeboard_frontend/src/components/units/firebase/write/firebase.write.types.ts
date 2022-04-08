import { ChangeEvent } from "react";

export interface IFirebaseWriteUIProps {
    onChangeWriter: (event: ChangeEvent<HTMLInputElement>) => void;
    onChangeTitle: (event: ChangeEvent<HTMLInputElement>) => void;
    onChangeContents: (event: ChangeEvent<HTMLInputElement>) => void;
    onClickSubmit: () => void;
}

import { ChangeEvent, MouseEvent } from "react";
import { UseFormRegisterReturn } from "react-hook-form";
import { IQuery } from "../../../../commons/types/generated/types";
// 컨테이너
export interface IWriteUseditemProps {
  isEdit: boolean;
  data?: any;
  register: UseFormRegisterReturn;
}
export interface ISubmitVariables {
  name?: string;
  contents?: string;
  remarks?: string;
  price?: number;
  images?: string[];
  tags?: string[];
  useditemAddress?: {
    address?: string;
    addressDetail?: string;
  };
}

export interface IUpdateUseditemInput {
  name?: string;
  contents?: string;
  remarks?: string;
  price?: number;
  images?: string[];
  tags?: string[];
  useditemAddress?: {
    address?: string;
    addressDetail?: string;
  };
}
// 프리젠터
export interface IUseditemWriteUIProps {
  onChangeAddressDetail: (event: ChangeEvent<HTMLInputElement>) => void;
  onClickAddressCode: (event: MouseEvent<HTMLButtonElement>) => void;
  isActive: boolean;
  isEdit: boolean;
  isVisible: boolean;
  address: string;
  onClickSubmit: (data: any) => void;
  onClickUpdate: (data: any) => void;
  data?: Pick<IQuery, "fetchUseditem">;
  register: UseFormRegisterReturn;

  onChangeFile: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeFileUrls: (fileUrls: string, index: number) => void;
  fileRef: any;
  imageUrl: string | undefined;
  fileUrls: string[];

  // onClickAddressCode: () => void;
  // afterAddressSearch: (data: any) => void;
  // address: string;
  // addressDetail: string;
}

// 스타일
export interface ISubmitBtnProps {
  isActive: boolean;
}

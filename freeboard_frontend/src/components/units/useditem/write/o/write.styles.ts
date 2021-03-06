import styled from "@emotion/styled";
import { ISubmitBtnProps } from "./write.types";
import "react-quill/dist/quill.snow.css";
import dynamic from "next/dynamic";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

// styled emotion 사용시 선언 첫 글자는 반드시 대문자
export const OutWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const Wrapper = styled.div`
  width: 1200px;
  border: 1px solid #bdbdbd;
  display: flex;
  padding: 60px 100px 100px;
  align-items: center;
  flex-direction: column;
`;
export const Title = styled.div`
  font-family: "Noto Sans CJK KR";
  font-style: normal;
  font-weight: 700;
  font-size: 36px;
  text-align: center;
`;

export const MenuWrapper = styled.div`
  width: 100%;
  padding-right: 24px;
`;
export const MenuTxt = styled.div`
  height: 24px;
  font-family: "Noto Sans CJK KR";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  margin-bottom: 16px;
`;
export const Input = styled.input`
  width: 486px;
  height: 52px;
  border: 1px solid #bdbdbd;
  box-sizing: border-box;
  padding: 14px 16px;
`;
export const Error = styled.div`
  padding-top: 10px;
  font-size: 14px;
  color: red;
`;

export const ContentWrapper = styled.div`
  padding-top: 40px;
`;
export const ContentInput = styled(ReactQuill)`
  width: 996px;
  height: 480px;
  border: 1px solid #bdbdbd;
  box-sizing: border-box;
  padding: 14px 16px 0;
`;

export const HashTag = styled.div``;
export const AddressWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 12px;
`;
export const AddressLeftWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 12px;
`;
export const AddressRightWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 12px;
`;
export const RightInnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 12px;
`;
export const Map = styled.div`
  width: 400px;
  height: 300px;
`;
export const AddressInput = styled.input`
  width: 996px;
  height: 52px;
  background: #ffffff;
  border: 1px solid #bdbdbd;
  box-sizing: border-box;
  margin-top: 16px;
  margin-bottom: 30px;
  padding: 14px 16px;
`;

export const AddressBtn = styled.button`
  width: 400px;
  height: 150px;
  cursor: pointer;
`;
export const ImgInnerWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;
export const Imgs = styled.img`
  width: 78px;
  height: 78px;
  /* background: #bdbdbd; */
  /* display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center; */
  margin-right: 24px;
`;

export const MainSetInnerWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;
export const RadioWrapper = styled.div`
  margin-right: 22px;
`;

export const Radios = styled.input``;
export const SubmitBtn = styled.button`
  background: #ffd600;
  width: 179px;
  height: 52px;
  font-family: "Noto Sans CJK KR";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  padding: 0 8px;
  border: none;
  margin-top: 80px;
  background-color: ${(props: ISubmitBtnProps) =>
    props.isActive ? "yellow" : "gray"};
`;

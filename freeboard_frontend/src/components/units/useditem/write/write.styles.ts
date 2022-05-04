import styled from "@emotion/styled";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
export const Wrapper = styled.div`
  /* width: 1372px; */
  padding: 0 30px;
`;
export const ImagesWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: 40px 0;
  padding-bottom: 45px;
  border-bottom: 3px solid #555555;
`;

export const Form = styled.form`
  width: 100%;
`;

export const PageTitle = styled.div`
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: bold;
  font-size: 40px;
  line-height: 100%;
  align-items: center;
  border-bottom: 3px solid #555555;
  padding: 65px 0 42px;
`;
export const MenuWrapper = styled.div`
  display: flex;
  margin-top: 40px;
`;
export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
`;
export const MenuTxt = styled.div`
  width: 230px;
  align-items: center;
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 100%;
`;
export const ErrorTxt = styled.div`
  height: 30px;
`;
export const ReactQuillWrapper = styled.div`
  /* display: flex; */
  /* width:1117px; */
  /* height: 430px; */
  /* flex-direction:column; */
  .ql-editor {
    height: 330px;
    width: 1000px;
  }
`;
export const ContentInput = styled(ReactQuill)`
  /* width:1117px; */
  /* height: 430px; */
`;
export const HashTag = styled.div`
  background: #017045;
  color: #fcd91f;
  border-radius: 1rem;
  margin-bottom: 0.875rem;
  margin-left: 0.875rem;
  font-weight: 500;
  align-items: center;
  display: inline-block;
  padding: 2px 5px;
  cursor: pointer;

  &:hover {
    background: #ff2900;
  }
`;

export const DeleteTag = styled.button`
  display: none;
`;
export const SubmitBtn = styled.button`
  width: 195px;
  height: 77px;
  border: none;
  background-color: black;
  color: white;
  font-size: 20px;
  margin: 8px;
`;
export const CancelBtn = styled.button`
  width: 195px;
  height: 77px;
  border: none;
  background-color: yellow;
  font-size: 20px;
  margin: 8px;
`;

import styled from "@emotion/styled";
import { ISubmitBtnProps } from "./write.types"
// styled emotion 사용시 선언 첫 글자는 반드시 대문자
export const OutWrapper = styled.div`
display:flex;
justify-content:center;`;

export const Wrapper = styled.div`
  width: 1200px;
  border: 1px solid #bdbdbd;
  display: flex;
  padding: 60px 100px 100px;
  align-items: center;
  flex-direction: column;
`;
export const Head = styled.div`
  font-family: "Noto Sans CJK KR";
  font-style: normal;
  font-weight: 700;
  font-size: 36px;
  text-align: center;
`;
export const NamePassWrapper = styled.div`
  display: flex;
  padding-top: 80px;
`;
export const NameWrapper = styled.div`
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
export const NamePassInput = styled.input`
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
export const PassWrapper = styled.div`
  width: 100%;
`;

export const TitleWrapper = styled.div`
  padding-top: 40px;
  display: flex;
  flex-direction: column;
`;

export const TitleInput = styled.input`
  width: 996px;
  height: 52px;
  border: 1px solid #bdbdbd;
  box-sizing: border-box;
  padding: 14px 16px;
`;
export const ContentWrapper = styled.div`
  padding-top: 40px;
`;
export const ContentInput = styled.textarea`
  width: 996px;
  height: 480px;
  border: 1px solid #bdbdbd;
  box-sizing: border-box;
  padding: 14px 16px 0;
`;
export const AddressWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 12px;
`;
export const AddressSearchWrapper = styled.div`
  display: flex;
`;
export const AddressInput = styled.input`
  width: 77px;
  height: 52px;
  background: #ffffff;
  padding: 14px 16px;
  border: 1px solid #bdbdbd;
  box-sizing: border-box;
`;
export const AddressBtn = styled.button`
  padding: 14px 16px;
  color: white;
  background: black;
  width: 124px;
  height: 52px;
  margin-left: 16px;
  border: none;
`;
export const AddressDetailInput = styled.input`
  width: 996px;
  height: 52px;
  background: #ffffff;
  border: 1px solid #bdbdbd;
  box-sizing: border-box;
  margin-top: 16px;
  margin-bottom: 30px;
  padding: 14px 16px;

`;

export const YoutubeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 7px;
`;
export const YoutubeInput = styled.input`
  width: 996px;
  height: 52px;
  border: 1px solid #bdbdbd;
  box-sizing: border-box;
  padding: 14px 16px;
`;
export const ImgOutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;;
  width: 100%;
  margin-top: 40px;
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
export const DefaultImg = styled.div`
  width: 78px;
  height: 78px;
  background: #bdbdbd;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-right: 24px;
`;

export const UploadedImg = styled.img`
  width: 100%;
  height: 100%;
  
`;

export const Plus = styled.div`
  color: #4F4F4F;
  font-size: 20px;
`;
export const ImgTxt = styled.div`
  font-family: "Noto Sans CJK KR";
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 16px;
  color: #4f4f4f;
`;
export const MainSetWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;;
  width: 100%;
  margin-top: 40px;
`;

export const MainSetInnerWrapper = styled.div`
display: flex;
flex-direction: row;
`;
export const RadioWrapper = styled.div`
margin-right: 22px;
`;

export const Radios = styled.input`

`;
export const SubmitBtn = styled.button`
background: #FFD600;
width: 179px;
height: 52px;
font-family: 'Noto Sans CJK KR';
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 24px;
padding: 0 8px;
border: none;
margin-top: 80px;
background-color: ${(props: ISubmitBtnProps) => (props.isActive ? "yellow" : "gray")}
`;
import styled from "@emotion/styled";

export const OutWrapper = styled.div`
width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;
export const Wrapper = styled.div`
width: 540px;
    height: 960px;
    border: 1px solid #AACDFF;
    box-shadow: 7px 7px 39px rgba(0, 104, 255, 0.25);
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 60px;`;

export const Title = styled.h3`
  font-size: 32px;
  color: #0068ff;
  font-weight: bold;
  width: 380px;
  margin-bottom: 40px;
`;

export const Error = styled.div`
  color: red;
`;

export const SignUp = styled.button`
  width: 380px;
  height: 75px;
  border: 1px solid #d2d2d2;
  border-radius: 10px;
  font-size: 18px;
`;
export const InputBox = styled.input`
  width: 380px;
  height: 60px;
  background-color: white;
  border-radius: 7px;
  border: 1px solid #d2d2d2;
  padding: 18px;
  margin-top: 20px;
`;
export const PhoneWrapper = styled.div``;
export const PhoneNum = styled.input`
  width: 100px;
  height: 40px;
  border: 1px solid #d2d2d2;
  border-radius: 7px;
  font-size: 16px;
  text-align: center;
`;

export const TokenWrapper = styled.div`
  width: 380px;
  height: 40px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  margin-top: 20px;
`;
export const Token = styled.div`
  color: #0068ff;
  font-size: 18px;
`;
export const TokenTimer = styled.div`
  color: #0068ff;
  font-size: 18px;
`;
export const TokenButton = styled.button`
  width: 120px;
  height: 40px;
  border-radius: 7px;
  margin-left: 20px;
  border: 1px solid #d2d2d2;
  font-size: 16px;
`;
export const TokenTimerButton = styled.button`
  width: 120px;
  height: 40px;
  border-radius: 7px;
  margin-left: 20px;
  border: 1px solid #d2d2d2;
  font-size: 16px;
`;
export const LocationWrapper = styled.div``;
export const SelectLocation = styled.select`
  margin-top: 20px;
  width: 380px;
  height: 60px;
  border: 1px solid #d2d2d2;
  border-radius: 7px;
  font-size: 16px;
  padding: 18px;
  color: #797979;
`;
export const ErrorLocation = styled.div``;
export const GenderWrapper = styled.div`
  width: 380px;
  height: 40px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
`;
export const Gender = styled.div`
  width: 70px;
  text-align: center;
`;
export const Line = styled.hr`
  margin-top: 30px;
  margin-bottom: 20px;
  border: 1px solid #e6e6e6;
  width: 380px;
`;
export const ErrorGender = styled.div``;

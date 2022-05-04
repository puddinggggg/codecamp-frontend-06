import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  margin-bottom: 36px;
`;

export const MapContainer = styled.div`
  width: 390px;
  height: 260px;

`;
export const MenuTxt = styled.div`
width:256px;
align-items: center;
font-family: 'Noto Sans KR';
font-style: normal;
font-weight: 500;
font-size: 24px;
line-height: 100%;
margin-bottom: 36px;
`;
export const MapImg = styled.img`
width: 384px;
height: 252px;
`;

export const ContainerLeft = styled.div`
  margin-right: 20px;
`;

export const ContainerRight = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: flex-start;
  align-items: flex-start; */
/* 
  & > span {
    width: 100%;
  }

  & > input {
    width: 100%;
  } */
`;

export const AddressHead = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 10px 0 0;
  margin-top: 70px;
`;

export const ZipcodeInput = styled.input`
width: 77px;
height: 52px;
border: 1px solid #BDBDBD;
box-sizing: border-box;

font-family: 'Noto Sans KR';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 23px;
text-align: center;
`;
export const AddressInput =styled.input`
width: 802px;
height: 56px;
border:none;
box-sizing: border-box;

font-family: 'Noto Sans KR';
font-style: normal;
font-weight: 400;
font-size: 16px;
padding: 14px 16px;
background: #E9E9E9;
margin-top: 20px;
`;
export const SearchAddress = styled.button`
border:none;
margin-left: 16px;
  justify-content: center;
  align-items: center;
  padding: 14px 16px;
  width: 124px;
height: 51px;
  background: #000000;
  color: #ffffff;
  font-size:14px;
  cursor: pointer;

  }
`;

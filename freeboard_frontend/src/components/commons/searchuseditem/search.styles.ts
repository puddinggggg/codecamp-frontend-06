import styled from "@emotion/styled";

export const TitleSearchWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 776px;
  height: 52px;
  background: #f2f2f2;
  border-radius: 10px;
  padding: 14px;
`;
export const SearchImg = styled.img`
  margin: 0 15px;
`;
export const SearchInput = styled.input`
  border: transparent;
  background-color: transparent;
  width: 90%;
  height: 18px;
  ::placeholder {
    font-weight: 400;
    font-size: 16px;
    color: #000000;
  }
`;
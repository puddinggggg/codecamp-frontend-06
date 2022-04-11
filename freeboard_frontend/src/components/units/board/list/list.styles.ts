import styled from "@emotion/styled";
import { IMapBoardPageProps } from "./list.types";

export const Wrapper = styled.div`
  width: 1200px;
  margin: 100px auto;
`;
export const BestWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const BestTitle = styled.div`
  font-weight: 700;
  font-size: 36px;
  line-height: 42px;
  text-align: center;
`;

export const BestLists = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const BestBoard = styled.div`
  display: flex;
  flex-direction: column;
  width: 282px;
  height: 257px;
  background: #ffffff;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.1);
  border-radius: 20px;
  margin: 12px;
`;
export const BestImg = styled.img`
  width: 282px;
  height: 110px;
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
`;

export const BestBoardTitle = styled.div`
  font-weight: 500;
  font-size: 18px;
  line-height: 27px;
  margin: 22px 0 10px 20px;
`;
export const BestBoardBottomWrapper = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
export const BestBottomLeft = styled.div``;
export const BestProfileWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
export const BestProfileImg = styled.img`
  width: 25px;
  height: 30px;
  padding: 5px 5px 5px 0px;
`;
export const BestWriter = styled.div`
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
`;
export const BestCreated = styled.div`
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  color: #828282;
`;
export const BestBottomRight = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const BestLikeImg = styled.img``;
export const BestLikeCount = styled.div`
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
`;
export const SearchWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 80px 0 40px;
`;

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

export const DateSearch = styled.div`
  width: 244px;
  height: 52px;
  border: 1px solid #bdbdbd;
  font-weight: 400;
  font-size: 16px;
  line-height: 52px;
  text-align: center;
  color: #bdbdbd;
`;
export const SearchBtn = styled.button`
  background: #000000;
  border-radius: 10px;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  color: #ffffff;
  padding: 14px 16px;
`;

export const ListWrapper = styled.div`
  border-top: 2px solid gray;
  border-bottom: 2px solid gray;
`;

export const HeaderNumberColumn = styled.div`
  width: 10%;
  text-align: center;
  font-weight: 500;
  font-size: 18px;
  line-height: 27px;
`;
export const HeaderTitleColumn = styled.div`
  width: 55%;
  text-align: center;
  font-weight: 500;
  font-size: 18px;
  line-height: 27px;
`;
export const HeaderWriterColumn = styled.div`
  width: 15%;
  text-align: center;
  font-weight: 500;
  font-size: 18px;
  line-height: 27px;
`;
export const HeaderDateColumn = styled.div`
  width: 20%;
  text-align: center;
  font-weight: 500;
  font-size: 18px;
  line-height: 27px;
`;
export const HeaderRow = styled.div`
  display: flex;
  flex-direction: row;
  height: 40px;
  align-items: center;
`;
export const Row = styled.div`
  display: flex;
  flex-direction: row;
  height: 40px;
  align-items: center;
  border-top: 1px solid #bdbdbd;
`;
export const NumberColumn = styled.div`
  width: 10%;
  text-align: center;
`;
export const TitleColumn = styled.div`
  width: 55%;
  text-align: center;
`;
export const WriterColumn = styled.div`
  width: 15%;
  text-align: center;
`;
export const DateColumn = styled.div`
  width: 20%;
  text-align: center;
`;

export const PaginationWrapper = styled.div`
display:flex;
justify-content: center;
padding: 10px;
`;

export const PageArrow = styled.span`
  cursor: pointer;
  font-size:20px;
  line-height:25px;
  `;

export interface ICurrentProps {
  current: boolean;
}
export const Pages = styled.span`
  cursor: pointer;
  
  color: ${(props: ICurrentProps) => (props.current === true ? "white" : "black")};
  background-color: ${(props: ICurrentProps) => (props.current !== true ? "white" : "gray")};
  font-size:15px;
  margin: 0 5px;
`;

export interface ISearchProps {
  isMatched: boolean;
}
export const Word = styled.span`
  color: ${(props: ISearchProps) => (props.isMatched ? "red" : "black")};
`;

export const Footer = styled.div``;

export const Btn = styled.button`
  float: right;
  background: #dbdbdb;
  border: none;
  border-radius: 10px;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  color: black;
  padding: 14px 16px;
  cursor: pointer;
`;

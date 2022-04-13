import styled from "@emotion/styled";
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
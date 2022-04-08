import styled from "@emotion/styled";
export const Wrapper = styled.div`
width: 1200px;
margin: 20px auto;
`;
export const RowFlexOutWrapper = styled.div`
display:flex;
flex-direction: row;
justify-content:space-between;

width: 100%;
`;
export const RowFlexWrapper = styled.div`
display:flex;
flex-direction: row;
align-items:center;
`;
export const ColumnFlexWrapper = styled.div`
display:flex;
flex-direction: column;
width: 100%;
`;

export const CommentLists = styled.div`
display:flex;
flex-direction: column;
`;
export const CommentList = styled.div`
display:flex;
margin-top: 20px;
padding-bottom: 20px;
border-bottom: 1px solid #bdbdbd;
`;
export const commentListWriter = styled.div`
font-weight: 500;
font-size: 18px;
line-height: 24px;
margin-right:20px;`;
export const commentListContents = styled.div`
font-weight: 400;
font-size: 16px;
line-height: 24px;
color: #4F4F4F;`;
export const CommentUpdateBtn = styled.img`
width: 18px;
height: 18px;
cursor: pointer;
margin-right: 10px;
`;
export const CommentDeleteBtn = styled.img`
width: 14px;
height: 14px;
cursor: pointer;
margin-right: 10px;
`;
export const CommentDate = styled.div`
font-weight: 400;
font-size: 12px;
line-height: 18px;
margin-top:15px;
color: #BDBDBD;`;
export const Profile = styled.img`
  margin-right: 10px;
  width: 40px;
  height: 40px;
`;

export const PasswordInput = styled.input`
  width: 100%;
  `;
export const ContentsInput = styled.textarea`
  width: 100%;
  `;
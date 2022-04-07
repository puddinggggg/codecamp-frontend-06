import styled from "@emotion/styled";

export const CommentWrapper = styled.div`width: 1200px;
margin: 0 auto 20px;
`;
export const CommentTitleWrapper = styled.div`
display: flex;
flex-direction:row;
align-items:center;
padding-bottom: 40px;
`;
export const CommentTitleImg = styled.img`
height: 20px;
object-fit:cover;
margin-right: 14px;
`;
export const CommentTitleTxt = styled.span`
font-weight: 500;
font-size: 18px;
line-height: 27px;
`;
export const CommentInputWrapper = styled.div`
`;
export const CommentInput = styled.input`
width: 180px;
height: 52px;
margin: 0 24px 20px 0;
padding: 10px;
`;

export const CommentContentsWrapper = styled.div`
border: 1px solid #BDBDBD;`;
export const CommentContents = styled.textarea`
width:100%;
height:108px;
padding: 10px;
border: none;

`;
export const CommentContentsBottomWrapper = styled.div`
border-top: 1px solid #F2F2F2;
display:flex;
flex-direction: row;`;
export const CommentLengthCount = styled.div`
width:1148px;
height:52px;
line-height: 52px;
padding-left:20px;
color: #BDBDBD;
font-size: 16px;
`;
export const CommentSubmitBtn = styled.button`
background: black;
color: white;
width:91px;
height: 52px;
text-align: center;
line-height:52px;
border: none;
`;

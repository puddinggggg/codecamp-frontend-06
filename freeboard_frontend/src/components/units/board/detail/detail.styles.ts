import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 1200px;
  margin: 100px;
`;

export const BoardWrapper = styled.div`
  border: 1px solid black;
  padding: 80px 100px 100px 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: none;
  box-shadow: 0px 0px 10px gray;
`;

export const Header = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #bdbdbd;
  padding-bottom: 20px;
`;

export const ProfileWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Profile = styled.img`
  margin-right: 10px;
  width: 50px;
  height: 50px;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Writer = styled.div`
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 36px;
`;

export const UploadDate = styled.div`
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #828282;
`;

export const IconWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Link = styled.img`
  width: 27px;
  height: 14px;
  margin-right: 30px;
`;
export const Location = styled.img`
  width: 19px;
  height: 27px;
`;

export const Body = styled.div`
  width: 100%;
  min-height: 800px;
`;

export const Title = styled.h1`
  padding-top: 80px;
`;

export const Image = styled.img`
  width: 996px;
  height: 480px;
`;

export const Contents = styled.div`
  padding-top: 40px;
  padding-bottom: 120px;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
`;

export const Youtube = styled.div`
  width: 486px;
  height: 240px;
  border: 1px solid #bdbdbd;
  margin: 0 auto 160px;
`;

export const LikeWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const LikeInnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 10px;
`;

export const LikeImg = styled.img`
  width: 24px;
  height: 20px;
`;

export const LikeCount = styled.div`
  font-weight: 400;
  font-size: 18px;
  line-height: 27px;
  text-align: center;
  color: #ffd600;
`;

export const DislikeImg = styled.img`
  width: 24px;
  height: 20px;
`;

export const DislikeCount = styled.div`
  font-weight: 400;
  font-size: 18px;
  line-height: 27px;
  text-align: center;
  color: #828282;
`;

export const BottomWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-top: 80px;
  border-bottom: 1px solid #bdbdbd;
  padding-bottom: 90px;
`;

export const Button = styled.button`
  width: 179px;
  height: 45px;
  background-color: white;
  border: 1px solid gray;
  margin: 0px 12px;
  cursor: pointer;

  /* :hover {
    background-color: gold;
    border-color: white;
  } */
`;
export const CommentWrapper = styled.div`
`;
export const CommentTitleWrapper = styled.div`
`;
export const CommentTitleImg = styled.img``;
export const CommentTitleTxt = styled.span`
`;
export const CommentInputWrapper = styled.div`
`;
export const CommentInput = styled.input``;

export const CommentContentsWrapper = styled.div``;
export const CommentContents = styled.input``;
export const CommentContentsBottomWrapper = styled.div`
display:flex;
flex-direction: row;`;
export const CommentLengthCount = styled.div`
width:1148px;
height:52px;`;
export const CommentSubmitBtn = styled.button`
background: black;
color: white;
width:91px;
height: 52px;
text-align: center;
line-height:52px;`;

export const CommentLists = styled.div`
display:flex;
flex-direction: column;`;
export const CommentList = styled.div`
display:flex;
`;
export const commentListWriter = styled.div``;
export const commentListContents = styled.div``;
export const CommentUpdateBtn = styled.img``;
export const CommentDeleteBtn = styled.img``;
export const CommentDate = styled.div``;
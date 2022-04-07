import {
  OutWrapper,
  TopWrapper,
  SearchWrapper,
  SearchImg,
  ProfileWrapper,
  Title,
  ProfileInnerWrapper,
  ProfileImg,
  ProfileName,
  ProfileArrow,
  Menus,
  Menu,
  ActiveMenu,
  MidWrapper,
  QuestionOutWrapper,
  QuestionWrapper,
  QuestionNumber,
  QuestionTxt,
  BottomWrapper,
  ImgInnerWrapper,
  Imgs,
  ImgTxt,
  ActiveImgTxt,
} from "../../../../class/styles/quiz/01-faq";
import SearchSrc from "../../../public/faq/search.png";
import ProfileSrc from "../../../public/faq/profile.png";
import ArrowSrc from "../../../public/faq/arrow.png";
import HomeSrc from "../../../public/faq/home.png";
import LocationSrc from "../../../public/faq/location.png";
import LikeSrc from "../../../public/faq/like.png";
import MySrc from "../../../public/faq/my-selected.png";
export default function Faq() {
  return (
    <OutWrapper>
      <TopWrapper>
        <SearchWrapper>
          <SearchImg src={SearchSrc} />
        </SearchWrapper>
        <ProfileWrapper>
          <Title>마이</Title>
          <ProfileInnerWrapper>
            <ProfileImg src={ProfileSrc} />
            <ProfileName>임정아</ProfileName>
            <ProfileArrow>〉</ProfileArrow>
          </ProfileInnerWrapper>
        </ProfileWrapper>
        <Menus>
          <Menu>공지사항</Menu>
          <Menu>이벤트</Menu>
          <ActiveMenu>FAQ</ActiveMenu>
          <Menu>Q&A</Menu>
        </Menus>
      </TopWrapper>
      <MidWrapper>
        <QuestionOutWrapper>
          <QuestionWrapper>
            <QuestionNumber>Q.01</QuestionNumber>
            <QuestionTxt>리뷰 작성은 어떻게 하나요?</QuestionTxt>
          </QuestionWrapper>
        </QuestionOutWrapper>
        <QuestionOutWrapper>
          <QuestionWrapper>
            <QuestionNumber>Q.02</QuestionNumber>
            <QuestionTxt>리뷰 수정/삭제는 어떻게 하나요?</QuestionTxt>
          </QuestionWrapper>
        </QuestionOutWrapper>
        <QuestionOutWrapper>
          <QuestionWrapper>
            <QuestionNumber>Q.03</QuestionNumber>
            <QuestionTxt>아이디/비밀번호를 잊어버렸어요.</QuestionTxt>
          </QuestionWrapper>
        </QuestionOutWrapper>
        <QuestionOutWrapper>
          <QuestionWrapper>
            <QuestionNumber>Q.04</QuestionNumber>
            <QuestionTxt>회원탈퇴를 하고싶어요.</QuestionTxt>
          </QuestionWrapper>
        </QuestionOutWrapper>
        <QuestionOutWrapper>
          <QuestionWrapper>
            <QuestionNumber>Q.05</QuestionNumber>
            <QuestionTxt>출발지 설정은 어떻게 하나요?</QuestionTxt>
          </QuestionWrapper>
        </QuestionOutWrapper>
        <QuestionOutWrapper>
          <QuestionWrapper>
            <QuestionNumber>Q.06</QuestionNumber>
            <QuestionTxt>비밀번호를 변경하고 싶어요.</QuestionTxt>
          </QuestionWrapper>
        </QuestionOutWrapper>
      </MidWrapper>

      <BottomWrapper>
        <ImgInnerWrapper>
          <Imgs src={HomeSrc} />
          <ImgTxt>홈</ImgTxt>
        </ImgInnerWrapper>
        <ImgInnerWrapper>
          <Imgs src={LocationSrc} />
          <ImgTxt>잇츠로드</ImgTxt>
        </ImgInnerWrapper>
        <ImgInnerWrapper>
          <Imgs src={LikeSrc} />
          <ImgTxt>마이찜</ImgTxt>
        </ImgInnerWrapper>
        <ImgInnerWrapper>
          <Imgs src={MySrc} />
          <ActiveImgTxt>마이</ActiveImgTxt>
        </ImgInnerWrapper>
      </BottomWrapper>
    </OutWrapper>
  );
}

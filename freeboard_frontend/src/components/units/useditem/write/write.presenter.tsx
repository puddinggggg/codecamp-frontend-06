import * as S from "./write.styles";

import { IUseditemWriteUIProps } from "./write.types";
import { v4 as uuidv4 } from "uuid";
import Uploads from "../../../commons/upload/upload.container";

export default function UseditemWriteUI(props: IUseditemWriteUIProps) {
  // export default function BoardWriteUI({isActive}props: IBoardWriteUIProps) {
  // console.log(props.data?.fetchBoard.writer);
  // const {isActive,} = props; // 이러면 밑에서 props 안붙여도 됨 위 주석처럼 해도 가능한데 받아올 데이터가 많으면 지저분해질 수 있다.
  return (
    <div>
      
      <S.OutWrapper>
        <S.Wrapper>
          <form onSubmit={props.isEdit ?props.handleSubmit(props.onClickUpdate):props.handleSubmit(props.onClickSubmit)}>
          <S.Head>상품{props.isEdit ? " 수정" : " 등록"}하기</S.Head>
          
            <S.MenuWrapper>
              <S.MenuTxt>상품명</S.MenuTxt>
              <S.Input
                type="text"
                placeholder="상품명을 작성해주세요."
                {...props.register("name")}
                // defaultValue={props.data?.fetchBoard.writer || ""}
                // readOnly={!!props.data?.fetchBoard.writer}
              />
              <S.Error>{props.formState.errors.name?.message}</S.Error>
            </S.MenuWrapper>
            <S.MenuWrapper>
              <S.MenuTxt>한줄요약</S.MenuTxt>
              <S.Input
                type="text"
                placeholder="간단한 상품 설명을 작성해주세요."
                {...props.register("remarks")}
              />
              <S.Error>{props.formState.errors.remarks?.message}</S.Error>
            </S.MenuWrapper>
          
          <S.ContentWrapper>
            <S.MenuTxt>상품설명</S.MenuTxt>
            <S.ContentInput
              placeholder="상품 설명을 작성해주세요."
              {...props.register("contents")}
              // defaultValue={props.data?.fetchBoard.contents}
            />
            <S.Error>{props.formState.errors.contents?.message}</S.Error>
          </S.ContentWrapper>
          <S.MenuWrapper>
            <S.MenuTxt>판매가격</S.MenuTxt>
            <S.Input
              type="number"
              placeholder="판매 가격을 입력해주세요."
              {...props.register("price")}
              // defaultValue={props.data?.fetchBoard.title}
            />
            <S.Error>{props.formState.errors.price?.message}</S.Error>
          </S.MenuWrapper>
          <S.MenuWrapper>
            <S.MenuTxt>태그입력</S.MenuTxt>
            <S.ContentInput
              placeholder="#태그 #태그 #태그"
              // onChange={props.onChangeContents}
              // defaultValue={props.data?.fetchBoard.contents}
            />
            </S.MenuWrapper>
          {/* <S.AddressWrapper>
            <S.AddressLeftWrapper>
            <S.MenuTxt>거래위치</S.MenuTxt>
            <div>지도자리</div>
            </S.AddressLeftWrapper>

            <S.AddressRightWrapper>
              <S.RightInnerWrapper>
            <S.MenuTxt>GPS</S.MenuTxt>
            <div>위도경도자리</div>
              </S.RightInnerWrapper>
              <S.RightInnerWrapper>
            <S.MenuTxt>주소</S.MenuTxt>
            <S.AddressDetailInput
              readOnly
              value={
                props.address ||
                props.data?.fetchBoard.boardAddress?.address ||
                ""
              }
              />
            <S.AddressDetailInput
              onChange={props.onChangeAddressDetail}
              defaultValue={
                props.data?.fetchBoard.boardAddress?.addressDetail || ""
              }
              />
              </S.RightInnerWrapper>
              </S.AddressRightWrapper>
          </S.AddressWrapper> */}

          <S.MenuWrapper>
            <S.MenuTxt>사진첨부</S.MenuTxt>
            
            <S.ImgInnerWrapper>
            {props.fileUrls.map((el, index) => (
            <Uploads
              key={uuidv4()}
              index={index}
              fileUrl={el}
              onChangeFileUrls={props.onChangeFileUrls}
            />
          ))}
            </S.ImgInnerWrapper>
          </S.MenuWrapper>
          <S.MenuWrapper>
            <S.MenuTxt>메인 사진 설정</S.MenuTxt>
            <S.MainSetInnerWrapper>
              <S.RadioWrapper>
                <S.Radios type="radio" name="radio-main" id="image1" />
                사진1
              </S.RadioWrapper>
              <S.Radios type="radio" name="radio-main" id="image2" />
              사진2
            </S.MainSetInnerWrapper>
          </S.MenuWrapper>
          <S.SubmitBtn
            onClick={props.isEdit ? props.onClickUpdate : props.onClickSubmit}
            isActive={props.isActive}
          >
            {props.isEdit ? "수정" : "등록"}하기
          </S.SubmitBtn></form>
        </S.Wrapper>
      </S.OutWrapper>
    </div>
  );
}

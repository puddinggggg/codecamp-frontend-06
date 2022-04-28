import * as S from "./write.styles";

import { IUseditemWriteUIProps } from "./write.types";
import { v4 as uuidv4 } from "uuid";
import Upload from "../../../commons/upload/upload.container";
import DaumPostcode from "react-daum-postcode";
import { useEffect } from "react";
import { Modal } from "antd";

// declare const window: typeof globalThis & {
//   kakao: any;
// };

export default function UseditemWriteUI(props: IUseditemWriteUIProps) {
  // export default function BoardWriteUI({isActive}props: IBoardWriteUIProps) {
  // console.log(props.data?.fetchBoard.writer);
  // const {isActive,} = props; // 이러면 밑에서 props 안붙여도 됨 위 주석처럼 해도 가능한데 받아올 데이터가 많으면 지저분해질 수 있다.
  return (
    <div>
      {props.isVisible && (
        <Modal visible={true} onCancel={props.onClickAddressCode} footer={[]}>
          <DaumPostcode onComplete={props.afterAddressSearch} />
        </Modal>
      )}
      <S.OutWrapper>
        <form
          onSubmit={props.handleSubmit(
            props.isEdit ? props.onClickUpdate : props.onClickSubmit
          )}
        >
          <S.Wrapper>
            <S.Title>상품{props.isEdit ? " 수정" : " 등록"}하기</S.Title>

            <S.MenuWrapper>
              <S.MenuTxt>상품명</S.MenuTxt>
              <S.Input
                type="text"
                placeholder="상품명을 작성해주세요."
                {...props.register("name")}
                defaultValue={props.data?.fetchUseditem.name || ""}
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
                defaultValue={props.data?.fetchUseditem.remarks || ""}
              />
              <S.Error>{props.formState.errors.remarks?.message}</S.Error>
            </S.MenuWrapper>

            <S.ContentWrapper>
              <S.MenuTxt>상품설명</S.MenuTxt>
              <S.ContentInput
                placeholder="상품 설명을 작성해주세요."
                onChange={props.onChangeContents}
                defaultValue={props.data?.fetchUseditem.contents || ""}
              />
              <S.Error>{props.formState.errors.contents?.message}</S.Error>
            </S.ContentWrapper>
            <S.MenuWrapper>
              <S.MenuTxt>판매가격</S.MenuTxt>
              <S.Input
                type="number"
                placeholder="판매 가격을 입력해주세요."
                {...props.register("price")}
                defaultValue={props.data?.fetchUseditem.price || ""}
              />
              <S.Error>{props.formState.errors.price?.message}</S.Error>
            </S.MenuWrapper>
            <S.MenuWrapper>
              <S.MenuTxt>태그입력</S.MenuTxt>
              {/* <S.Input
                {...props.register("tags")}
                // onKeyUp={props.onKeyUpHash}
                placeholder="#태그 #태그 #태그"
                defaultValue={props.data?.fetchUseditem.tags}
              /> */}
              {/* <span>
                {props.hashArr.map((el, index) => (
                  <span key={index}>{el}</span>
                ))}
              </span> */}
            </S.MenuWrapper>
            <S.AddressWrapper>
              <S.AddressLeftWrapper>
                <S.MenuTxt>거래위치</S.MenuTxt>
                <S.Map id="map"></S.Map>
                <div>지도자리</div>
              </S.AddressLeftWrapper>

              <S.AddressRightWrapper>
                <S.RightInnerWrapper>
                  <S.MenuTxt>주소</S.MenuTxt>
                  <S.AddressBtn
                    type="button"
                    onClick={props.onClickAddressCode}
                  >
                    주소 검색
                  </S.AddressBtn>

                  <S.AddressInput
                    readOnly
                    value={
                      props.address ||
                      props.data?.fetchUseditem?.useditemAddress?.address ||
                      ""
                    }
                  />
                  <S.AddressInput
                    onChange={props.onChangeAddressDetail}
                    defaultValue={
                      props.data?.fetchUseditem?.useditemAddress
                        ?.addressDetail || ""
                    }
                  />
                </S.RightInnerWrapper>
              </S.AddressRightWrapper>
            </S.AddressWrapper>
            <button
              type="button"
              onClick={() => {
                console.log(props.address);
              }}
            >
              dd
            </button>
            <S.MenuWrapper>
              <S.MenuTxt>사진첨부</S.MenuTxt>

              <S.ImgInnerWrapper>
                {props.fileUrls.map((el, index) => (
                  <Upload
                    key={uuidv4()}
                    index={index}
                    fileUrl={el}
                    onChangeFileUrls={props.onChangeFileUrls}
                  />
                ))}
              </S.ImgInnerWrapper>
            </S.MenuWrapper>

            <S.SubmitBtn
              // type="button"
              // onClick={props.isEdit ? props.onClickUpdate : props.onClickSubmit}
              isActive={props.isActive}
            >
              {props.isEdit ? "수정" : "등록"}하기
            </S.SubmitBtn>
          </S.Wrapper>
        </form>
      </S.OutWrapper>
    </div>
  );
}

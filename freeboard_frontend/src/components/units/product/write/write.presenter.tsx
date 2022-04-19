import * as S from "./write.styles";
import { IProductWriteUIProps } from "./write.types";
import DaumPostcode from "react-daum-postcode";
import { Modal } from "antd";
import { v4 as uuidv4 } from "uuid";
import Uploads from "../../../commons/upload/upload.container";

export default function ProductWriteUI(props: IProductWriteUIProps) {
  // export default function BoardWriteUI({isActive}props: IBoardWriteUIProps) {
  console.log(props.data?.fetchBoard.writer);
  // const {isActive,} = props; // 이러면 밑에서 props 안붙여도 됨 위 주석처럼 해도 가능한데 받아올 데이터가 많으면 지저분해질 수 있다.
  return (
    <div>
      {props.isVisible && (
        <Modal visible={true}>
          <DaumPostcode onComplete={props.afterAddressSearch} />
        </Modal>
      )}
      <S.OutWrapper>
        <S.Wrapper>
          <S.Head>상품{props.isEdit ? " 수정" : " 등록"}하기</S.Head>
          <S.NamePassWrapper>
            <S.NameWrapper>
              <S.MenuTxt>상품명</S.MenuTxt>
              <S.NamePassInput
                type="text"
                placeholder="상품명을 작성해주세요."
                onChange={props.onChangeName}
                // defaultValue={props.data?.fetchBoard.writer || ""}
                // readOnly={!!props.data?.fetchBoard.writer}
              />
              <S.Error>{props.nameError}</S.Error>
            </S.NameWrapper>
            <S.PassWrapper>
              <S.MenuTxt>한줄요약</S.MenuTxt>
              <S.NamePassInput
                type="text"
                placeholder="간단한 상품 설명을 작성해주세요."
                onChange={props.onChangeRemarks}
              />
              <S.Error>{props.remarkError}</S.Error>
            </S.PassWrapper>
          </S.NamePassWrapper>
          <S.ContentWrapper>
            <S.MenuTxt>상품설명</S.MenuTxt>
            <S.ContentInput
              placeholder="상품 설명을 작성해주세요."
              onChange={props.onChangeContents}
              // defaultValue={props.data?.fetchBoard.contents}
            />
            <S.Error>{props.contentsError}</S.Error>
          </S.ContentWrapper>
          <S.TitleWrapper>
            <S.MenuTxt>판매가격</S.MenuTxt>
            <S.TitleInput
              type="number"
              placeholder="판매 가격을 입력해주세요."
              onChange={props.onChangePrice}
              // defaultValue={props.data?.fetchBoard.title}
            />
            <S.Error>{props.priceError}</S.Error>
          </S.TitleWrapper>
          <S.AddressWrapper>
            <S.MenuTxt>거래위치</S.MenuTxt>
            <S.AddressSearchWrapper>
              <S.AddressInput
                placeholder="07250"
                readOnly
                value={
                  props.zipcode ||
                  props.data?.fetchBoard.boardAddress?.zipcode ||
                  ""
                }
              />
              <S.AddressBtn onClick={props.onClickAddressCode}>
                우편번호 검색
              </S.AddressBtn>
            </S.AddressSearchWrapper>
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
          </S.AddressWrapper>

          <S.ImgOutWrapper>
            <S.MenuTxt>사진첨부</S.MenuTxt>
            <input
              style={{ display: "none" }}
              type="file"
              onChange={props.onChangeFile}
              ref={props.fileRef}
            />
            <S.ImgInnerWrapper>
              {/* <S.UploadedImg
                src={`https://storage.googleapis.com/${props.imageUrl}`}
              />
            </S.Imgs> */}
              {props.fileUrls.map((el, index) => (
                <Uploads
                  key={uuidv4()}
                  index={index}
                  fileUrl={el}
                  onChangeFileUrls={props.onChangeFileUrls}
                />
              ))}
              {/* 
              <S.Imgs>
                <S.Plus>+</S.Plus>
                <S.ImgTxt>Upload</S.ImgTxt>
              </S.Imgs>
              <S.Imgs>
                <S.Plus>+</S.Plus>
                <S.ImgTxt>Upload</S.ImgTxt>
              </S.Imgs> */}
            </S.ImgInnerWrapper>
          </S.ImgOutWrapper>
          <S.MainSetWrapper>
            <S.MenuTxt>메인 사진 설정</S.MenuTxt>
            <S.MainSetInnerWrapper>
              <S.RadioWrapper>
                <S.Radios type="radio" name="radio-main" id="image1" />
                사진1
              </S.RadioWrapper>
              <S.Radios type="radio" name="radio-main" id="image2" />
              사진2
            </S.MainSetInnerWrapper>
          </S.MainSetWrapper>
          <S.SubmitBtn
            onClick={props.isEdit ? props.onClickUpdate : props.onClickSubmit}
            isActive={props.isEdit ? true : props.isActive}
          >
            {props.isEdit ? "수정" : "등록"}하기
          </S.SubmitBtn>
        </S.Wrapper>
      </S.OutWrapper>
    </div>
  );
}

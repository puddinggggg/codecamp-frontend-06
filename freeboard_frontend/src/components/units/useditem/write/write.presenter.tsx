import { v4 as uuidv4 } from "uuid";
import * as S from "./write.styles";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";
import Input01 from "../../../commons/inputs/01";
import KakaoMap01 from "../../../commons/kakaoMaps/01";
import Upload from "../../../commons/upload/upload.container";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

export default function ProductWriteUI(props) {
  return (
    <S.Wrapper>
      <S.Form
        onSubmit={props.handleSubmit(
          props.isEdit ? props.onClickUpdate : props.onClickSubmit
        )}
      >
        <S.PageTitle>{props.isEdit ? "상품 수정" : "상품 등록"}</S.PageTitle>
        <S.MenuWrapper>
          <S.MenuTxt>상품명</S.MenuTxt>
          <Input01
            type="text"
            placeholder="상품명을 작성해주세요."
            register={props.register("name")}
            defaultValue={props.data?.name}
          />
        </S.MenuWrapper>

        <S.MenuWrapper>
          <S.MenuTxt>한줄요약</S.MenuTxt>
          <Input01
            type="text"
            placeholder="한줄요약을 작성해주세요."
            register={props.register("remarks")}
            defaultValue={props.data?.remarks}
          />
        </S.MenuWrapper>
        <S.MenuWrapper>
          <S.MenuTxt>상품설명</S.MenuTxt>
          <S.ReactQuillWrapper>
            <ReactQuill
              placeholder="상품을 소개해주세요"
              onChange={props.onChangeContents}
              theme="snow"
              value={props.getValues("contents") || ""}
            />
          </S.ReactQuillWrapper>
        </S.MenuWrapper>
        <S.MenuWrapper>
          <S.MenuTxt>판매가격</S.MenuTxt>
          <Input01
            type="number"
            placeholder="판매가격을 입력해주세요."
            register={props.register("price")}
            defaultValue={props.data?.price}
          />
        </S.MenuWrapper>
        <S.MenuWrapper>
          <S.MenuTxt>태그입력</S.MenuTxt>
          <div style={{ display: "flex" }}>
            {props.hashArr.map((el, idx) => (
              <S.HashTag key={uuidv4()} onClick={props.onClickDeleteTag(el)}>
                {el}
              </S.HashTag>
            ))}
          </div>
          <Input01
            type="text"
            placeholder="태그 입력하고 스페이스바"
            register={props.register("tags")}
            onKeyUp={props.onKeyUpHash}
          />
        </S.MenuWrapper>

        <S.MenuWrapper>
          <KakaoMap01
            register={props.register}
            setValue={props.setValue}
            defaultValue={props.data?.useditemAddress}
            isEdit={props.isEdit}
          />
        </S.MenuWrapper>

        <S.MenuTxt>사진 첨부</S.MenuTxt>
        <S.ImagesWrapper>
          {props.imageUrls.map((el, index) => (
            <Upload
              key={uuidv4()}
              index={index}
              fileUrl={el}
              onChangeFileUrls={props.onChangeFileUrls}
            />
          ))}
        </S.ImagesWrapper>
        <S.ButtonWrapper>
          <S.CancelBtn type="button" onClick={props.onClickBack}>
            취소
          </S.CancelBtn>
          <S.SubmitBtn type="submit" isActive={props.formState.isValid}>
            {props.isEdit ? "수정하기" : "등록하기"}
          </S.SubmitBtn>
        </S.ButtonWrapper>
      </S.Form>
    </S.Wrapper>
  );
}

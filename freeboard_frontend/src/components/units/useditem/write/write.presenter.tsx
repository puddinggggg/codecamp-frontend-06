import * as S from "./write.styles";

import { IUseditemWriteUIProps } from "./write.types";
import { v4 as uuidv4 } from "uuid";
import Upload from "../../../commons/upload/upload.container";
import DaumPostcode from "react-daum-postcode";
import { useEffect } from "react";
import { Modal } from "antd";

declare const window: typeof globalThis & {
  kakao: any;
};

export default function UseditemWriteUI(props: IUseditemWriteUIProps) {
  useEffect(() => {
    const script = document.createElement("script"); // document에 <script></script> 태그 만들기
    script.src =
      "//dapi.kakao.com/v2/maps/sdk.js?appkey=634a55d2acb7fcf98dd2089c1d179ab5&autoload=false";

    document.head.appendChild(script);

    script.onload = () => {
      var mapContainer = document.getElementById("map"), // 지도를 표시할 div
        mapOption = {
          center: new kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표
          level: 3, // 지도의 확대 레벨
        };

      // 지도를 생성합니다
      var map = new kakao.maps.Map(mapContainer, mapOption);

      // 주소-좌표 변환 객체를 생성합니다
      var geocoder = new kakao.maps.services.Geocoder();

      // 주소로 좌표를 검색합니다
      geocoder.addressSearch(props.address, function (result, status) {
        // 정상적으로 검색이 완료됐으면
        if (status === kakao.maps.services.Status.OK) {
          var coords = new kakao.maps.LatLng(result[0].y, result[0].x);

          // 결과값으로 받은 위치를 마커로 표시합니다
          var marker = new kakao.maps.Marker({
            map: map,
            position: coords,
          });

          // 인포윈도우로 장소에 대한 설명을 표시합니다
          var infowindow = new kakao.maps.InfoWindow({
            content:
              '<div style="width:150px;text-align:center;padding:6px 0;">우리회사</div>',
          });
          infowindow.open(map, marker);

          // 지도의 중심을 결과값으로 받은 위치로 이동시킵니다
          map.setCenter(coords);
        }
      });
    };
  }, []);
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

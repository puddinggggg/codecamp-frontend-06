import { useEffect, useState } from "react";
import DaumPostcode from "react-daum-postcode";
import { Modal } from "antd";
import * as S from "./styles";

declare const window: typeof globalThis & {
  kakao: any;
};

export default function KakaoMap01(props) {
  const [mapLatLng, setMapLatLng] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [searchAddress, setSearchAddress] = useState({
    address: "",
    zipcode: "",
  });
  const mapAddress = searchAddress.address
    ? searchAddress.address
    : props.defaultValue?.address;

  useEffect(() => {
    if (!props.defaultValue) {
      setIsLoaded(true);
    }
  }, [props.defaultValue]);

  useEffect(() => {
    // if (!isLoaded) return;
    // 스크립트를 먼저 받은 후에 dom요소를 그리기
    const script = document.createElement("script");
    // 쿼리 스트링 autoload=false추가
    script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=e02808b7ea7cba14f46cd97d75203140&autoload=false&libraries=services`;
    document.head.appendChild(script);

    script.onload = () => {
      window.kakao.maps.load(() => {
        if (!mapAddress) return;

        const container = document.getElementById("mapcontainer");
        const options = {
          // 지도를 생성할 때 필요한 기본 옵션
          center: new window.kakao.maps.LatLng(37.290891, 127.445535), // 지도의 중심좌표.
          level: 3, // 지도의 레벨(확대, 축소 정도)
        };
        // 지도 Dom 선택해서 지도 생성
        const map = new window.kakao.maps.Map(container, options);

        // 주소-좌표 변환 객체를 생성합니다
        const geocoder = new window.kakao.maps.services.Geocoder();

        // 주소로 좌표를 검색합니다
        geocoder.addressSearch(`${mapAddress}`, (result, status) => {
          // 정상적으로 검색이 완료됐으면
          if (status === window.kakao.maps.services.Status.OK) {
            const coords = new window.kakao.maps.LatLng(
              result[0].y,
              result[0].x
            );

            // 결과값으로 받은 위치를 마커로 표시합니다
            const marker = new window.kakao.maps.Marker({
              map: map,
              position: coords,
            });

            // 마커가 지도 위에 표시되도록 설정합니다
            marker.setMap(map);

            // 지도의 중심을 결과값으로 받은 위치로 이동시킵니다
            map.setCenter(coords);
            setMapLatLng([coords.Ma, coords.La]);
          }
        });
      });
    };
  }, [searchAddress, isLoaded, props.defaultValue]);

  // 우편번호검색 Toggle
  const onToggleModal = () => {
    setIsOpen((prev) => !prev);
  };

  // 주소검색완료
  const onClickAddress = (data) => {
    setSearchAddress((prev) => ({
      ...searchAddress,
      address: data.address,
      zipcode: data.zonecode,
    }));
    setIsOpen(false);
  };

  return (
    <>
      {isOpen && (
        <Modal
          title="주소검색"
          visible={true}
          onOk={onToggleModal}
          onCancel={onToggleModal}
        >
          <DaumPostcode onComplete={onClickAddress} />
        </Modal>
      )}
      <S.Wrapper>
        <S.ContainerLeft>
          <S.MenuTxt>거래 위치</S.MenuTxt>
          {searchAddress.address || props.defaultValue?.address ? (
            <S.MapContainer
              id="mapcontainer"
              style={{ width: 384, height: 252 }}
            ></S.MapContainer>
          ) : (
            <S.MapContainer>
              <S.MapImg src="/images/defaultMap.png" alt="주소를 검색해주세요." />
            </S.MapContainer>
          )}
        </S.ContainerLeft>
        <S.ContainerRight>
          

          <S.AddressHead>
          <S.ZipcodeInput
            type="text"
            placeholder="07250"
            onChange={props.setValue("zipcode", searchAddress?.zipcode)}
            defaultValue={
              searchAddress?.zipcode
                ? searchAddress?.zipcode
                : props.defaultValue?.zipcode || ""
            }
            readOnly
          />
         
            <S.SearchAddress type="button" onClick={onToggleModal}>
              우편번호 검색
            </S.SearchAddress>
            </S.AddressHead>
            <S.AddressInput
            type="text"
            onChange={props.setValue("address", searchAddress?.address)}
            defaultValue={
              searchAddress?.address
              ? searchAddress?.address
              : props.defaultValue?.address || ""
            }
            readOnly
            />
          <S.AddressInput
            type="text"
            {...props.register("addressDetail")}
            placeholder="상세주소를 입력해주세요."
            defaultValue={props.defaultValue?.addressDetail || ""}
          />
        </S.ContainerRight>
      </S.Wrapper>
    </>
  );
}

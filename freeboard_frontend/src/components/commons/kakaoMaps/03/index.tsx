
declare const window: typeof globalThis & {
  kakao: any;
};

export const kakaoMap = (add) => {
  // 스크립트 태그 받고, 기다리고, 실행
  const script = document.createElement("script"); // <script></script> 가 만들어짐
  script.src =
    "//dapi.kakao.com/v2/maps/sdk.js?appkey=33ef8475c110df9774777d3f114027bb&autoload=false&libraries=services";
  document.head.appendChild(script);
  // html head태그에 내가만든 script라는 자식을 추가해줘

  script.onload = () => {
    // 스크립트가 로드가 되면 실행해줘

    window.kakao.maps.load(function () {
      const mapContainer = document.getElementById("map"); // 지도를 표시할 div
      const mapOption = {
        center: new window.kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표
        level: 3, // 지도의 확대 레벨
      };

      // 지도를 생성합니다
      const map = new window.kakao.maps.Map(mapContainer, mapOption);

      // 주소-좌표 변환 객체를 생성합니다
      const geocoder = new window.kakao.maps.services.Geocoder();

      // 주소로 좌표를 검색합니다
      geocoder.addressSearch(add, function (result, status) {
        // 정상적으로 검색이 완료됐으면
        if (status === window.kakao.maps.services.Status.OK) {
          var coords = new window.kakao.maps.LatLng(result[0].y, result[0].x);

          // 결과값으로 받은 위치를 마커로 표시합니다
          const marker = new window.kakao.maps.Marker({
            map: map,
            position: coords,
          });

          // 인포윈도우로 장소에 대한 설명을 표시합니다
          const infowindow = new window.kakao.maps.InfoWindow({
            content:
              '<div style="width:150px;text-align:center;padding:6px 0;">거래희망장소</div>',
          });
          infowindow.open(map, marker);

          // 지도의 중심을 결과값으로 받은 위치로 이동시킵니다
          map.setCenter(coords);
        }
      });
      // 지도 생성 및 객체 리턴
    });
  };
};

export default function MapElPage() {
  // 1. 기본방법
  ["푸딩", "몰리", "애옹", "까뇰레"].forEach((el, index) => {
    console.log("el:", el);
    console.log("index:", index);
  });
  // 2. 매개변수 변경하기
  ["푸딩", "몰리", "애옹", "까뇰레"].forEach((ela, indexxx) => {
    console.log("ela:", ela);
    console.log("indexxx:", indexxx);
  });
  // 3. 함수 선언하기
  ["푸딩", "몰리", "애옹", "까뇰레"].forEach(function (ela2, indexxx2) {
    console.log("ela2:", ela2);
    console.log("indexxx2:", indexxx2);
  });
  // 1. el, index 바꾸기
  ["푸딩", "몰리", "애옹", "까뇰레"].forEach((index, el) => {
    console.log("el:", el);
    console.log("index:", index);
  });
  return <div>el알아보기</div>;
}

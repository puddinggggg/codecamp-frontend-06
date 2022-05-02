import { add } from "../../pages/34-01-jest";

it("Plus Test", () => {
  const result = add(3, 5);
  expect(result).toBe(8);
});
// 테스트 그룹 만들기
// describe("Test Group", () => {
//   it("Test-01", () => {

//   });

//   it("Test-02", () => {

//   });

//   it("Test-03", () => {

//   });
// });

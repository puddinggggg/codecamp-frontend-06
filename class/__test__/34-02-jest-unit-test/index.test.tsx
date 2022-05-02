import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import JestUnitTestPage from "../../pages/34-02-jest-unit-test";
it("rendering test", () => {
  render(<JestUnitTestPage />);

  // 아래처럼 테스트하면 문자 하나만 바뀌어도 실패로 뜬다.
  const myText1 = screen.getByText("푸딩 : 11세");
  expect(myText1).toBeInTheDocument();

  const myText2 = screen.getByText("푸딩 취미 입력:");
  expect(myText2).toBeInTheDocument();

  const myText3 = screen.getByText("푸딩과 놀러가기");
  expect(myText3).toBeInTheDocument();
});

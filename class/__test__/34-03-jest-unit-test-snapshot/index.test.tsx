import { render } from "@testing-library/react";
import JestUnitTestSnapshotPage from "../../pages/34-03-jest-unit-test-snapshot";

it("컴포넌트가 기존과 바뀐 점이 없는지 비교 - snapshot test", () => {
  const result = render(<JestUnitTestSnapshotPage />);
  expect(result.container).toMatchSnapshot();
  // 처음엔 찍은 스냅샷이 없기 때문에 무조건 성공으로 뜬다.
  // 그 다음에 테스트할 때는 하나라도 바뀌면 실패로 뜬다.
});

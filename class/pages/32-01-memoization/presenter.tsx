import { memo } from "react";
function MemoizationPresenterPage() {
  console.log("presenter page rendered");
  return (
    <div>
      <div>=========================</div>
      <h1>PresenterPage</h1>
      <div>=========================</div>
    </div>
  );
}

export default memo(MemoizationPresenterPage);

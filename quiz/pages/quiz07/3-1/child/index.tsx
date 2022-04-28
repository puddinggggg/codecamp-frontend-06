import { memo } from "react";
function MemoizationChildPage() {
  // 3
  console.log("child page rendered");
  return (
    <div>
      <div>=========================</div>
      <div>ChildPage</div>
      <div>=========================</div>
    </div>
  );
}

// export default MemoizationChildPage;
// 4
export default memo(MemoizationChildPage);

import { QuestionCircleOutlined } from "@ant-design/icons";
import styled from "@emotion/styled";
export default function LibraryIconPage() {
  const MyIcon = styled(QuestionCircleOutlined)`
    font-size: 200px;
    color: blue;
  `;
  // antd 아이콘은 width,height가 아니라 font-size로 설정
  return (
    <div>
      <MyIcon />
    </div>
  );
}

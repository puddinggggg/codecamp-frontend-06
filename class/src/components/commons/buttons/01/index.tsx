import styled from "@emotion/styled";
interface IProps {
  isActive: boolean;
  texts?: string;
}
const Btn = styled.button`
  background-color: ${(props: IProps) => (props.isActive ? "yellow" : "")};
`;
export default function Button01(props: IProps) {
  return <Btn isActive={props.isActive}>{props.texts}</Btn>;
}

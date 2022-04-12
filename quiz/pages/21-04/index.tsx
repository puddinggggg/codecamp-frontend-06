import styled from "@emotion/styled";
const DateInput = styled.input``;
export default function DateDot() {
  const onChangeDate = (event) => {
    event.target.value;
    if (event.target.value.length === 4) {
      event.target.value = event.target.value + ".";
    }
    if (event.target.value.length === 7) {
      event.target.value = event.target.value + ".";
    }
  };
  return <DateInput onChange={onChangeDate} type="text" maxLength={10} />;
}

//프레젠터
import {SubmitBtn} from './Product.styles'
export default function ProductWriteUI(props) {

    return (
        <div>
            판매자: <input type="text" onChange={props.onChangeSeller} />
      <br />
      판매물품: <input type="text" onChange={props.onChangeName} />
      <br />
      상세설명: <input type="text" onChange={props.onChangeDetail} />
      <br />
      가격: <input type="number" onChange={props.onChangePrice} /> <br />
      <SubmitBtn onClick={props.isEdit? props.onClickUpdate : props.callGraphqlApi } isActive={props.isActive}>{props.isEdit ? "수정" : "등록"}하기</SubmitBtn>
        </div>
    )}
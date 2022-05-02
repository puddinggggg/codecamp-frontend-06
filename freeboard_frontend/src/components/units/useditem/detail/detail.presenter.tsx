import * as S from "./detail.styles";
import { IUseditemDetailUIProps } from "./detail.types";
import { Tooltip } from "antd";
import DOMPurify from "dompurify";

export default function UseditemDetailUI(props: IUseditemDetailUIProps) {
  // const commentClickAlert = (event: MouseEvent<HTMLDivElement>) => {
  //   alert(event.currentTarget.id + "님의 글입니다.");
  // };
  console.log(props.data?.fetchUseditem.name);
  return (
    <div>
      <S.Wrapper>
        <S.UseditemWrapper>
          <S.Header>
            <S.ProfileWrapper>
              <S.Profile src="/images/profile.png" />
              <S.Info>
                <S.Seller>{props.data?.fetchUseditem?.seller.name}</S.Seller>
                <S.UploadDate>
                  Date : {props.data?.fetchUseditem?.createdAt.substr(0, 10)}
                </S.UploadDate>
              </S.Info>
            </S.ProfileWrapper>
            <S.IconWrapper>
              <S.Link src="/images/link.png" />
              <Tooltip
                placement="topRight"
                title={`${props.data?.fetchUseditem.useditemAddress?.address} ${props.data?.fetchUseditem.useditemAddress?.addressDetail}`}
              >
                <S.Location src="/images/location.png" />
              </Tooltip>
            </S.IconWrapper>
          </S.Header>
          <S.Mid>
            <S.NameWrapper>
              <S.Remarks>{props.data?.fetchUseditem.remarks}</S.Remarks>
              <S.Name>{props.data?.fetchUseditem.name}</S.Name>
              <S.Price>{props.data?.fetchUseditem.price}</S.Price>
            </S.NameWrapper>
            <S.PickWrapper>
              <S.PickImg src="/images/like.png" onClick={props.onClickPick} />
              <S.PickCount>{props.data?.fetchUseditem.pickedCount}</S.PickCount>
            </S.PickWrapper>
          </S.Mid>
          <S.Body>
            <S.ImgWrapper>
              {props.data?.fetchUseditem.images
                ?.filter((el: string) => el)
                .map((el: string) => (
                  <S.Image
                    key={el}
                    src={`https://storage.googleapis.com/${el}`}
                  />
                ))}
            </S.ImgWrapper>

            {typeof window !== "undefined" ? (
              <S.Contents
                dangerouslySetInnerHTML={{
                  __html: DOMPurify.sanitize(
                    props.data?.fetchUseditem.contents
                  ),
                }}
              ></S.Contents>
            ) : (
              <div></div>
            )}

            <S.Tag>태그자리</S.Tag>
          </S.Body>
        </S.UseditemWrapper>
        <S.MapWrapper>
          <div>지도자리</div>
        </S.MapWrapper>
        <S.BottomWrapper>
          <S.Button onClick={props.onClickUseditemList}>목록으로</S.Button>
          <S.Button onClick={props.onClickUseditemEdit}>수정하기</S.Button>
          <S.Button onClick={props.onClickDelete}>삭제하기</S.Button>
          <S.Button
            onClick={props.onClickBuyUseditem(props.data?.fetchUseditem._id)}
          >
            구입하기
          </S.Button>
          {/* <S.Button onClick={props.onClickBuyUseditem}>상품구입</S.Button> */}
        </S.BottomWrapper>
      </S.Wrapper>
    </div>
  );
}

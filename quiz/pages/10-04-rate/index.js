import styled from "@emotion/styled";
import { useState } from "react";
export default function Rating() {
  //  스타일
  const RateWrapper = styled.div`
    display: flex;
  `;
  const StarWrapper = styled.div``;

  const Gold = styled.img``;
  const Gray = styled.img``;
  // js
  const [clickScore, setClickScore] = useState();
  const onClickRating = (event) => {
    setClickScore(Number(event.currentTarget.id));
  };
  return (
    <div>
      <RateWrapper>
        <StarWrapper id="1" onClick={onClickRating}>
          {clickScore >= 1 ? (
            <Gold src="/goldStar.png" />
          ) : (
            <Gray src="/grayStar.png" />
          )}
        </StarWrapper>
        <StarWrapper id="2" onClick={onClickRating}>
          {clickScore >= 2 ? (
            <Gold src="/goldStar.png" />
          ) : (
            <Gray src="/grayStar.png" />
          )}
        </StarWrapper>
        <StarWrapper id="3" onClick={onClickRating}>
          {clickScore >= 3 ? (
            <Gold src="/goldStar.png" />
          ) : (
            <Gray src="/grayStar.png" />
          )}
        </StarWrapper>
        <StarWrapper id="4" onClick={onClickRating}>
          {clickScore >= 4 ? (
            <Gold src="/goldStar.png" />
          ) : (
            <Gray src="/grayStar.png" />
          )}
        </StarWrapper>
        <StarWrapper id="5" onClick={onClickRating}>
          {clickScore >= 5 ? (
            <Gold src="/goldStar.png" />
          ) : (
            <Gray src="/grayStar.png" />
          )}
        </StarWrapper>
      </RateWrapper>
      {clickScore && `${clickScore}점`}
    </div>
  );
}

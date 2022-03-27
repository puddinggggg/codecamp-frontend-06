//상세보기페이지
import {useQuery, gql} from "@apollo/client"
import { useRouter } from "next/router";

const FETCH_BOARD = gql`
query fetchBoard($number: Int){
    fetchBoard(number:$number){
    number
    writer
    title
    contents
  }}
`;

export default function StaticRoutedPage(){
    const router = useRouter();

    const {data} = useQuery(FETCH_BOARD,{
        variables:{number: Number(router.query.mynumber)}});
    
console.log(data);

const onClickMove = ()=>{
router.push(`/09-01-boards/${router.query.mynumber}/edit`)
}

    return(
        <div>
        <div>{data?.fetchBoard.number}번 게시글입니다</div>
        <div>작성자:{data?.fetchBoard.writer}</div>
        <div>제목:{data?.fetchBoard.title}</div>
        <div>내용:{data?.fetchBoard.contents}</div>
        <button onClick={onClickMove}>수정하기</button>
        {/* data &&  <- 조건부 랜더링 */}
        {/* data? <- 같은 조건부 랜더링인데 더 짧음. optional-chaining */}
        </div>
    )
}
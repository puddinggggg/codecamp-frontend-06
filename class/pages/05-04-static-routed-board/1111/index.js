import {useQuery, gql} from "@apollo/client"

const FETCH_BOARD = gql`
query fetchBoard($number:Int){
    fetchBoard(number:$number){
    number
    writer
    title
    contents
  }}
`;

export default function StaticRoutedPage(){
    const {data} = useQuery(FETCH_BOARD,{variables:{number: 1111}});
    
console.log(data);

    return(
        <div>
        <div>{data?.fetchBoard.number}번게시글 어서오고</div>
        <div>작성자:{data?.fetchBoard.writer}</div>
        <div>제목:{data?.fetchBoard.title}</div>
        <div>내용:{data?.fetchBoard.content}</div>
        {/* data &&  <- 조건부 랜더링 */}
        {/* data? <- 같은 조건부 랜더링인데 더 짧음. optional-chaining */}
        </div>
    )
}
import {useQuery, gql} from "@apollo/client"
import styled from "@emotion/styled"

const FETCH_BOARDS = gql`
    query fetchBoards{
        fetchBoards{
            writer
            title
            contents
            number
        }
    }
`

const MyRow = styled.div`
    display: flex;
    flex-direction: row;
`

const MyColumn = styled.div`
    width: 25%;

`
export default function StaticRoutedPage() {
    const{data} = useQuery(FETCH_BOARDS)

    return(
        <div>
            {/* <div>el.number}번 게시글에 오신 것을 환영합니다.</div>
            <div>작성자: el.writer}</div>
            <div>제목: el.title}</div>
            <div>내용: el.contents}</div> */}
            {data?.fetchBoards.map((el) =>
                <MyRow key={el.number}>
                    <MyColumn><input type="checkbox"/></MyColumn> 
                    <MyColumn>{el.number}</MyColumn>
                    <MyColumn>{el.writer}</MyColumn>
                    <MyColumn>{el.title}</MyColumn>
                </MyRow>
            )}
        </div>
       
    
    )

}

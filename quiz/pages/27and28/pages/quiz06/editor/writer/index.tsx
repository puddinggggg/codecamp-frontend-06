import 'react-quill/dist/quill.snow.css';
import dynamic from 'next/dynamic'

import {useForm} from 'react-hook-form'
import { gql, useMutation } from '@apollo/client';
import { Modal } from 'antd';
import { useRouter } from 'next/router';

const ReactQuill = dynamic(()=> import("react-quill"),{ssr: false}) // ssr: false는 서버사이드랜더링을 하지 않겠다는 뜻
const CREATE_BOARD = gql`
mutation createBoard($createBoardInput: CreateBoardInput!){
  createBoard(createBoardInput: $createBoardInput){
_id
  }
}
`;

export default function WebEditorPage (){
  const router = useRouter();
  const [createBoard] = useMutation(CREATE_BOARD)


  const {register, handleSubmit, setValue, trigger} = useForm({
    mode: "onchange",
    // 레지스터로 등록하지 않고 강제로 값을 넣어주는 기능
    
  });
  
  
  const onChangeContents =(value : string)=>{
    // 라이브러리이기 때문에 event가 발생하는 것이 아니라 바로 value가 들어옴
    console.log(value)
    // 강제로 빈값 설정
    setValue("contents", value ==="<p><br></p>" ? "" : value);
  //  onChane 됐다고 react-hook-form에 알려주는 기능
  trigger("contents")    
}

const onClickSubmit = async (data)=>{
if(!(data.writer&&data.title && data.password && data.contents)){
 alert("모두 입력해야 함")  
 return;
}
// 뮤테이션
try{
const result = await createBoard({
variables:{
  createBoardInput:{
    writer:data.writer,
    password:data.password,
    title:data.title,
    contents:data.contents,
  }  }
})
router.push(`/27and28/pages/quiz06/editor/detail/${result.data.createBoard._id}`)
}catch(error){
Modal.error({content:error.message})
}
}
  return(
    <form onSubmit={handleSubmit(onClickSubmit)}>
      {/* handleSubmit으로 감싸줘야 입력한 데이터들이 넘어온다 */}
   작성자: <input type="text" {...register("writer")}/>
   <br/>
   비밀번호: <input type="password" {...register("password")} />
   <br/>
   제목: <input type="text" {...register("title")}/>
   <br/>
    내용: 
    {/* { typeof window !== undefined &&(<ReactQuill onChange={onChangeContents}/>)} */}
    <ReactQuill onChange={onChangeContents}/>
   <br/>
   <button>등록하기</button>
    </form>
  )
}
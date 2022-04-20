// import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import dynamic from 'next/dynamic'

import {useForm} from 'react-hook-form'

const ReactQuill = dynamic(()=> import("react-quill"),{ssr: false}) // ssr: false는 서버사이드랜더링을 하지 않겠다는 뜻

export default function WebEditorPage (){
  const {register, handleSubmit, setValue, trigger} = useForm({
    mode: "onchange",
    // 레지스터로 등록하지 않고 강제로 값을 넣어주는 기능
    
  });
  
  
  const onChangeContents =(value : string)=>{
    // 라이브러리이기 때문에 event가 발생하는 것이 아니라 바로 value가 들어옴
    console.log(value)
    setValue("contents", value ==="<p><br></p>" ? "" : value);
  //  onChane 됐다고 react-hook-form에 알려주는 기능
  trigger("contents")    
}

  return(
    <div>
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
    </div>
  )
}
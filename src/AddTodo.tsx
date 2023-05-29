import React,{useState,useRef} from 'react'
import { ButtonStyle,AddDiv,AddInput } from './styles'

type props={
    dispatch:React.Dispatch<React.SetStateAction<any[]>>
}

export function AddTodo({dispatch}:props):JSX.Element{
    const inputRef: React.MutableRefObject<any> = useRef(null)
    const [isEdit,setEdit]=useState(false)
    return (<AddDiv><ButtonStyle onClick={()=>setEdit(prev=>!prev)}>Add</ButtonStyle>
   {isEdit?<AddInput ref={inputRef} onKeyUp={(e)=>{
    if (e.code=="Enter") dispatch(prev=>[...prev,inputRef.current.value])
   }} type="text"/>:null}</AddDiv>)
}
import React,{useState} from "react";
import { AppDiv,ChildDiv,StyledH,Delete } from "./styles";
import { CheckBox } from "./CheckBox";
import { Header } from "./Header";
import { AddTodo } from "./AddTodo";


export function App(): JSX.Element {
    const [todos,setTodos]=useState(["Hello world","Turning"])
    return (<div>
        <Header/>
        <AppDiv>{todos.map((todo,i)=>(
            <ChildDiv> <CheckBox/> <StyledH>{todo}</StyledH><Delete onClick={()=>setTodos(prev=>[...prev.filter((_,ind)=> i!==ind)])}>&#x274C;</Delete></ChildDiv>
        ))}</AppDiv>
    <AddTodo dispatch={setTodos}/>
    </div>);
}
import React,{useState} from "react";
import { AppDiv,ChildDiv,StyledH } from "./styles";
import { CheckBox } from "./CheckBox";
import { Header } from "./Header";
import { AddTodo } from "./AddTodo";


export function App(): JSX.Element {
    const [todos,setTodos]=useState(["Hello world","Turning"])
    return (<div>
        <Header/>
        <AppDiv>{todos.map(todo=>(
            <ChildDiv> <CheckBox/> <StyledH>{todo}</StyledH></ChildDiv>
        ))}</AppDiv>
    <AddTodo dispatch={setTodos}/>
    </div>);
}
import React from "react";
import { AppDiv,ChildDiv } from "./styles";
type AppProps={
    message:string,
    another:string
}
export function App({message,another}:AppProps): JSX.Element {
    return (<AppDiv><ChildDiv >{message}</ChildDiv>
    <ChildDiv>{another}</ChildDiv></AppDiv>);
}
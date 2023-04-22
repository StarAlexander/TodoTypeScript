import React from "react";
import { AppDiv,ChildDiv,StyledH } from "./styles";
import { CheckBox } from "./CheckBox";

type AppProps={
    message:string,
    another:string
}
export function App({message,another}:AppProps): JSX.Element {
    return (<AppDiv><ChildDiv> <CheckBox/> <StyledH>{message}</StyledH></ChildDiv>
    <ChildDiv><CheckBox/><StyledH>{another}</StyledH></ChildDiv></AppDiv>);
}
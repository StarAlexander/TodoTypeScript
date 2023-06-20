import styled from "styled-components";

export const AppDiv=styled.div`
position:absolute;
width:45rem;
height:20rem;
box-shadow:0px 5px 30px rgba(0,0,0,0.2);
top:8rem;
left:20rem;
align-items:center;
display:block;  
overflow:scroll;
-ms-overflow-style:none;
scrollbar-width:none;
&::-webkit-scrollbar{
    display:none;
}
`
export const ButtonStyle=styled.button`
    border-radius:5px;
    border:none;
    cursor:pointer;
    transition:all 0.2s ease-out;
    &:hover{
        background-color:darkblue;
        color:white;
    }
    width:6rem;
    height:2rem;
    background-color:lightblue;
`
export const  ChildDiv=styled.div`
    position:relative;
    width:99.5%;
    display:flex;
    font-size:1.5rem;
    border:1px solid black;
    
`
export const AddInput=styled.input`
    width:10rem;    
    border:2px solid black;
    border-radius:3px;
`
export const AddDiv=styled.div`
     position:absolute;
    left:20rem;
    top:30rem;
    display:flex;
    width:45rem;
    justify-content:space-between;

`
export const StyledH=styled.p`
    position:relative;
    font-size:1.2rem;
    left:3%;
    width:6rem;


`
export const Delete=styled.button`
    
    position:relative;
    width:3rem;
    left:70%;
    cursor:pointer;
    transition: all 0.3s ease-in-out;
    height:1.5rem;
    border-radius:10px;
    top:1.1rem;

`
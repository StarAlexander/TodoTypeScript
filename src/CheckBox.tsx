import React,{useState} from "react";

type props={
    index:number
    corr:string
    dispatch:React.Dispatch<React.SetStateAction<(string | number)[][]>>
}
export function CheckBox({dispatch,corr,index}:props):JSX.Element{
    const [checked,setChecked]=useState(false)
    return (<div style={{position:'relative', left:'0px', width:'4rem'}}><input onChange={()=>{
       setChecked(prev=>!prev)
        dispatch(prev=>!checked?[...prev,[corr,index]]:[...prev.filter((el)=>el[0]!==corr || el[1]!==index)])}}
         type="checkbox" style= {{position:'relative',  height:'2rem', width:'1rem', left:'1.3rem', top:'0.75rem', paddingTop:'1rem'}} /></div>)
}


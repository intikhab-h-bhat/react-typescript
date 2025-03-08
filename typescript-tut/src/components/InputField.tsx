
import React from "react";
import "./styles.css"

interface Props{
    todo:string
    setTodo:React.Dispatch<React.SetStateAction<string>>
}


 const InputField=({todo,setTodo}:Props)=>{

    return(
        <form className="input">
            <input type="text" placeholder="Enter the Text" 
            className="input-text" value={todo} 
            onChange={(e)=>setTodo(e.target.value)}/>
            <input type="submit" value="Go" className="submit-input"/>
        </form>
    )
}

export default InputField
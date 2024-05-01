import CustomInput from "./customInput";
import {useRef, useState} from "react";

export default function FormForwardRefHook() {
    const [input, setInput] = useState('')
    const inputRef = useRef()


    const handleChange = () => {
        console.log("input ref : ", inputRef.current)
        const value = inputRef.current.value
        if (!value) {
            inputRef.current.focus()
        } else {
            alert(value)
        }
    }

    return <div className={'container'}>
        <h1>Forward ref</h1>
        <CustomInput type={'text'}
                     value={input}
                     ref={inputRef}
                     onChange={(e) => setInput(e.target.value)}/>
        <hr/>
        <button onClick={handleChange}>Submit</button>
    </div>
}

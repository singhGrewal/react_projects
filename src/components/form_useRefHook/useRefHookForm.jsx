import {useRef, useState} from "react";
import './styles.css'

export default function UseRefHookForm() {

    const [value, setValue] = useState('')
    const [valueTwo, setValueTwo] = useState('')

    const emailRef = useRef()
    const passwordRef = useRef()

    function handleSubmit(e) {
        e.preventDefault()
        console.log({
            "emailRef": emailRef.current.value,
            "passwordRef": passwordRef.current.value
        })
    }

    const handleChange = (e) => {
        setValue(e.target.value)
    }

    function handleChangeTwo(e) {
        setValueTwo(e.target.value)
    }

    return <div className={'container'}>
        <div>
            <h1> useRef Hooks</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor={"email"}>Email : </label>
                    <input ref={emailRef} type={'email'} id={'email'}/>
                </div>
                <div>
                    <label htmlFor={"email"}>Password : </label>
                    <input ref={passwordRef} type={'password'} id={'password'}/>
                </div>
                <div>
                    <button type={'submit'}>Submit</button>
                </div>
            </form>
        </div>
        {/*<div>*/}
        {/*    <h2>Input filed using Arrow fun</h2>*/}
        {/*    <input type={'text'} value={value} onChange={handleChange}/>*/}
        {/*    <p>{value}</p>*/}
        {/*</div>*/}
        {/*<div>*/}
        {/*    <h2>Input filed using fun</h2>*/}
        {/*    <input type={'text'} value={valueTwo} onChange={(e) => handleChangeTwo(e)}/>*/}
        {/*    <p>{valueTwo}</p>*/}
        {/*</div>*/}
    </div>
}

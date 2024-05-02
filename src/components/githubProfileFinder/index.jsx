import {useRef, useState} from "react";
import './styles.css'
import User from "./user";

export default function GithubProfileFinder() {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState(null)

    const nameRef = useRef()

    const fetchData = async (userName) => {
        try {
            setLoading(true);
            const url = `https://api.github.com/users/${userName}`
            const response = await fetch(url)
            const data = await response.json()
            setData(data)
            setLoading(false);
        } catch (e) {
            //TODO
            console.log(e)
        }
    }

    const handleFetchUser = () => {
        const userName = nameRef.current.value
        if (userName) {
            fetchData(userName)
            nameRef.current.value = ''
        } else {
            nameRef.current.focus()
        }

    }

    return (
        <div className="github-profile-container">
            <div className="input-wrapper">
                <input type={'text'} ref={nameRef}/>
                <button onClick={handleFetchUser}>Submit</button>
            </div>
            {data !== null ? <User user={data}/> :
                <p className={'emptyDetails'}>{loading ? 'Loading data! Please wait' : 'Please provide Github profile username'}</p>}
        </div>
    )
}

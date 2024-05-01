import {useEffect, useState} from "react";
import './style.css'

export default function ScrollIndicator({url}) {

    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [scrollPercentage, setScrollPercentage] = useState("");

    const fetchData = async (getUrl) => {
        try {
            setLoading(true);
            const response = await fetch(getUrl);
            const data = await response.json();

            if (data && data.products && data.products.length > 0) {
                setData(data.products)
                setLoading(false);
            }
        } catch (e) {
            setErrorMessage(e.message);
            setLoading(false);
        }
    }


    useEffect(() => {
        fetchData(url);
    }, [url]);

    const handleScrollEvent = () => {
        // console.log({
        //     "1" : document.body.scrollTop,
        //     "2" : document.documentElement.scrollTop,
        //     "3" : document.documentElement.scrollHeight,
        //     "4" : document.documentElement.clientHeight,
        // })

        const totalScrolled = document.body.scrollTop || document.documentElement.scrollTop
        const totalPageHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight

        setScrollPercentage((totalScrolled / totalPageHeight) * 100)

    }

    useEffect(() => {
        window.addEventListener("scroll", handleScrollEvent)

        return () => {
            window.removeEventListener("scroll", () => handleScrollEvent)
        }
    }, [])

    if(errorMessage){
        return <p>Error : ${errorMessage}</p>
    }

    if (loading) {
        return <p>Loading data...</p>
    }

    return (
        <div className='container'>
            <div className="top-container">
                <h1>Custom Scroll Indicator</h1>
                <div className="scroll-progress-bar">
                    <div
                        className="current-scroll-bar"
                        style={{ width: `${scrollPercentage}%` }}
                    ></div>
                </div>
            </div>
            <div className="data-container">
                {data && data.length > 0
                    ? data.map((dataItem) => <p>{dataItem.title}</p>)
                    : null}
            </div>
        </div>
    );

}

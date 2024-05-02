import {useState} from "react";

export default function Tabs({tab, onChange, handleCustom}) {
    const [currentIndex, setCurrentIndex] = useState(0)

    const handleTabToggle = (index) => {
        setCurrentIndex(index)
        onChange(index)

        // E.g., of sending extra data
        handleCustom({
            index,
            "click": true
        })
    }

    return (
        <div className="wrapper">
            <div className="heading">
                {tab && tab.length > 0 ? tab.map((el, index) => {
                    return (
                        <div className={`tab-item ${currentIndex === index ? "active" : ""}`}
                             key={index}
                             onClick={() => handleTabToggle(index)}>
                            <span className="label">{el.title}</span>
                        </div>
                    )
                }) : null}
            </div>
            <div className="content" style={{color: "red"}}>
                {tab[currentIndex] && tab[currentIndex].content}
            </div>
        </div>
    )

}

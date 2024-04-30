import data from './data'
import {useState} from "react";
import './styles.css'

export default function Accordion() {
    const [selected, setSelected] = useState(null)
    const [multiSelect, setMultiSelect] = useState([])
    const [enableMultiSelection, setEnableMultiSelection] = useState(false)

    function handleSelected(getCurrentID) {
        if (enableMultiSelection) {
            let newArray = [...multiSelect]
            if (newArray.includes(getCurrentID)) {
                newArray = newArray.filter(id => id !== getCurrentID);
            } else {
                newArray.push(getCurrentID)
            }
            setMultiSelect(newArray)
        }
        setSelected(getCurrentID === selected ? null : getCurrentID)
    }

    function showAnswer(item) {
        return (enableMultiSelection ? multiSelect.includes(item.id) : selected === item.id) ?
            <div className={"content"}>{item.answer}</div> : null
    }

    return (
        <div className="wrapper">
            <button
                onClick={() => setEnableMultiSelection(!enableMultiSelection)}>
                {enableMultiSelection ? 'Disable multiple section' : ' Enable multiple section'}
            </button>
            <div className="accordion">
                {
                    data && data.length > 0 ?
                        data.map(item => (
                            <div className={"item"}>
                                <div className={"title"} onClick={() => handleSelected(item.id)}>
                                    <h3>{item.question}</h3>
                                    <span>+</span>
                                </div>
                                {showAnswer(item)}
                            </div>
                        )) : <div>No data found</div>
                }
            </div>
        </div>
    )
}

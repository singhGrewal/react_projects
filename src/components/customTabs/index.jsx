import Tabs from "./tabs";
import './styles.css'

export default function CustomTabs() {
    const tabs = [
        {title: 'Tab 1', content: <div>Content for Tab 1</div>},
        {title: 'Tab 2', content: <div>Content for Tab 2</div>},
        {title: 'Tab 3', content: <div>Content for Tab 3</div>}
    ];

    const handleChange = (index) => {
        console.log("handleChange", index)
    }

    const handleCustom = (index) =>{
        console.log("handleTest", index)
    }

    return (
        <div className='container'>
            <h1>Custom Tab Example</h1>
            <Tabs tab={tabs} onChange={handleChange} handleCustom={handleCustom}/>
        </div>
    )
}

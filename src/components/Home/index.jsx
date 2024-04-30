import './styles.css'
import {useNavigate} from 'react-router-dom';

const components = [
    {
        label: "Accordion",
        pathTo: "/accordion",
        description: ''
    },
    {
        label: "Random Colors",
        pathTo: "/random_colors",
        description: ''
    }, {
        label: "Image Slider",
        pathTo: "/image_slider",
        description: ''
    }, {
        label: "Star Rating",
        pathTo: "/star_rating",
        description: ''
    }, {
        label: "Tree View",
        pathTo: "/tree_view",
        description: ''
    }, {
        label: "Qr code Generator",
        pathTo: "/qr_code_generator",
        description: ''
    }]

export default function Home() {
    let navigate = useNavigate()

    function handleComponent(path) {
        navigate(path);
    }

    return <div className={"cardLayout"}>
        {
            components.map(({label, description, pathTo}) => {
                return <div className="card" onClick={() => handleComponent(pathTo)}>
                    <div className="card-content">
                        <h2 className="card-title">{label}</h2>
                        {description ? <p className="card-text">{description}</p> : null}
                    </div>
                </div>
            })
        }
    </div>
}

import './App.css';
import Accordion from "./components/accordion";
import RandomColors from "./components/randomColors";
import StarRating from "./components/starRating";
import ImageSlider from "./components/imageSlider";
import TreeView from "./components/treeView";
import {Route, Routes} from "react-router-dom";
import Home from "./components/Home";

function App() {
    return (
        <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route exact path="/accordion" element={<Accordion/>}/>
            <Route exact path="/random_colors" element={<RandomColors/>}/>
            <Route exact path="/star_rating" element={<StarRating/>}/>
            <Route exact path="/image_slider"
                   element={<ImageSlider url={'https://picsum.photos/v2/list'} page={1} limit={5}/>}/>
            <Route exact path="/tree_view" element={<TreeView/>}/>
        </Routes>
    );
}

export default App;

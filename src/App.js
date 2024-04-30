import './App.css';
import Accordion from "./components/accordion";
import RandomColors from "./components/randomColors";
import StarRating from "./components/starRating";
import ImageSlider from "./components/imageSlider";
import TreeView from "./components/treeView";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./components/Home";

function App() {
    return (
        <BrowserRouter>
            <div className="">
                <Routes>
                    <Route exact path="/" element={<Home/> } />
                    <Route exact path="/accordion" element={<Accordion/> } />
                    <Route exact path="/random_colors" element={<RandomColors/> } />
                    <Route exact path="/star_rating" element={<StarRating/> } />
                    <Route exact path="/image_slider" element={<ImageSlider/> } />
                    <Route exact path="/tree_view" element={<TreeView/> }/>
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;

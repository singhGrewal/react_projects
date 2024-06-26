import './App.css';
import Accordion from "./components/accordion";
import RandomColors from "./components/randomColors";
import StarRating from "./components/starRating";
import ImageSlider from "./components/imageSlider";
import TreeView from "./components/treeView";
import {Navigate, Route, Routes} from "react-router-dom";
import Home from "./components/Home";
import QrCodeGenerator from "./components/qr-code-generator";
import UseRefHookForm from "./components/formUseRefHook/useRefHookForm";
import FormForwardRefHook from "./components/formForwardRefHook";
import LightDarkMode from "./components/lightDarkMode";
import ScrollIndicator from "./components/scrollIndicator";
import CustomTabs from "./components/customTabs";
import Layout from "./components/layout/Layout";
import GithubProfileFinder from "./components/githubProfileFinder";
import TickTacToe from "./components/tickTacToe";

function App() {
    return (
        <Layout>
            <Routes>
                <Route exact path="/" element={<Home/>}/>
                <Route exact path="/accordion" element={<Accordion/>}/>
                <Route exact path="/random_colors" element={<RandomColors/>}/>
                <Route exact path="/star_rating" element={<StarRating/>}/>
                <Route exact path="/image_slider"
                       element={<ImageSlider url={'https://picsum.photos/v2/list'} page={1} limit={5}/>}/>
                <Route exact path="/tree_view" element={<TreeView/>}/>
                <Route exact path="/qr_code_generator" element={<QrCodeGenerator/>}/>
                <Route exact path="/useRefHookForm" element={<UseRefHookForm/>}/>
                <Route exact path="/formForwardRefHook" element={<FormForwardRefHook/>}/>
                <Route exact path="/lightDarkMode" element={<LightDarkMode/>}/>
                <Route exact path="/scrollIndicator"
                       element={<ScrollIndicator url={"https://dummyjson.com/products?limit=100"}/>}/>
                <Route exact path="/customTabs" element={<CustomTabs/>}/>
                <Route exact path="/githubProfileFinder" element={<GithubProfileFinder/>}/>
                <Route exact path="/tickTacToe" element={<TickTacToe/>}/>
                <Route path="*" element={<Navigate replace to="/"/>}/>
            </Routes>
        </Layout>
    );
}

export default App;

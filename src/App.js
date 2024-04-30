import './App.css';
import Accordion from "./components/accordion";
import RandomColors from "./components/randomColors";
import StarRating from "./components/starRating";
import ImageSlider from "./components/imageSlider";
import TreeView from "./components/treeView";
 import menus from './components/treeView/data'

function App() {
  return (
    <div className="App">
     {/*<Accordion/>*/}
     {/*   <RandomColors/>*/}
     {/*   <StarRating/>*/}
     {/*   <ImageSlider url={'https://picsum.photos/v2/list'} page ={1}limit={5} />*/}
        <TreeView menus={menus}/>
    </div>
  );
}

export default App;

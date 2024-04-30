import MenuList from "./MenuList";
import './styles.css'
import menus from "./data";
export default function TreeView() {
    console.log("TreeView")
    return (
        <div className="tree-view-container">
            <MenuList list={menus} />
        </div>
    );
}

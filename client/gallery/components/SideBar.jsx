import 'styles/sideBar.css';
import InfoBox from './InfoBox';
import NavMenu from './NavMenu';
import NavBar from './NavBar';

export default function SideBar({ left, top, brief, visible, nodes, onNavBarClick }) {
    function stopBubble(e) {
        e.stopPropagation();
    }
    return (
        <div className="sideBarWrapper clearfix">
            <div
                className="sideBar"
                onClick={stopBubble}
                style={{ left, top }}>
                <NavBar
                    nodes={nodes}
                    onNavBarClick={onNavBarClick} />
                <InfoBox
                    brief={brief}
                    isShow={visible === 'InfoBox'} />
                <NavMenu
                    isShow={visible === 'NavMenu'} />
            </div>
        </div >
    )
}
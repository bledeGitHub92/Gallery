import 'styles/navBar.css';

export default function NavBar({ onNavBarClick, nodes }) {
    var LiNode = nodes.map(
        ({ text, flag }, index) => (
            <li
                key={flag + index}
                data-flag={flag}>
                {text}
            </li>
        )
    )
    function navBarClick(e) {
        e.stopPropagation();
        onNavBarClick(
            $(e.target).data('flag')
        );
    }
    return (
        <ul
            className="navBar"
            onClick={navBarClick}>
            {LiNode}
        </ul>
    )
}
import 'styles/navBar.css';

export default function NavBar(props) {
    function tips(e) {
        var flag = $(e.target).data('flag');
        var index = props.index;
        var nums = props.nums;

        switch(flag) {
            case 'prev':
                if (--index < 0) index = nums + index;
                break;
            case 'next':
                if (++index >= nums) index = nums - index;
                break;
        }
        props.onImgChange(index);
    }
    return (
        <ul
            className="navBar"
            onClick={tips}
        >
            <li data-flag="prev">&lt;-</li>
            <li data-flag="next">-&gt;</li>
            <li data-flag="info">i</li>
        </ul>
    )
}
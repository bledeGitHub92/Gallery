import 'styles/thumbNail.css';
import { Link } from 'react-router-dom';

export default function ThumbNail({ path }) {
    return (
        <div
            className="thumbNailBox"
            style={{backgroundImage:`url(${path})`}}>
            <Link to="/deep">去看看 &gt;&gt;</Link>
        </div>
    )
}
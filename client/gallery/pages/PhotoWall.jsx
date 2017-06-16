import 'styles/photoWall.css';
import 'whatwg-fetch';
import { connect } from 'react-redux';

export default class PhotoWall extends React.Component {
    render() {
        var { image, toggleSideBar } = this.props;
        return (
            <div
                onClick={toggleSideBar}
                className="photoWall"
                style={{ backgroundImage: `url(${image})` }}>
            </div>
        )
    }
    componentWillMount() {
        var { changeBrief, changeTop } = this.props;
        $('body').css('overflow', '');
        changeTop(null, '0');
        // fetch('http://10.10.100.166:1323/index')
        fetch('/brief')
            .then(res => res.json())
            .then(json => {
                changeBrief(json)
            }).catch(e => { console.log(e) })
    }
}
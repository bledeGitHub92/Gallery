import NavBar from './NavBar';
import 'styles/layout.css';
import 'styles/galleryBox.css';
import bridge from '../assets/images/bridge.jpg';
import pyramid from '../assets/images/pyramid.jpg';
import dam from '../assets/images/dam.jpg';

export default class Gallery extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            index: 0,
            paths: [bridge, pyramid, dam]
        }
        this.handleImgChange = this.handleImgChange.bind(this);
    }
    componentDidMount() {
    }
    handleImgChange(index) {
        if (index !== this.state.index) {
            console.log('indexed');
            this.setState({ index })
        }
    }
    render() {
        return (
            <div
                className="galleryBox"
                style={{ backgroundImage: `url(${this.state.paths[this.state.index]})` }}
            >
                <NavBar
                    onImgChange={this.handleImgChange}
                    nums={this.state.paths.length}
                    index={this.state.index}
                >
                </NavBar>
            </div>
        )
    }
}
import 'styles/navMenu.css';
import { Link, Route } from 'react-router-dom';

export default class NavMenu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            path: '',
            navLayout: [],
            selectNavs: [],
        }
        this.goDeep = this.goDeep.bind(this);
    }
    render() {
        var { isShow } = this.props;
        var display = isShow ? 'block' : 'none';
        var MenuNode = this.state.selectNavs.map(({ url, text, back }, index) => {
            var node;
            if (url) {
                node = (
                    <li key={index}>
                        <Link to={url}>{text}</Link>
                        <span className="move"></span>
                    </li>
                )
            } else {
                node = (
                    <li key={index}>
                        <span data-back={back}>{text}</span>
                    </li>
                )
            }
            return node;
        });
        return (
            <div className="navMenu"
                style={{ display }}>
                <h3>索引</h3>
                <ul onClick={this.goDeep}>
                    {this.state.path && <li><span data-back="1">返回</span></li>}
                    {MenuNode}
                </ul>
            </div>
        )
    }
    goDeep(e) {
        var $target = $(e.target);
        var isBack = $target.data('back');
        var filterText = $target.text();
        var path = this.state.path;
        var selectNavs;

        if ($target.is('a')) return;

        if (isBack) {
            selectNavs = this.state.navLayout;
            path = path.split('/');
            path.pop();
            path.forEach(path => {
                if (!path) return;
                [{ subs: selectNavs }] = selectNavs.filter(
                    ({ text }) => text === path
                )
            });
            path = path.join('/');
        }
        if (!isBack) {
            path += `/${filterText}`;
            var [{ subs }] = this.state.selectNavs.filter(
                ({ text }) => text === filterText
            );
            selectNavs = subs;
        }
        this.setState({ selectNavs, path });
    }
    componentWillMount() {
        // fetch('http://10.10.100.166:1323/list')
        fetch('/paths')
            .then(res => res.json())
            .then(json => {
                this.setState({ navLayout: json, selectNavs: json })
            }).catch(e => { console.log(e) });
    }
}
import { connect } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
const history = createHistory();
const middleware = routerMiddleware(history);

// reducers
import * as reducers from './redux/reducers';
// actions
import { addImg, setImgPos } from './redux/actions';
//组件
import NavBar from './components/NavBar';
import SideBar from './components/SideBar';
import PhotoWall from './pages/PhotoWall';
import WafterFall from './pages/WafterFall';
import Inbox from './pages/Inbox';
import TopNav from './components/TopNav';

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            left: '-440px',
            top: '0',
            visible: 'InfoBox',
            brief: [
                { path: '', dt: '', dd: '', p: '' },
            ],
            navBarLiNodes: [
                { text: 'i', flag: 'info' },
                { text: '<-', flag: 'prev' },
                { text: '->', flag: 'next' },
            ]
        }
        this.handleNavBarClick = this.handleNavBarClick.bind(this);
        this.toggleSideBar = this.toggleSideBar.bind(this);
        this.changeBrief = this.changeBrief.bind(this);
        this.changeTop = this.changeTop.bind(this);
    }
    render() {
        var { index, location } = this.props;
        var { navBarLiNodes, brief, visible, left, top } = this.state;
        return (
            <ConnectedRouter history={history}>
                <div>
                    <TopNav
                        location={location}
                        onTopNavClick={this.toggleSideBar} />
                    <SideBar
                        nodes={navBarLiNodes}
                        onNavBarClick={this.handleNavBarClick}
                        brief={brief[index]}
                        visible={visible}
                        top={top}
                        left={left} />
                    <Switch>
                        <Route exact path="/" render={props => {
                            props = {
                                ...props,
                                image: brief[index].path,
                                changeBrief: this.changeBrief,
                                toggleSideBar: this.toggleSideBar,
                                changeTop: this.changeTop,
                            }
                            return (<PhotoWall {...props} />)
                        }} />
                        <Route path="/waterfall/:id" render={props => {
                            props = {
                                ...props,
                                onPinViewClick: this.toggleSideBar,
                                changeBrief: this.changeBrief,
                                changeTop: this.changeTop,
                            }
                            return (<WafterFall {...props} />)
                        }} />
                    </Switch>
                </div>
            </ConnectedRouter>
        )
    }
    handleNavBarClick(flag) {
        var { index } = this.props;
        var { brief: { length: nums } } = this.state;
        switch (flag) {
            case 'prev': if (--index < 0) index = nums + index; break;
            case 'next': if (++index >= nums) index = nums - index; break;
            case 'info': return this.changeSideBar();
            case 'toggle': return this.toggleSideBar();
        }
        this.changeImg(index);
    }
    changeSideBar() {
        this.setState(prevState => ({
            visible: prevState.visible === 'InfoBox' ? 'NavMenu' : 'InfoBox'
        }));
    }
    changeImg(index) {
        var { dispatch } = this.props;
        dispatch(setImgPos(index));
    }
    toggleSideBar(e, newTop = '0') {
        this.setState(({ left, top }) => {
            const condi = left === '0';
            return {
                left: condi ? '-440px' : '0',
                top: condi ? newTop : top
            }
        });
    }
    changeTop(e, top = '0') {
        this.setState({ top });
    }
    changeBrief(brief, callback) {
        var { dispatch } = this.props;
        dispatch(setImgPos(0));
        this.setState({ brief }, callback);
    }
}

// 基于全局 state ，哪些是我们想注入的 props ?
// 注意：使用 https://github.com/faassen/reselect 效果是更佳。
// 包装 component ，注入 dispatch 和 state 到其默认的 connect(select)(App) 中；
export default Main = connect(
    ({ index, router: { location } }) => ({
        index, location
    })
)(Main);

export const store = createStore(
    combineReducers({
        ...reducers,
        router: routerReducer
    }),
    applyMiddleware(middleware)
);
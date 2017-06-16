import 'styles/waterFall.css';
import { connect } from 'react-redux';
import WaterFallItem from '../components/WaterFallItem';
import PinView from '../components/PinView';
// actions
import { setImgPos } from '../redux/actions';

class WaterFall extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pinViewIsShow: false,
            width: 'auto',
            height: 'auto',
            images: [],
            paths: [],
        }
        this.togglePinView = this.togglePinView.bind(this);
    }
    render() {
        var { onPinViewClick, changeTop, index } = this.props;
        var { pinViewIsShow, width, height, paths, images } = this.state;
        var imageNode = paths.map((img, index) => (<WaterFallItem image={img} key={img + index} />))
        return (
            <div className="waterFallWrapper">
                <div
                    id="waterFall"
                    className="waterFall clearfix"
                    style={{ width, height }}
                    onClick={this.togglePinView}>
                    {imageNode}
                </div>
                <PinView
                    changeTop={changeTop}
                    onPinViewClick={onPinViewClick}
                    onPinViewChange={this.togglePinView}
                    isShow={pinViewIsShow}
                    src={images[index]} />
            </div>
        )
    }
    componentDidUpdate({ match: { params: { id: prevId } } }) {
        var { match: { params: { id: curId } } } = this.props;
        if (curId !== prevId) {
            var { changeBrief } = this.props;
            // fetch(`http://10.10.100.166:1323/${curId}`)
            fetch(`/${curId}`)
                .then(res => res.json())
                .then(json => {
                    this.setState({ images: json.map(({ path }) => path) }, () => {
                        var { images } = this.state;
                        var promises = images.map(path => loadImageAsync(path));
                        function loadImageAsync(url) {
                            return new Promise((resolve, reject) => {
                                var image = new Image();
                                image.onload = () => { resolve(image); };
                                image.onerror = () => { reject(new Error('Could not load image at ' + url)); };
                                image.src = url;
                            }).catch(e => e);
                        }
                        Promise.all(promises).then((res, rej) => {
                            this.setState({ paths: images }, () => { this.step4(); })
                        }).catch(err => {
                            this.setState({ paths: images }, () => { this.step4(); })
                        })
                    });
                    changeBrief(json);
                }).catch(function (ex) {
                    console.log('parsing failed', ex)
                });
        }
    }
    componentWillMount() {
        var { changeBrief, changeTop, match: { params: { id } } } = this.props;
        changeTop(null, '48px');
        // fetch(`http://10.10.100.166:1323/${id}`)
        fetch(`/${id}`)
            .then(res => res.json())
            .then(json => {
                this.setState({ images: json.map(({ path }) => path) }, () => {
                    var { images } = this.state;
                    var promises = images.map(path => loadImageAsync(path));
                    function loadImageAsync(url) {
                        return new Promise((resolve, reject) => {
                            var image = new Image();
                            image.onload = () => { resolve(image); };
                            image.onerror = () => { reject(new Error('Could not load image at ' + url)); };
                            image.src = url;
                        }).catch(e => e);
                    }
                    Promise.all(promises).then((res, rej) => {
                        this.setState({ paths: images }, () => { this.step4(); })
                    }).catch(err => {
                        this.setState({ paths: images }, () => { this.step4(); })
                    })
                });
                changeBrief(json);
            }).catch(function (ex) {
                console.log('parsing failed', ex)
            });
    }
    togglePinView(e, isShow) {
        var { dispatch, changeTop } = this.props;
        var overflow;
        var index = $(e.target).closest('.waterFallItem').index();
        isShow = Object.prototype.toString.call(isShow) === '[object Boolean]' ? isShow : false;
        overflow = !isShow ? 'hidden' : '';
        $('body').css('overflow', overflow);

        if (index !== -1) dispatch(setImgPos(index));
        changeTop(e);
        this.setState({ pinViewIsShow: !isShow });
    }
    step4() {
        waterfall = waterfall.bind(this);
        waterfall('waterFall', 'waterFallItem');
        var timer;
        window.onresize = function () {
            clearTimeout(timer);
            timer = setTimeout(function () {
                waterfall('waterFall', 'waterFallItem');
            }, 100)
        }
        /*
                 parend 父级id
                 pin 元素id
        */
        function waterfall(parent, pin) {
            var oParent = document.getElementById(parent); // 父级对象
            var aPin = getClassObj(oParent, pin); // 获取存储块框pin的数组aPin
            var iPinW = aPin[0].offsetWidth + 15; // 一个块框pin的宽
            var num = Math.floor((document.documentElement.clientWidth) / iPinW); //每行中能容纳的pin个数【窗口宽度除以一个块框宽度】
            // oParent.style.cssText = `width:${iPinW * num - 15}px;`; //设置父级居中样式：定宽+自动水平外边距

            var pinHArr = []; //用于存储 每列中的所有块框相加的高度。
            for (let i = 0; i < aPin.length; i++) { //遍历数组aPin的每个块框元素
                let pinH = aPin[i].offsetHeight;
                if (i < num) {
                    let pinL = 0;
                    let pinW = aPin[i].offsetWidth;
                    if (i > 0) { pinL = (pinW + 15) * i; }
                    pinHArr[i] = pinH;  //第一行中的num个块框pin 先添加进数组pinHArr
                    aPin[i].style.position = 'absolute';
                    aPin[i].style.top = '15px';
                    aPin[i].style.left = `${pinL}px`;
                } else {
                    let minH = Math.min.apply(null, pinHArr); //数组pinHArr中的最小值minH
                    let minHIndex = getminHIndex(pinHArr, minH);
                    aPin[i].style.position = 'absolute'; //设置绝对位移
                    aPin[i].style.top = minH + 30 + 'px';
                    try {
                        aPin[i].style.left = aPin[minHIndex].offsetLeft + 'px';
                    } catch (err) {
                        console.log(err);
                    }
                    //数组 最小高元素的高 + 添加上的aPin[i]块框高
                    pinHArr[minHIndex] += aPin[i].offsetHeight + 15; //更新添加了块框后的列高
                }
            }
            this.setState({ width: `${iPinW * num - 15}px`, height: `${Math.max.apply(null, pinHArr) + 100}px` });
        }
        /****
            *通过父级和子元素的class类 获取该同类子元素的数组
            */
        function getClassObj(parent, className) {
            var obj = parent.getElementsByTagName('*'); //获取 父级的所有子集
            var pinS = []; //创建一个数组 用于收集子元素
            for (var i = 0; i < obj.length; i++) { //遍历子元素、判断类别、压入数组
                if (obj[i].className == className) {
                    pinS.push(obj[i]);
                }
            };
            return pinS;
        }
        /****
            *获取 pin高度 最小值的索引index
            */
        function getminHIndex(arr, minH) {
            for (var i in arr) {
                if (arr[i] == minH) {
                    return i;
                }
            }
        }

        function checkscrollside() {
            var oParent = document.getElementById('main');
            var aPin = getClassObj(oParent, 'pin');
            var lastPinH = aPin[aPin.length - 1].offsetTop + Math.floor(aPin[aPin.length - 1].offsetHeight / 2); //创建【触发添加块框函数waterfall()】的高度：最后一个块框的距离网页顶部+自身高的一半(实现未滚到底就开始加载)
            var scrollTop = document.documentElement.scrollTop || document.body.scrollTop; //注意解决兼容性
            var documentH = document.documentElement.clientHeight; //页面高度
            return (lastPinH < scrollTop + documentH) ? true : false; //到达指定高度后 返回true，触发waterfall()函数
        }
    }
}

// 基于全局 state ，哪些是我们想注入的 props ?
// 注意：使用 https://github.com/faassen/reselect 效果是更佳。
// 包装 component ，注入 dispatch 和 state 到其默认的 connect(select)(App) 中；
export default WaterFall = connect(
    ({ index }) => ({
        index
    })
)(WaterFall);
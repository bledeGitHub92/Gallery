import 'styles/pinView.css';
import CloseButton from './CloseButton';

export default function PinView({ isShow, src, onPinViewChange, onPinViewClick, changeTop }) {
    function handlePinViewClick(e) {
        onPinViewClick(e);
    }
    function handleCloseButtonClick(e) {
        e.stopPropagation();
        onPinViewChange(e, isShow)
        changeTop(e, '48px');
    }

    return (
        <div
            onClick={handlePinViewClick}
            className="pinView"
            style={{ display: isShow ? 'block' : 'none' }}>
            <CloseButton
                onCloseButtonClick={handleCloseButtonClick} />
            <img src={src} alt="" />
        </div>
    )
}
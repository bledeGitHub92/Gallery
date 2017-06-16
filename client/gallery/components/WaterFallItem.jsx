
export default function WaterFallItem({image}) {
    return (
        <div className="waterFallItem">
            <div className="pin">
                <img src={image} alt="图片加载失败" />
            </div>
        </div>
    )
}
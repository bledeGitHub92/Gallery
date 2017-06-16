import 'styles/infoBox.css';
import React from 'react';
import ThumbNail from './ThumbNail';
import ImageInfo from './ImageInfo';

export default function InfoBox({ isShow, brief: { path, ...rest } }) {
    var display = isShow ? 'block' : 'none';
    return (
        <div
            className="infoBox"
            style={{ display }}>
            <ThumbNail
                path={path} />
            <ImageInfo {...rest} />
        </div>
    )
}
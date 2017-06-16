import 'styles/imageInfo.css';
import React from 'react';

export default function ImageInfo({ dt, dd, p }) {
    return (
        <div className="imageInfo">
            <dl>
                <dt>{dt}</dt>
                <dd>{dd}</dd>
                <p>{p}</p>
            </dl>
        </div>
    )
}
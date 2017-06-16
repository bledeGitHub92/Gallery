import React from 'react';

export default function CloseButton({ onCloseButtonClick }) {
    return (
        <div
            className="closeButton"
            onClick={onCloseButtonClick}>&times;</div>
    )
}
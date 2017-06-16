import 'styles/topNav.css';
import React from 'react';

export default function TopNav({ onTopNavClick, width, location }) {
    var { pathname } = location === null ? {} : location;
    var className = ['topNav'];
    if (pathname === '/') {
        className.push('hidden');
        className = className.join(' ');
    }
    function handleTopNavClick(e) {
        onTopNavClick(e, '48px');
    }
    return (
        <div
            className={className}>
            <ul
                style={{ width }}>
                <li
                    className="menuToggle"
                    onClick={handleTopNavClick}>Switch</li>
                deep1 -&gt; deep2-2
            </ul>
        </div>
    )
}
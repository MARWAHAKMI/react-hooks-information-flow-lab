import React from 'react';

function Header(props) {
    return (
        <header>
            <button onClick={props.onDarkModeClick}>Dark Mode</button>
        </header>
    );
}

export default Header;
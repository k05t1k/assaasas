import React from 'react';
import myImage from './img/lamp.jpg';

class RightColumn extends React.Component {
    render() {
        return (
            <div className="right_column">
                <img src={myImage} width="100%" height="100%" alt="xdsh4ka" />
                <div className="centered">
                    Designed<br />for
                </div>
                <div className="centered2">
                    YOU
                </div>
            </div>
        );
    }
}

export default RightColumn;

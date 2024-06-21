import React from 'react';

class LeftColumn extends React.Component {
    render() {
        return (
            <div className="left_column">
                <div className="logo">
                    &#9776; Glow
                </div>
                <nav>
                    <a href="#" onClick={() => alert('Вы пока еще не приобрели дом')}>Catalog</a>
                    <a href="#" onClick={() => alert('Вы пока еще не приобрели дом')}>Blog</a>
                    <a href="#" onClick={() => alert('Вы пока еще не приобрели дом')}>About</a>
                    <a href="#" onClick={() => alert('Вы пока еще не приобрели дом')}>Contact</a>
                    <a>&#9906;</a>
                    <a>&#9863;</a>
                </nav>

                <h1>
                    <div className="sublogos-container">
                        <div className="sublogo1">We</div>
                        <div className="sublogo2">believe</div>
                        <div className="sublogo3">in</div>
                        <div className="sublogo">Light</div>
                    </div>
                </h1>

                <div className="textbox">
                    Et et accusantium itaque et ducimus voluptatibus quia voluptate. Omnis id ut ut reiciendis voluptas
                    <br />provident et. Possimus sed enim quod assumenda in voluptatem architecto ipsa.
                </div>

                <button className="button" onClick={() => alert('Button clicked')}>EXPLORE</button>
                <button className="button1" onClick={() => alert('Button clicked')}>Learn more</button>

                <div className="icons">&#9825; &#9785;</div>

                <div className="footer">Scroll for more</div>
            </div>
        );
    }
}

export default LeftColumn;

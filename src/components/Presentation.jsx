import React from 'react';

class Presentation extends React.Component {
    render() {
        const img = './img/blurscreen2.jpg';
        return (
            <div style={{ backgroundImage: 'url(' + img + ')' }} className="main">

            </div>
        )
    }
}

export default Presentation;
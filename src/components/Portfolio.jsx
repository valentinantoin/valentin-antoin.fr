import React from 'react';

class Portfolio extends React.Component {
    render() {
        const img = './img/blurscreen.jpg';
        return (
            <div style={{ backgroundImage: 'url(' + img + ')', height: '100%', backgroundSize: '100%'}}>

            </div>
        )
    }
}

export default Portfolio;
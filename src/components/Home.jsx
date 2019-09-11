import React from 'react';

class Home extends React.Component {
    render() {
        const img = './img/netscreen.jpg';
        return (
            <div style={{ backgroundImage: 'url(' + img + ')', height: '100%', backgroundSize: '100%', opacity: '0.7'}}>
                <h1>Coucou</h1>
            </div>
        )
    }
}

export default Home;
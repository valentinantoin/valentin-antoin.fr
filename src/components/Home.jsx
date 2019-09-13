import React from 'react';
import Button from 'react-bootstrap/Button';
import {Link} from "react-router-dom";

class Home extends React.Component {
    render() {
        const img = './img/netscreen2.jpg';
        return (
            <div style={{ backgroundImage: 'url(' + img + ')' }} className="main home">
                <h1 className="mt">Valentin Antoin</h1>
                <p className="sub">Développeur web</p>
                <Link to="/portfolio"><Button variant="outline-dark" size='lg' id='btn'>Mon portfolio</Button></Link>
            </div>
        )
    }
}

export default Home;
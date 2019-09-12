import React from 'react';
import { Button } from 'react-mdl';
import {Link} from "react-router-dom";

class Home extends React.Component {
    render() {
        const img = './img/netscreen2.jpg';
        return (
            <div style={{ backgroundImage: 'url(' + img + ')' }} className="main home">
                <h1 className="mt">Valentin Antoin</h1>
                <p className="sub">Développeur web</p>
                <Link to="/portfolio"><Button raised ripple style={{ border: '1px solid #474747' }}>Mon portfolio</Button></Link>
            </div>
        )
    }
}

export default Home;
import React from 'react';
import './App.css';
import { Layout, Header, Drawer, Navigation } from 'react-mdl';
import Card from 'react-bootstrap/Card'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faGithub, faLinkedinIn, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import Main from './components/Main';

function App() {
  return (
    <div className="App">
        <div className="menu">
            <Layout fixedHeader>
                <Header id="header" title="Valentin Antoin">
                    <a target="_blank" rel="noopener noreferrer" href="https://github.com/valentinantoin"
                       title="Github"><FontAwesomeIcon icon={faGithub} size="3x" /></a>
                    <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/valentin-antoin/"
                       title="LinkedIn"><FontAwesomeIcon icon={faLinkedinIn} size="3x" /></a>
                    <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/Valentin_Antoin"
                       title="Twitter"><FontAwesomeIcon icon={faTwitter} size="3x" /></a>
                </Header>
                <Drawer>
                    <Card className='cardmenu' >
                        <Card.Img src='./img/val.jpg'/>
                        <Card.Body>
                            <Card.Title>
                                Valentin Antoin
                            </Card.Title>
                        </Card.Body>
                    </Card>
                    <Navigation>
                        <Link to="/home">Accueil</Link>
                        <Link to="/presentation">Présentation</Link>
                        <Link to="/portfolio">Portfolio</Link>
                        <Link to="/contact">Contact</Link>
                        <a href="./files/CV-ValentinAntoin.pdf" download>
                            <FontAwesomeIcon icon={faDownload} /> Télécharger mon CV</a>
                    </Navigation>
                </Drawer>
                <Main />
            </Layout>
        </div>
    </div>
  );
}

export default App;

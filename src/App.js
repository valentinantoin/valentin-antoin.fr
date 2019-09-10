import React from 'react';
import './App.css';
import { Layout, Header, Textfield, Drawer, Navigation, Content } from 'react-mdl';
import { Card, CardTitle, CardText } from 'react-mdl';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faGithub, faLinkedinIn, faTwitter} from "@fortawesome/free-brands-svg-icons";
import { Link } from 'react-router-dom';
import Main from './components/Main';
import FooterSocial from "./components/FooterSocial";

function App() {
  return (
    <div className="App">
        <div style={{height: '700px', position: 'relative'}}>
            <Layout fixedHeader>
                <Header title="Valentin Antoin">
                    <a target="_blank" rel="noopener noreferrer" href="https://github.com/valentinantoin"
                       title="Github"><FontAwesomeIcon icon={faGithub} size="3x" /></a>
                    <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/valentin-antoin/"
                       title="LinkedIn"><FontAwesomeIcon icon={faLinkedinIn} size="3x" /></a>
                    <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/Valentin_Antoin"
                       title="Twitter"><FontAwesomeIcon icon={faTwitter} size="3x" /></a>
                </Header>
                <Drawer>
                    <Card shadow={0} style={{width: 'auto', height: '320px', margin: '0'}}>
                        <CardTitle expand style={{color: '#fff', background: '#6A7D8A'}}>Valentin Antoin</CardTitle>
                        <CardText>
                            Développeur web
                        </CardText>
                    </Card>
                    <Navigation>
                        <Link to="/presentation">Présentation</Link>
                        <Link to="/portfolio">Portfolio</Link>
                        <Link to="/contact">Contact</Link>
                        <Link to="/">Mon CV</Link>
                    </Navigation>
                </Drawer>
                <Main />
            </Layout>
        </div>
      <FooterSocial />
    </div>
  );
}

export default App;

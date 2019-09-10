import React from 'react';
import { Layout, Header, Textfield, Drawer, Navigation, Content } from 'react-mdl';
import { Card, CardTitle, CardText } from 'react-mdl';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faGithub, faLinkedinIn, faTwitter} from "@fortawesome/free-brands-svg-icons";

const Navbar = () => {
        return (
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
                            <a href="/">Présentation</a>
                            <a href="/">Portfolio</a>
                            <a href="/">Contact</a>
                            <a href="/">Mon CV</a>
                        </Navigation>
                    </Drawer>
                    <Content />
                </Layout>
            </div>
        )
};

export default Navbar;
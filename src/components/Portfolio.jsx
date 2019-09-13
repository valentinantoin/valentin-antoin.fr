import React from 'react';
import Card from "react-bootstrap/Card";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import {faGithub, faNpm} from "@fortawesome/free-brands-svg-icons";
import {faGlobe} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

class Portfolio extends React.Component {
    render() {
        const img = './img/blurscreen2.jpg';
        return (
            <div style={{ backgroundImage: 'url(' + img + ')' }} className="main portfolio">

                <Card className='card-portfolio'>
                    <Card.Img variant="top" src="./img/projects/projet1.png" />
                    <Card.Body>
                        <Card.Title>WebAgency</Card.Title>
                        <Card.Text>
                            HTML / CSS
                        </Card.Text>
                        <DropdownButton id="dropdown-basic-button" variant='secondary' title="Liens">
                            <Dropdown.Item href="http://webagency.valentin-antoin.fr/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGlobe} />   Vers le site</Dropdown.Item>
                            <Dropdown.Item href="https://github.com/valentinantoin/Webagency" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} />   Vers le code</Dropdown.Item>
                        </DropdownButton>
                    </Card.Body>
                </Card>
                <Card className='card-portfolio'>
                    <Card.Img variant="top" src="./img/projects/projet2.png" />
                    <Card.Body>
                        <Card.Title>Office de tourisme Strasbourg</Card.Title>
                        <Card.Text>
                            WORDPRESS
                        </Card.Text>
                        <DropdownButton id="dropdown-basic-button" variant='secondary' title="Liens">
                            <Dropdown.Item href="http://wordpress.valentin-antoin.fr/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGlobe} />   Vers le site</Dropdown.Item>
                        </DropdownButton>
                    </Card.Body>
                </Card>
                <Card className='card-portfolio'>
                    <Card.Img variant="top" src="./img/projects/projet3.png" />
                    <Card.Body>
                        <Card.Title>Vélo'V Lyon</Card.Title>
                        <Card.Text>
                        HTML / CSS / JS
                        </Card.Text>
                        <DropdownButton id="dropdown-basic-button" variant='secondary' title="Liens">
                            <Dropdown.Item href="http://velov.valentin-antoin.fr/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGlobe} />   Vers le site</Dropdown.Item>
                            <Dropdown.Item href="https://github.com/valentinantoin/Velo-V" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} />   Vers le code</Dropdown.Item>
                        </DropdownButton>
                    </Card.Body>
                </Card>
                <Card className='card-portfolio'>
                    <Card.Img variant="top" src="./img/projects/projet4.png" />
                    <Card.Body>
                        <Card.Title>Blog de Jean Forteroche</Card.Title>
                        <Card.Text>
                            PHP / MySQL
                        </Card.Text>
                        <DropdownButton id="dropdown-basic-button" variant='secondary' title="Liens">
                            <Dropdown.Item href="https://jeanforteroche.valentin-antoin.fr/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGlobe} />   Vers le site</Dropdown.Item>
                            <Dropdown.Item href="https://github.com/valentinantoin/Blog-Jean-Forteroche" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} />   Vers le code</Dropdown.Item>
                        </DropdownButton>
                    </Card.Body>
                </Card>
                <Card className='card-portfolio'>
                    <Card.Img variant="top" src="./img/projects/projet5.png" />
                    <Card.Body>
                        <Card.Title>Portfolio v1.0</Card.Title>
                        <Card.Text>
                            SYMFONY
                        </Card.Text>
                        <DropdownButton id="dropdown-basic-button" variant='secondary' title="Liens">
                            <Dropdown.Item href="https://portfoliov1.valentin-antoin.fr/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGlobe} />   Vers le site</Dropdown.Item>
                            <Dropdown.Item href="https://github.com/valentinantoin/valentin-antoin" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} />   Vers le code</Dropdown.Item>
                        </DropdownButton>
                    </Card.Body>
                </Card>
                <Card className='card-portfolio'>
                    <Card.Img variant="top" src="./img/projects/animadio-portfolio.png" />
                    <Card.Body>
                        <Card.Title>Animadio-portfolio template</Card.Title>
                        <Card.Text>
                            HTML / ANIMADIO CSS FRAMEWORK
                        </Card.Text>
                        <DropdownButton id="dropdown-basic-button" variant='secondary' title="Liens">
                            <Dropdown.Item href="https://portfolio.animadio.org/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGlobe} />   Vers le site</Dropdown.Item>
                            <Dropdown.Item href="https://github.com/valentinantoin/animadio-portfolio" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} />   Vers le code</Dropdown.Item>
                            <Dropdown.Item href="https://www.npmjs.com/package/animadio-portfolio" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faNpm} />   Vers le package</Dropdown.Item>
                        </DropdownButton>
                    </Card.Body>
                </Card>

            </div>
        )
    }
}

export default Portfolio;
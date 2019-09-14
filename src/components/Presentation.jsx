import React from 'react';
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import {Link} from "react-router-dom";
import {
    faBootstrap,
    faCss3,
    faHtml5,
    faJs, faLinkedin,
    faPhp,
    faReact,
    faSymfony
} from "@fortawesome/free-brands-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Button from "react-bootstrap/Button";

class Presentation extends React.Component {
    render() {
        const img = './img/blurscreen2.jpg';
        return (
            <div style={{ backgroundImage: 'url(' + img + ')' }} className="main">

                <Accordion defaultActiveKey="0" >
                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="0">
                            Présentation générale
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="0">
                            <Card.Body>
                                <p>
                                Suite à diverses expériences professionnelles dans des domaines variés,
                                j'ai décidé de me reconvertir dans un domaine passionnant et porteur, le développement
                                web. J'ai validé avec les félicitations du jury une formation de développeur web chez
                                OpenClassrooms durant laquelle j'ai réalisé différents projets que vous pouvez retrouver
                                    sur ce site dans la section <Link to="/portfolio">portfolio</Link>.</p>
                                <p>Une forte curiosité naturelle, une veille technologique quotidienne et une polyvalence
                                issue d’un parcours professionnel riche et varié, sont les atouts que je souhaite à
                                présent mettre à votre disposition.
                                </p>
                                <p className='center'>
                                    <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/valentin-antoin/"
                                       title="LinkedIn">
                                        <Button variant="outline-dark"><FontAwesomeIcon icon={faLinkedin} size="2x" /></Button>
                                    </a>
                                </p>
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="1">
                            Formation
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="1">
                            <Card.Body>
                                <ul>
                                    <li className='liTitle'>Diplôme</li>
                                    <ul>
                                        <li>Développeur web junior avec les félicitations du jury. OpenClassrooms</li>
                                    </ul>
                                    <li className='liTitle'>Certifications OpenClassrooms</li>
                                    <ul>
                                        <li>Apprenez à créer votre site web avec HTML5 et CSS3</li>
                                        <li>Prenez en main Bootstrap</li>
                                        <li>Découvrez les solutions CMS</li>
                                        <li>Apprenez à coder avec JavaScript</li>
                                        <li>Introduction à jQuery</li>
                                        <li>Concevez votre site web avec PHP et MySQL.</li>
                                    </ul>
                                </ul>
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="2">
                            Langages
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="2">
                            <Card.Body id='lang'>
                                <FontAwesomeIcon icon={faHtml5} size="3x" />
                                <FontAwesomeIcon icon={faCss3} size="3x" />
                                <FontAwesomeIcon icon={faBootstrap} size="3x" />
                                <FontAwesomeIcon icon={faJs} size="3x" />
                                <FontAwesomeIcon icon={faReact} size="3x" />
                                <FontAwesomeIcon icon={faPhp} size="3x" />
                                <FontAwesomeIcon icon={faSymfony} size="3x" />
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                </Accordion>

            </div>
        )
    }
}

export default Presentation;
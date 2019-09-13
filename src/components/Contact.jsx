import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope} from "@fortawesome/free-solid-svg-icons";
import {faGithub, faLinkedin} from "@fortawesome/free-brands-svg-icons";

class Contact extends React.Component {
    render() {
        const img = './img/blurscreen2.jpg';
        return (
            <div style={{ backgroundImage: 'url(' + img + ')' }} className="main contact">

                <ul>
                    <li>
                        <FontAwesomeIcon icon={faEnvelope} size="2x" />
                        <a href='mailto:valentin.antoin@gmail.com'>valentin.antoin@gmail.com</a>
                    </li>
                    <li>
                        <FontAwesomeIcon icon={faLinkedin} size="2x" />
                        <a href='https://www.linkedin.com/in/valentin-antoin/' target="_blank" rel="noopener noreferrer" title="LinkedIn">in/valentin-antoin</a>
                    </li>
                    <li>
                        <FontAwesomeIcon icon={faGithub} size="2x" />
                        <a href='https://github.com/valentinantoin' target="_blank" rel="noopener noreferrer" title='GitHub'>valentinantoin</a>
                    </li>
                </ul>

            </div>
        )
    }
}

export default Contact;
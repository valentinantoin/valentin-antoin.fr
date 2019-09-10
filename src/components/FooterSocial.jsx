import React from 'react';
import {Footer, FooterSection, FooterLinkList } from 'react-mdl';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub, faLinkedinIn, faTwitter} from "@fortawesome/free-brands-svg-icons";

const FooterSocial = () => {
    return (
        <Footer id="footer" size="mini">
            <FooterSection type="bottom">
                <FooterLinkList>
                    <a target="_blank" rel="noopener noreferrer" href="https://github.com/valentinantoin"
                       title="Github"><FontAwesomeIcon icon={faGithub} size="3x" /></a>
                    <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/valentin-antoin/"
                       title="LinkedIn"><FontAwesomeIcon icon={faLinkedinIn} size="3x" /></a>
                    <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/Valentin_Antoin"
                       title="Twitter"><FontAwesomeIcon icon={faTwitter} size="3x" /></a>
                </FooterLinkList>
            </FooterSection>
        </Footer>
    )
};

export default FooterSocial;
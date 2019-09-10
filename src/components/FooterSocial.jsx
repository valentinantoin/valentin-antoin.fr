import React from 'react';
import { Footer, FooterSection, FooterLinkList } from 'react-mdl';

const FooterSocial = () => {
    return (
        <Footer size="mini">
            <FooterSection type="left" logo="footer">
                <FooterLinkList>
                    <a href="#">option 1</a>
                    <a href="#">option 2</a>
                </FooterLinkList>
            </FooterSection>
        </Footer>
    )
};

export default FooterSocial;
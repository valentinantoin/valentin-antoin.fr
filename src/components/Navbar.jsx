import React from 'react';
import { Layout, Header, Textfield, Drawer, Navigation, Content } from 'react-mdl';

class Navbar extends React.Component {
    render() {
        return (
            <div style={{height: '700px', position: 'relative'}}>
                <Layout fixedHeader fixedDrawer>
                    <Header title="Valentin Antoin">
                        <Textfield
                            value=""
                            onChange={() => {}}
                            label="Search"
                            expandable
                            expandableIcon="search"
                        />
                    </Header>
                    <Drawer title="Menu">
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
    }
}

export default Navbar;
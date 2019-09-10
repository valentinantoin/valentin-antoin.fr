import React from 'react';
import { Layout, Header, Textfield, Drawer, Navigation, Content } from 'react-mdl';

class Navbar extends React.Component {
    render() {
        return (
            <div style={{height: '300px', position: 'relative'}}>
                <Layout fixedHeader fixedDrawer>
                    <Header title="Title">
                        <Textfield
                            value=""
                            onChange={() => {}}
                            label="Search"
                            expandable
                            expandableIcon="search"
                        />
                    </Header>
                    <Drawer title="Title">
                        <Navigation>
                            <a href="#">Link</a>
                            <a href="#">Link</a>
                            <a href="#">Link</a>
                            <a href="#">Link</a>
                        </Navigation>
                    </Drawer>
                    <Content />
                </Layout>
            </div>
        )
    }
}

export default Navbar;
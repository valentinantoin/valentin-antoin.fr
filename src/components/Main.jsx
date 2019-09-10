import React from 'react';
import { Switch, Route } from "react-router-dom";
import Home from './Home';
import Presentation from './Presentation';
import Portfolio from './Portfolio';
import Contact from './Contact';

const Main = () => {
    return (
        <Switch>
            <Route exact path={'/'} component={ Home} />
            <Route path={'/presentation'} component={ Presentation}/>
            <Route path={'/portfolio'} component={ Portfolio}/>
            <Route path={'/contact'} component={ Contact}/>
        </Switch>
    )
};

export default Main;

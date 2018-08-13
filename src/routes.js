import React from "react";
import { Switch, Route, } from "react-router-dom";

import About from "./Components/About/About";
import Portfolio from "./Components/Portfolio/Portfolio";


export default (
    <Switch>
        <Route exact path="/" component={About} />
        <Route path="/portfolio" component={Portfolio}/>
        <Route
            path="*"
            render={() => (
                <div>
                    <p>Not Found</p>
                </div>
            )}
        />
    </Switch>
);
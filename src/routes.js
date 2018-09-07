import React from "react";
import { Switch, Route, } from "react-router-dom";

import About from "./Components/About/About";
import Portfolio from "./Components/Portfolio/Portfolio";
import Details from "./Components/Details/Details";


export default (
    <Switch>
        <Route exact path="/" component={About} />
        <Route path="/portfolio" component={Portfolio}/>
        <Route path="/Details/:id" component={Details}/>
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
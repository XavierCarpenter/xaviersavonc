import React from "react";
import { Switch, Route, } from "react-router-dom";

import About from "./Components/About/About";
import Portfolio from "./Components/Portfolio/Portfolio";
import Details from "./Components/Details/Details";
import Contact from "./Components/Contact/Contact";
import Recommend from "./Components/Recommend/Recommend";


export default (
    <Switch>
        <Route exact path="/" component={About} />
        <Route path="/portfolio" component={Portfolio}/>
        <Route path="/Details/:id" component={Details}/>
        <Route path="/contact" component={Contact}/>
        <Route path="/recommendations" component={Recommend} />
        
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
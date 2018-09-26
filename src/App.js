import React, { Component } from 'react';
import './App.css';
import routes from "./routes";
import About from './Components/About/About';
import { Link, withRouter } from "react-router-dom";


class App extends Component {
  constructor(){
    super();
    this.state = {
      navActive: false
    }
  }
  changeNav(){
    if(this.state.navActive === false){
      this.setState({navActive: true});
    }else if(this.state.navActive === true){
      this.setState({navActive: false});
    }
  }
  render() {
    return (
      <div className="App">
     {routes}
        <div className="nav-container">
          <i onClick={() => this.changeNav()} className="fas fa-bars"></i>
          {this.state.navActive === true ?
          <div className="drop-down">
            <div className="nav-box">
            <ul>
                  <Link onClick={() => this.changeNav()} to={"/"}>
                  <li>About</li>
                  </Link>
                  <Link onClick={() => this.changeNav()} to={"/portfolio"}>
                  <li>Portfolio</li>
                  </Link>
                  <Link onClick={() => this.changeNav()} to={"/recommendations"}>     
                  <li>Recommendations</li>  
                  </Link>   
                  <Link onClick={() => this.changeNav()} to={"/contact"}>             
                  <li>Contact</li>         
                  </Link>         
            </ul>
            </div>
          </div> : null
          }
        </div>
     
      </div>
    );
  }
}

export default App;

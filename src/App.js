import React, { Component } from "react";
import Home from "./Components/Home.js";
import LaunchSuccess from "./Components/LaunchSuccess.js";
import LaunchLandSuccess from "./Components/LaunchLandSuccess.js";
import { BrowserRouter,Switch, Route} from "react-router-dom";
import Navbar from "./Components/Navbar.js"
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import Year2014 from "./Components/Year2014.js";




class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
    };
  }




  componentDidMount() {
    fetch("https://api.spaceXdata.com/v3/launches?limit=100")
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          items: data,
        });
      });
  }



  
  render() {
    return (
      <BrowserRouter>
        <div style={{ backgroundColor: "azure" }}>
          <Navbar/>


          <Switch>
          <Route exact path="/">
            <Home/>
          </Route>

          <Route path="/launch_success">
            <LaunchSuccess/>
          </Route>
          

          <Route path="/launch_land_success">
            <LaunchLandSuccess />
          </Route>

          <Route path="/year_2014">
            <Year2014 />
          </Route>
          </Switch>

        </div>
      </BrowserRouter>
    );
  }
}

export default App;

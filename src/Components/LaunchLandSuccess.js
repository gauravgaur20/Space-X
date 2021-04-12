import React, { Component } from "react";
import car from "../images/wp2284535-spacex-wallpapers.jpg";



class LaunchLandSuccess extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
    };

  }




  componentDidMount() {
    fetch("https://api.spaceXdata.com/v3/launches?limit=100&launch_success=true&land_success=true")
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          items: data,
        });
      });
  }
  


  


  render() {
    return (
        <div style={{backgroundImage:`url(${car})` }}>         
            <h1 style={{ marginLeft:"28%" ,color: "skyblue" }}>
              Space - X Success Launch & Lands
            </h1>

          <ul>
            {this.state.items.map((item) => (
              <li key={item.flight_number}>
                <div
                  className="card"
                  style={{
                      align: "center",
                    marginTop: "15px",
                    marginLeft: "50px",
                    marginRight: "10px",
                  }}
                >
                  <div
                    className="card-header"
                    style={{ backgroundColor: "lightblue" }}
                  >
                    <span style={{paddingRight:"10px" }}>{item.flight_number} </span>   
                    <span>{item.mission_name}</span>
                  </div>
                  <div
                    className="card-body"
                    style={{ backgroundColor: "black", textcolor: "white"}}
                  >
                    <h5
                      className="card-title"
                      style={{ textcolor: "white", color: "white" }}
                    >
                      {item.launch_year}
                    </h5>
                    <div className="card-row">
                    <p className="card-text" style={{ color: "white" }}>
                      Rocket 
                      <br/>
                      <br/>
                      Rocket_id : {item.rocket.rocket_id}
                      <br />
                      Rocket_name : {item.rocket.rocket_name}
                      <br />
                      Rocket_type : {item.rocket.rocket_type}
                      <br />
                    </p>
                      <p className="rocket">
                        Launching Site
                        <br/>
                        <br/>
                        Site_ID : {item.launch_site.site_id}
                        <br />
                        Site_Name : {item.launch_site.site_name}
                        
                        <br />
                        
                      </p>
                      </div>
                          {/* <button onClick={()=>this.check(item.launch_success.toString())}>Mission_Status</button>
                          <p> Launch {this.state.issuccess}</p> */}
                          {/* <div style={{ align:"center",marginLeft:"600px", marginTop:"20px",border: "4px solid",borderColor:"lightblue",width:150,paddingLeft:"12px",paddingTop:"7px",borderRadius:20}}>
                          {item.launch_success.toString()==="true"?<h6 style={{color:"green",fontSize:"15px"}}>Launch Successful</h6> : <p  style={{color:"red",fontSize:"large"}}>Launch failed</p>}
                          </div> */}
                      
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
        
    );
  }
}

export default LaunchLandSuccess;

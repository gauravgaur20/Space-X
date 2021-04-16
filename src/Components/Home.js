import React, { Component } from "react";
import car from "../images/wp2284535-spacex-wallpapers.jpg";



class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      issuccess: "fail",
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
    console.log(this.items);
  }




  
  render() {
    return (
      <div style={{ backgroundAttachment: "fixed",
        backgroundPosition: "center",backgroundSize:"cover",backgroundImage: `url(${car})` }}>
        <h1 style={{ marginLeft: "40%", color: "skyblue" }}>Space - X</h1>

        <ul>
          {this.state.items.map((item) => (
            <li key={item.flight_number}>
              <div
                className="cardr"
                style={{
                  align: "center",
                  marginTop: "15px",
                  marginLeft: "50px",
                  marginRight: "60px",
                  border:"1px solid white",
                  marginBottom:"20px"
                }}
              >
                <div
                  className="card-header"
                  style={{border:"1px solid"}}
                >
                  {" "}
                  <span style={{ color:"white",paddingRight: "10px" }}>
                    {item.flight_number}{" "}
                  </span>
                  <span style={{color:"white"}}>{item.mission_name}</span>
                </div>
                <div
                  className="card-body"
                  style={{ }}
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
                      <br />
                      <br />
                      Rocket_id : {item.rocket.rocket_id}
                      <br />
                      Rocket_name : {item.rocket.rocket_name}
                      <br />
                      Rocket_type : {item.rocket.rocket_type}
                      <br />
                    </p>
                    <p className="rocket">
                      Launching Site
                      <br />
                      <br />
                      Site_ID : {item.launch_site.site_id}
                      <br />
                      Site_Name : {item.launch_site.site_name}
                      <br />
                    </p>
                  </div>
                  {/* <button onClick={()=>this.check(item.launch_success.toString())}>Mission_Status</button>
                          <p> Launch {this.state.issuccess}</p> */}
                  <div
                    style={{
                      align: "center",
                      marginLeft: "600px",
                      marginTop: "20px",
                      border: "4px solid",
                      borderColor: "lightblue",
                      width: "10rem",
                      paddingLeft: "12px",
                      paddingTop: "7px",
                      borderRadius: 20,
                    }}
                  >
                    {item.launch_success.toString() === "true" ? (
                      <h6 style={{ color: "green", fontSize: "15px" }}>
                        Launch Successful
                      </h6>
                    ) : (
                      <p style={{ color: "red", fontSize: "large" }}>
                        Launch failed
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Home;

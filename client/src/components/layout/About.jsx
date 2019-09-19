import React from "react";
import { MDBRow, MDBCol } from "mdbreact";
import Demo from "./demo.png"
import Background from './demo1.png'
import { Nav } from "react-bootstrap"

const About = () => {
    return (
        <div
            style={{
                backgroundImage: `url(${Background}) `,
                height: "100vh",
                width: "100%",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "fixed",
                display: "flex"
            }} >
            <div className="my-6 m-3">
                <h2 className="h1-responsive font-weight-bold text-center my-4">
                    Contact us
      </h2>

                <MDBRow>
                    <div className="text-center w-responsive mx-auto m-2 pb-8">

                        <h1>

                            Welcome to Contact List Application
                       </h1>
                        <h3 >
                            <Nav.Link className="text-danger" href="/login">create your personal Contact List</Nav.Link>
                        </h3>


                    </div>
                    <MDBCol lg="7">
                        {/* <div
                            id="map-container"
                            className="rounded z-depth-1-half map-container"

                        >
                            <img
                                src={Demo}
                                title="This is a unique title"
                                width="100%"
                                height="100%"
                                frameBorder="0"
                                style={{ border: 0 }}
                                alt=""
                            />


                        </div> */}
                        <br />

                    </MDBCol>
                </MDBRow>
            </div>
        </div >
    );
}

export default About;



import React from "react";

import Background from './demo1.png'
import { Nav } from "react-bootstrap"

const About = () => {
    return (
        <div className="text-center"
            style={{
                backgroundImage: `url(${Background}) `,
                height: "100vh",
                width: "100%",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "fixed",
                display: "flex",

            }} >



            <div style={{ marginTop: "100px" }} >

                <h1 style={{ textAlign: "center" }} className="text-white-50">

                    Welcome to Contact List Application
                       </h1>
                <h3 >
                    <Nav.Link className="text-danger" href="/login">create your personal Contact List</Nav.Link>
                </h3>


            </div>





        </div>

    );
}

export default About;



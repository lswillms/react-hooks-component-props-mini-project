import React from "react";
import blogData from "../data/blog";

function About({image = "https://via.placeholder.com/215Links to an external site", about}) {
    return (
        <aside>
            <img src= {image} alt = "blog logo" />
            <p>{about}</p>
        </aside>
    )
}

export default About
import React from "react";
import blogData from "../data/blog";

function Article ({id, title, date = "January 1, 1970", preview}) {

    return (
        <article key = {id}>
            <h3>{title}</h3>
            <small>{date}</small>
            <p>{preview}</p>
        </article>
    )
    }

export default Article
import React from 'react'
import Self from '../photos/myself-mini.jpg'
export default function About() {
    return (
        <div className="Main Product">
            <img src={Self} alt="Self Portrait" className="Self-img"/>
            <div>
            <p>This project started as a class assignment.</p>
            <p>To build the simplest Online Shop with React.</p>
            <p>After I've finished the course, I renewed the Online Shop with Redux.</p>
            <p>I used Redux as a database for all the global information.</p>
            <p>The proccess was a lot easier, and much more fun to work on.</p>
            <p>I would love to get some reviews, so contact me on Github.</p>
            </div>
        </div>
    )
}

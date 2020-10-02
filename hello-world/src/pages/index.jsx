import React from "react"
import Header from "../components/header"
import Container from "../components/container"
import { Link, graphql } from "gatsby"
import '../styles/global.css';

export default function Home({ data }) {
  return (
  <Container >
    <Header />
    <div id='index'>
    <h1>Developer, Artist</h1>

    {/* <p>I <a target="_blank" rel="noreferrer" href="https://www.instagram.com/sosunnyproject">make visual artworks</a> with creative coding tools like p5js, ml5js, processing, kinect, arduino, leap motion, and etc. 
      Since 2015, I dabbled into VR, AR, mixed media, and programming in the attempt of combining art/media and technology. 
      This summer, I had a group exhibition with Interactive Art Lab colleagues in Seoul.</p>
      
    <p>Currently, I am working as a full-time frontend web developer at OTA compnay 
      that aims digital disruption in travel industry, heavily using React framework.</p> */}

    {/* <p>
    🎭 musical theaters, live events, art performances <br />
    🗽🍎 <a target="_blank" href="https://www.vassar.edu/" rel="noreferrer">vassar college theatre media studies </a> & new york city <br />
    ⛰️🌪️🌊 endless journey of finding myself <br />
    💻💎 software engineering, web developer <br />
    🎨 art + tech, creative coding, creative technologist<br />
    </p> */}

    <p>
    Once upon a time, there was a sassy girl <br />
    who loved musical theaters 🎭 so much <br />
    that she flew to Broadway, New York 🗽🍎
    </p>
    <p>
    Walking through ⛰️ of <em>life decisions</em>,   <br />
    🌪️ of <em>crisis</em>, 🌊 of <em>changes</em>, <br />
    she unexpectedly found some gems 💎 <br /> 
    in the land of <Link to="/blog">software engineering 💻</Link> 
    </p>
    <p>
    But at the same time, <br />
    she knew her path started with <br /> 
    her love of 🎨 galleries and live events 🎪
    </p>
    <p>
    She started <Link to="/portfolio">combining media and technology</Link> <br />
    through VR, AR, mixed media, what not. <br />
    Now she is exploring the endless world of <a target="_blank" rel="noreferrer" href="https://www.instagram.com/sosunnyproject">creative coding</a>
    </p>
  
    </div>
  </Container>
  )
}
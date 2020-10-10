import React from "react"
import Header from "../components/header"
import Container from "../components/container"
import { Link, graphql } from "gatsby"
import '../styles/global.css';
import logo from "../images/sosunny_logo.png"
import "typeface-open-sans"
import "typeface-raleway"
import "typeface-merienda"
import "typeface-montserrat"
import "typeface-roboto"
import "typeface-bungee-shade"
import "typeface-bangers"

export default function Home({ data }) {
  return (
  <Container >
    <Header />

    <div id='index'>
    <h1>FrontEnd Dev & Artist & soon-to-be Creative Technologist </h1>

    <p>
    a sassy girl loved musical theaters so much she ✈️ to Broadway & Vassar College 🗽
    Walking through life ⛰️ decisions 🌪️ crisis 🌊 changes, she found some 💎 
    in the land of <Link to="/blog">software engineering </Link> 💻 
    Yet, as she still loves 🎨 🎭 she started <Link to="/portfolio"> combining media and technology </Link> 
    through VR AR, mixed media, and <a target="_blank" rel="noreferrer" href="https://www.instagram.com/sosunnyproject">creative coding. </a>
     Currently in Seoul, she is a full-time web dev during the day and creative coder at night.
    </p>

    <p id="indexBottom">
      Recently watched <span class="highlightSpan">Enola Holmes </span>, 
    read <span class="highlightSpan">뉴턴의 아뜰리에 </span>
    , bought <span class="highlightSpan">Massage gun</span></p>

    </div>
  </Container>
  )
}
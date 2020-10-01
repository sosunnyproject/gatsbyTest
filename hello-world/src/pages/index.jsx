import React from "react"
import Header from "../components/header"
import Container from "../components/container"
import  { Link } from "gatsby"

export default function Home() {
  return (
  <Container>
    <Header />
    <h1>hope you have so sunny day</h1>
    <p>Once upon a time there was a sassy girl who loved musical theaters and dreamed broadway. 
    Walking through mountains of <em>life decisions</em>, valleys of <em>crisis</em>, and rivers of <em>changes</em>,
    she unexpectedly found some gems in the land of <Link to="/blog">software engineering.</Link> </p>
    <p>
    But at the same time, she knew her path started with her love of art galleries and live events. 
    She started <Link to="/portfolio">combining media and technology</Link> through VR and AR. 
    Now she is exploring the endless world of <a target="_blank" rel="noreferrer" href="https://www.instagram.com/sosunnyproject">creative coding</a>.
    </p>

  </Container>
  )
}

import React from "react"
import Header from "../components/header"
import  { Link } from "gatsby"

export default function Blog() {
  return (
  <>
  <Link to="/">Home</Link>
  <Header text="Blog" />
  <h2>dev</h2>
  <h2>creativecoding</h2>
  <h2>finance</h2>
  <h2>daily</h2>

  </>
  )
}

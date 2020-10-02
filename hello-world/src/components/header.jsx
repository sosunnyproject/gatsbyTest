import React from "react"
import  { Link } from "gatsby"
import headerStyles from "./header.module.css"
import logo from "../images/sosunny_logo.png"
import instagramSVG from "../images/instagram.svg"
import linkedinSVG from "../images/linkedin (1).svg"
import "typeface-merienda"
import "typeface-montserrat"

export default function Header() {
  return <div className={headerStyles.headerContainer}>
    <div className={headerStyles.logoContainer}>
      <Link to="/" className={headerStyles.logoText}>have so sunny day 🎗️</Link>
      <div className={headerStyles.logos}>
        <a target="_blank" rel="noreferrer" href={"https://www.instagram.com/sosunnyproject"}  ><img src={instagramSVG} alt="instagram" width="20px" height="auto"/></a>
        <a target="_blank" rel="noreferrer" href={"https://www.linkedin.com/in/sosunpark"}  ><img src={linkedinSVG} alt="linkedin" width="20px" height="auto"/></a>
        <Link to="/" ><img src={logo} alt="logo" width="60px" height="auto"/></Link>
      </div>
    </div>

    <div className={headerStyles.navContainer}>
    <Link to="/portfolio/" className={headerStyles.navText}>portfolio</Link>
    <Link to="/blog/" className={headerStyles.navText}>blog</Link>
    <Link to="/vitae/" className={headerStyles.navText}>vitae</Link>
    </div>
  </div>
}
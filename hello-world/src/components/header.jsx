import React from "react"
import  { Link } from "gatsby"
import headerStyles from "./header.module.css"

export default function Header() {
  return <div className={headerStyles.headerContainer}>
    <h2>
      <Link to="/" className={headerStyles.logoText}>sosunny</Link>
      {/* <img src="../images/sosunny_logo.png" alt="logo" width="100%" /> */}
    </h2>
    
    <div className={headerStyles.navContainer}>
    <Link to="/about/" className={headerStyles.navText}>about</Link>
    <Link to="/portfolio/" className={headerStyles.navText}>portfolio</Link>
    <Link to="/blog/" className={headerStyles.navText}>blog</Link>
    <Link to="/vitae/" className={headerStyles.navText}>vitae</Link>
    </div>
  </div>
}
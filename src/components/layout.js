import React from "react"
import { Link } from "gatsby"
const ListLink = props => (
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <Link to={props.to}>{props.children}</Link>
  </li>
)
export default function Layout({ children }) {
  return (
    <div style={{ margin: `3rem auto`, maxWidth: 650, padding: `0 1rem` }}>
      <header style={{ marginBottom: `1.5rem` }}>
        <Link to="/" style={{ textShadow: `none`, backgroundImage: `none` }}>
          <h3 style={{ display: `inline` }}>MySweetSite</h3>
        </Link>
        <nav>
        <ul style={{ listStyle: `none`, float: `right` }}>
          <li><ListLink to="/">Home</ListLink></li>
          <li><ListLink to="/about/">About</ListLink></li>
          <li><ListLink to="/contact/">Contact</ListLink></li>
        </ul>
        </nav>
      </header>
      {children}
      <footer>
          Hey there!
      </footer>
    </div>
  )
}
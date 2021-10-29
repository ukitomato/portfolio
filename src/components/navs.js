import * as React from "react"
import { Link } from "gatsby"

const GatsbyNavLink = ({ to, children }) => {
  let currentPath = new URL(window.location.href).pathname
  if (currentPath.endsWith("/")) {
    currentPath = currentPath.slice(0, -1)
  }
  if (to.endsWith("/")) {
    to = to.slice(0, -1)
  }
  return (
    <>
      <Link
        className={`nav-link${to === currentPath ? " active" : ""}`}
        to={to}
      >
        {children}
      </Link>
    </>
  )
}

export default GatsbyNavLink

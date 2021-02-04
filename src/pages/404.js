import React from "react"
import { Link } from 'gatsby';
import '../styles/index.css';

export default function NotFound() {
  return (
    <>
      <h1>Page not found!</h1>
      <Link to="/">Back to Home</Link>
    </>
  )
}

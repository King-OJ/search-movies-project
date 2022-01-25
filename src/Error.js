import React from 'react';
import { Link } from 'react-router-dom'

export default function Error() {
  return (
  <main>
  <div className="page-error">
      <h2>You entered an invalid address. please check and try again</h2>
      <Link to="/" className="btn">
      back to movies
      </Link>
  </div>;
  </main>
  )
}

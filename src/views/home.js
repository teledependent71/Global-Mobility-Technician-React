import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Global Mobility Technician</title>
        <meta property="og:title" content="Global Mobility Technician" />
      </Helmet>
    </div>
  )
}

export default Home

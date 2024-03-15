import React from 'react'
import Nav from './Nav'
import Footer from './Footer'
import Routers from '../routers/Routers'

const Layout = () => {
  return (
    <>
    <Nav/>
    <div>
        <Routers />
    </div>
    <Footer />
    </>
  )
}

export default Layout
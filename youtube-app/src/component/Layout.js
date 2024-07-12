import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Catagory from './Catagory'
import Cardcontainer from './Cardcontainer'

const Layout = ({Childern}) => {
  return (
    <>
    <Header/>
    <Catagory/>
    <Cardcontainer/>
    <div>
        {Childern}
    </div>
    {/* <Footer/> */}
    </>
  )
}

export default Layout

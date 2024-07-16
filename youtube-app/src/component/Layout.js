import React from 'react'
import Header from './Header'
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
    </>
  )
}

export default Layout

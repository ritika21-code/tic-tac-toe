import React from 'react'
import Nav from './Nav'
import { Link , Outlet} from 'react-router-dom'
function Share() {
  return (<>
  <Nav/>
  <Outlet/></> 
  )
}

export default Share
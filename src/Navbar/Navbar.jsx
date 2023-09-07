import React from 'react'
import styled from 'styled-components';
import logo from '../assets/logo.png'

const Wrraper = styled.div`
display:flex;
justify-content: space-between;
padding: 10px;
background: #666666;
padding-left:40px;
padding-right: 40px;
`

const Logo = styled.div`
`


export const Navbar = () => {
  return (
    <Wrraper>
<Logo><img src={logo} alt="" /></Logo>
    </Wrraper>
  )
}

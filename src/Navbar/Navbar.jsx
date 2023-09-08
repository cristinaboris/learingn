import React from 'react'
import styled from 'styled-components';
import logo from '../assets/logo.png'
import {AiOutlineDown} from 'react-icons/ai' 

const Wrraper = styled.div`
display:flex;
justify-content: space-between;
padding: 10px;
background: #666666;
padding-left:40px;
padding-right: 40px;
justify-content: space-between;

`

const Logo = styled.div`
 display: flex;
 justify-content:center;
 img{
width: 100px;
 height: 100px;
 }
`

const NavbarLinks = styled.div`
display: flex;
justify-content:center;

ul{
   display:flex;
   margin: auto
    
   
    
}
li{
 display:flex
 gap:20
 
}
`

const LeftSideNav = styled.div`
margin: auto;
button{
    width: 200px;
    background: red;

}
`

export const Navbar = () => {
  return (
    <Wrraper>
<Logo><img src={logo} alt="" /></Logo>
<NavbarLinks>
    <ul>
        <li>Каналы
        <span><AiOutlineDown/></span>
        </li>
        <li>Категории
        <span><AiOutlineDown/></span>
        </li>
        <li>Все проекты</li>
        <li>Онлайн</li>
        <li>Ещё
        <span><AiOutlineDown/></span>
        </li>
    </ul>
</NavbarLinks>
<LeftSideNav>

<button>1212</button>
</LeftSideNav>
    </Wrraper>
  )
}

import React from 'react'
import styled from 'styled-components'
import laptop from '../img/laptop.png'
/*eslint-disable */
function Header() {
  return (
    <HeadeStyled>
        <nav className="navigation">
            <div className="logo">
                <h1>Grav T</h1>
            </div>
            <ul className="nav-items">
                <li><a href="#">About</a></li>
                <li><a href="#">Blogs</a></li>
                <li><a href="#">Gallery</a></li>
                <li><a href="#">Join</a></li>
            </ul>
        </nav>
        <div className="header-content">
            <div className="left-content">
                <h1>
                    Acer Pro 15.6" Full HD
                </h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem nulla tempore reprehenderit quaerat labore quos?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt.
                </p>
                <div className="cta-btns">
                    <a href="#" className='btn'>Join Now</a>
                    <a href="#" className='btn cta'>Message Us</a>
                </div>
            </div>
            <div className="right-content">
                <img src={laptop} alt="" />
            </div>
        </div>
        <div className="bg-overlay"></div>
        <div className="dots">
            <div className="dot dot-1"></div>
            <div className="dot dot-2"></div>
            <div className="dot dot-3"></div>
        </div>
    </HeadeStyled>
  )
}

const HeadeStyled = styled.header`
    width: 100%;
    height: 100%;
`;

export default Header
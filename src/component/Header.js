import React from 'react'
import styled from 'styled-components'
import laptop from '../img/laptop.png'
import { useTheme, useThemeUpdate } from '../Context/themeContext'
import colorThemes from '../colorThemes'
/*eslint-disable */

function Header() {
    const theme = useTheme();
    const setTheme = useThemeUpdate();
  return (
    <HeadeStyled theme={theme}>
        <div className="bg-overlay"></div>
        <nav className="navigation">
            <div className="logo">
                <h1>Grav T</h1>
            </div>
            <ul className="nav-items">
                <li><a href="#">About</a></li>
                <li><a href="#">Blogs</a></li>
                <li><a href="#">Gallery</a></li>
                <li><a href="#">Join</a></li>
                <li>
                    {
                        colorThemes.map((theme, i) => {
                            return <button 
                                key={i}
                                onClick={() => setTheme(i)}
                                style={{backgroundColor: theme.background}}
                            >

                            </button>
                        })
                    }
                </li>
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
    padding: 2rem 140px;
    transition: all .3s ease-in-out;
    color: ${props => props.theme.secondary};
    
    .navigation {
        display: flex;
        justify-content: space-between;
        align-items: center;
        .logo {
        h1 {
            font-size: 2rem;
            font-weight: 800;
        }
    }
        .nav-items {
            display: flex;
            align-items: center;
            li {
                margin: 0 1.5rem;
                a {
                    color: #718096;
                }
                button {
                    outline: none;
                    border: none;
                    width: 30px;
                    height: 30px;
                    border-radius: 50%;
                    cursor: pointer;
                    background: none;
                    &:not(:last-child) {
                        margin-right: .4rem;
                    }
                }
            }
        }
    }

    .header-content {
        display: grid;
        grid-template-columns: 1fr 1fr;
        margin-top: 70px;
        .left-content {
            width: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            h1 {
                font-size: 2.5rem;
                font-weight: 800;
                color: ${props => props.theme.title};
            }
            p {
                margin: 2rem 0;
            }
            .cta-btns {
                display: flex;
                a {
                    padding: 0.7rem 2rem;
                    font-weight: initial;
                    color: #fff;
                    border-radius: 35px;
                    &:not(:first-child) {
                        margin-left: 1.4rem;
                        border: 1px solid ${props => props.theme.primary};
                    }
                    &:first-child {
                        background-color: ${props => props.theme.primary};
                    }
                }
            }
        }
        .right-content {
            position: relative;
            width: 100%;
            img {
                width: 100%;
                filter: drop-shadow(1px 2px 10px ${props => props.theme.primary});
            }
        }
    }

    .bg-overlay {
        position: absolute;
        left: 0;
        top: 0;
        height: 100%;
        width: 100%;
        z-index: -1;
        clip-path: polygon(0 0, 48% 0, 85% 100%, 0 100%);
        background: ${props => props.theme.background};
    }

    .dots {
        position: absolute;
        left: 50%;
        bottom: 7%;
        transform: translateX(-50%);
        display: flex;
        opacity: 0.8;
        .dot {
            width: 20px;
            height: 20px;
            border-radius: 50%;
            margin: 0 1px;
            background-color: #fff;
        }
        .dot-1 {
            margin-right: 1px;
        }
        .dot-2, .dot-3 {
            transform: scale(0.85);
            background-color: #D7C4C4;
        }
    }
`;

export default Header
import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from 'reactstrap';
import './index.scss';

function Header() {
    const logo = require(`../../assets/images/logo.svg`).default
    const github = require(`../../assets/images/github.svg`).default
    const twitter = require(`../../assets/images/twitter.svg`).default
    const discord = require(`../../assets/images/discord.svg`).default

    return (
        <header className='common-under-line'>
            <Container>
                <div className="header">
                    <div className="header-logo">
                        <img src={logo} alt="logo"/>
                    </div>
                    <div className='header-button'>
                        <div className="header-button-link">
                            <Link to="/photo">Docs</Link>
                        </div>
                        <div className="header-button-link">
                            <Link to="/cart">Blog</Link>
                        </div>
                        <div className="header-button-link">
                            <Link to="/task">Users</Link>
                        </div>
                        <div className="header-button-link">
                            <Link to="/">Enterprise</Link>
                        </div>
                        <div className="header-button-link">
                            <Link to="/">Feedback</Link>
                        </div>
                        <div className="header-button-link">
                            <img src={github} alt="github-logo"/>
                        </div>
                        <div className="header-button-link">
                            <img src={twitter} alt="twitter-logo"/>
                        </div>
                        <div className="header-button-link">
                            <img src={discord} alt="discord-logo"/>
                        </div>
                    </div>
                </div>
            </Container>
        </header>
    );
}

export default Header;
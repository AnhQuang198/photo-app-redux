import React from 'react';
import { Container } from 'reactstrap';
import './index.scss';

function Footer() {
    const logoSm = require(`../../assets/images/logo-small.svg`).default

    return (
        <footer className='footer'>
            <Container>
                <div className="footer-content">
                    <div className="footer-content-resource col-3">
                        <div className="footer-content-title">
                            <span>RESOURCES</span>
                        </div>
                        <div className="footer-content-text">
                            <span>Docs</span>
                            <span>Learn</span>
                            <span>Guides</span>
                            <span>API Reference</span>
                            <span>Blog</span>
                        </div>
                    </div>
                    <div className="footer-content-community col-3">
                        <div className="footer-content-title">
                            <span>COMMUNITY</span>
                        </div>
                        <div className="footer-content-text">
                            <span>User Showcase</span>
                            <span>Funding</span>
                            <span>Community Chat</span>
                            <span>Project Forum</span>
                            <span>Releases</span>
                        </div>
                    </div>
                    <div className="footer-content-about-me col-3">
                        <div className="footer-content-title">
                            <span>ABOUT FORMIUM</span>
                        </div>
                        <div className="footer-content-text">
                            <span>Home</span>
                            <span>GitHub</span>
                            <span>Twitter</span>
                            <span>Contact Sales</span>
                        </div>
                    </div>
                    <div className="footer-content-contact col-3">
                        <div className="footer-content-title">
                            <span>SUBSCRIBE TO OUR NEWSLETTER</span>
                        </div>
                        <div className="footer-content-text">
                            <span>The latest Formik news, articles, and resources, sent to your inbox.</span>
                        </div>
                    </div>
                </div>
                <div className='footer-copyright'>
                    <img src={logoSm} alt="logo-small"/>
                    <span className="footer-copyright-text">
                        Copyright © 2022 Formium, Inc. All rights reserved.
                    </span>
                </div>
            </Container>
        </footer>
    );
}

export default Footer;
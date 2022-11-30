import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import {NavLink} from 'react-router-dom';

function Header() {
    return (
        <header className="header">
            <Container>
                <Row className="justify-content-between">
                    <Col>
                        <h3>Demo</h3>
                    </Col>
                    <Col>
                        <NavLink
                            to="/"
                        >
                            Back
                        </NavLink>
                    </Col>
                </Row>
            </Container>
        </header>
    );
}

export default Header;
import React, { Fragment } from "react";
import { Column, Row } from "simple-flexbox";
import { Nav, Jumbotron, Container } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.css';
import "./Header.css";


class Header extends React.Component {
    render() {
      return (
        <Fragment className="header">
        
        <Nav className="justify-content-center nav">
            <Nav.Item as="li">
              <Nav.Link href="/home">Skills</Nav.Link>
            </Nav.Item>
              <Nav.Item as="li">
            <Nav.Link eventKey="link-1">Projects</Nav.Link>
              </Nav.Item>
            <Nav.Item as="li">
              <Nav.Link eventKey="link-2">Contact</Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Nav.Link eventKey="link-2">Resume</Nav.Link>
            </Nav.Item>
      </Nav>
        <Jumbotron className="jumbotron" fluid>
        <Container>
            <h1 className="header-title">I am Arek Chatmajian</h1>
            <p className="header-text">I am a UX-Focused Web Developer with a knack for creativity and front-end development, leveraging a UX and UI background to apply a user-centric design approach as a proponent for end users. </p>
            <hr></hr>
            <Container>
            <Row horizontal='center'>
            <a className="social-link" href="https://www.linkedin.com">Linked In  </a>
            <a className="social-link" href="https://www.github.com">GitHub</a>
            <a className="social-link" href="https://www.medium.com">  Medium</a>
            </Row>
            </Container>
        </Container>

        </Jumbotron>

      </Fragment>
      );
    }
  }


export default Header;
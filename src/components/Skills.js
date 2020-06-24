import React, { Fragment } from "react";
import { Column, Row } from "simple-flexbox";
import { Nav, Jumbotron, Container, Card, Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.css';
import "./Skills.css";


class Skills extends React.Component {
    render() {
      return (
        <Fragment className="skills-container">
        
        <Row className="skills" horizontal="space-between">
        
        <Card className="skill-card" style={{ width: '20rem' }}>
        <Card.Body>
            <h3>Design</h3>
            <p>User Experience & User Interface</p>
            {/* <p>UX and UI both involve planning and iterating a site's structure and layout before development begins. This process focuses on maximizing usability to make a user's interaction as simple, efficient, and intuitive as possible.</p> */}
            <h3>Tools:</h3>
            <Column>
                <p className="tools">Figma</p> 
                <p className="tools">Sketch</p>
                <p className="tools">Adobe XD</p>
                {/* <p className="tools">Photoshop</p>
                <p className="tools">Illustrator</p> */}
                <p className="tools">Omnigraffle</p>
            </Column>
        </Card.Body>
        </Card>

        <Card className="skill-card" style={{ width: '20rem' }}>
        <Card.Body>
            <h3>Front End</h3>
            <p>HTML5, CSS, JavaScript, ReactJS</p>
            {/* <p>Front-End Development involves coding everything that users visually see in their browser or application, essentially the visual components of a website. By creating a graphical interface, this is how users view and interact with a website’s data. </p> */}
            <h3>Tools:</h3>
            <Column>
                <p className="tools">jQuery</p>
                <p className="tools">Bootstrap</p>
                <p className="tools">Bulma</p>
                <p className="tools">Materialize</p>
                <p className="tools">Tailwind</p>
            </Column>
        </Card.Body>
        </Card>

        <Card className="skill-card" style={{ width: '20rem' }}>
        <Card.Body>
            <h3>Back End</h3>
            <p>NodeJS, Express, MySQL, MongoDB</p>
            {/* <p>Back-End Development involves coding primarily the unseen inner workings of a website consisting of a server, an application, and a database. This is how databases communicate information with your web browser. </p> */}
            <h3>Tools:</h3>
            <Column>
                <p className="tools">MySQL Workbench</p> 
                <p className="tools">Sequelize</p>
                <p className="tools">Robo 3T</p>
                <p className="tools">Mongoose</p>
                {/* <p className="tools">NPM</p>
                <p className="tools">Yarn</p> */}
            </Column>
        </Card.Body>
        </Card>

        </Row>

      </Fragment>
      );
    }
  }


export default Skills;
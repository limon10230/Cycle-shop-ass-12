import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './About.css'

const About = () => {
    return (
        <div id="about" className="about-title-container">
            <h3 className="title">About Our Shop</h3>
            <div className="about-container mx-auto mt-3">
                
                <Container>
                    <Row>

                        <Col className="mt-5" sm={8}>
                            <p className="detail">A bicycle, also called a bike or cycle, is a human-powered or motor-powered, pedal-driven, single-track vehicle, having two wheels attached to a frame, one behind the other. A bicycle rider is called a cyclist, or bicyclist.

                                Bicycles were introduced in the 19th century in Europe, and by the early 21st century, more than 1 billion were in existence.[1][2][3] These numbers far exceed the number of cars, both in total and ranked by the number of individual models produced.[4][5][6] They are the principal means of transportation in many regions. They also provide a popular form of recreation, and have been adapted for use as children's toys, general fitness, military and police applications, courier services, bicycle racing, and bicycle stunts.</p>
                            <br />
                            <br />
                            <br />
                           <Link to="/explore">
                                <Button variant="success">More</Button>
                           </Link>
                        </Col>
                        <Col sm={4}><img className="img" src={'https://images.unsplash.com/photo-1560928762-1c0eea9ab886?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXRodW1ibmFpbHx8NTA1Mjg3MXx8ZW58MHx8fHw%3D&dpr=2&auto=format&fit=crop&w=291.2&q=60'} alt="" /></Col>
                    </Row>

                </Container>
            </div>
        </div>
    );
};

export default About;
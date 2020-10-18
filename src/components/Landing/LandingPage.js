import React from 'react';

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const LandingContainer = () => {
    return ( 
        <Container className='landing-page-container'>
            <Row>
                <Col md={6} className='landing-col-left'>
                    <h2>Sodalyt</h2>
                </Col>
                <Col md={6} className='landing-col-right'>
                    <em>Modal</em>
                </Col>
            </Row>
        </Container>
     );
}
 
export default LandingContainer;
import React from 'react';
import logo from '../../assets/logo.png'
import SlideShow from './SlideShow'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'

const MissionStatement = `
Our Mission is to make the customer to professional relationships more meaningful. We do this through AI powered matching, finding you the right professional based on your need, and more importantly your personality.
`

const LandingContainer = (props) => {
    console.log(props)

    const pushToNewUserSignIn = () => {
        props.history.push('/test')
    }

    return ( 
        <Container className='landing-page-container'>
            <Row>
                {/* Left Column of the Landing Page */}
                {/* Top Down Presentation */}
                <Col md={6} className='landing-col-left'>

                    {/* Logo */}
                    <Row className='landing-header-strong'>
                       <img src={logo} className='logo-img' />
                    </Row>

                    {/* Slogan */}
                    <Row className='landing-header-text'>
                        <h4><em>Just Right</em></h4>
                    </Row>

                    {/* Mission Statement */}
                    <Row className='landing-header-para'>
                        <p>{MissionStatement}</p>
                    </Row>

                    {/* Tag Line */}
                    <Row>
                        <p className='tag-line'>
                            Find the right professional for you, the first time. One that gets you.
                        </p>
                    </Row>

                    {/* Services Offered */}
                    <Row>
                        <strong>Browse Some of the Services Offered on our Platform!</strong>
                    </Row>

                    {/* Slide Show Modal */}
                    <Row className='landing-slide-show'>
                        <SlideShow></SlideShow>
                    </Row>
                </Col>

                {/* Right Column of the Landing Page */}
                <Col md={6} className='landing-col-right'>

                    {/* Card For Log In Navigation */}
                   <Card className='landing-portal-card'>
                     <Card.Header>
                         Getting Started at Sodalyt is Quick and Easy!
                     </Card.Header>
                     <Card.Body>
                         Getting Started is as easy as clicking a button!
                         <Row>
                             Google OAuth 
                         </Row>
                         <Row>
                             Don't Have One of Those ^ Accounts? No Problem! Select a button below to get started!
                         </Row>
                         <Row>
                             <button onClick={pushToNewUserSignIn}>New Customer User</button>
                         </Row>
                     </Card.Body>
                   </Card>
                </Col>
            </Row>
        </Container>
     );
}
 
export default LandingContainer;
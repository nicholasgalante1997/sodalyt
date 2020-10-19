import React from 'react';

import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

const StoryCard = (props) => {
    console.log(props)
    return ( 
        <div className='story-card'>
            <Card>
                <Card.Header>
                    <Card.Img src={props.story.thumbnailURL} alt='desc' 
                    className='story-image'/>
                    <Card.Title>{props.story.storyName}</Card.Title>
                </Card.Header>
                <Card.Footer>
                    <Button variant='primary'>Choose Me!</Button>
                </Card.Footer>
            </Card>
        </div>
     );
}
 
export default StoryCard;
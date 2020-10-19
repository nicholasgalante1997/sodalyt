import React, {useState} from 'react';

import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

const StoryCard = (props) => {

    const [showBack, toggleShowBack] = useState(false)

    const handleCardFlip = (event) => {
        toggleShowBack(!showBack)
    }

    console.log(props, showBack)

    const cardFront = () => {
        return (
            <Card>
            <Card.Header>
                <Card.Img src={props.story.thumbnailURL} alt='desc' 
                className='story-image'/>
                <Card.Title>{props.story.storyName}</Card.Title>
            </Card.Header>
            <Card.Footer>
                <Button variant='primary' onClick={() => props.handleStorySelect(props.id)}>Choose Me!</Button>
                <Button variant='warning' onClick={handleCardFlip}>Show Details</Button>
            </Card.Footer>
        </Card>
        )
    }

    const cardBack = () => {
        return (
            <Card>
            <Card.Header>
                <Card.Title>{props.story.storyName}</Card.Title>
            </Card.Header>
            <Card.Body>
                <em className='standard-text'>{props.story.desc}</em>
            </Card.Body>
            <Card.Footer>
                <Button variant='primary' onClick={() => props.handleStorySelect(props.id)}>Choose Me!</Button>
                <Button variant='warning' onClick={handleCardFlip}>Hide Details</Button>
            </Card.Footer>
        </Card>
        )
    }

    return ( 
        <div className='story-card'>
            { showBack ? cardBack() : cardFront()}
        </div>
     );
}
 
export default StoryCard;
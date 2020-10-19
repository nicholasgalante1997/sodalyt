import React, {useState} from 'react';
import {Link} from 'react-router-dom'
import StoryCard from './StoryCard'

import Atlantis from './StoryCardIcons/city.png'
import Mars from './StoryCardIcons/mars.png'
import Vegas from './StoryCardIcons/las-vegas.png'
import Lake from './StoryCardIcons/dock.png'

import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

const storyCollection = [
    {storyName: "Mission: Colonize Mars", 
    thumbnailURL: Mars, 
    desc: "You and the other pioneers on the maiden voyage of the Odyssey-241 have just touched down on the surface of mars, when your power supply suddenly fails!", 
    id: 1},
    {storyName: "Discovering Atlantis", 
    thumbnailURL: Atlantis, 
    desc: "On a discovery mission to study biomarine life near the ocean floor, you and your crew members discover what appears to be the lost City of Atlantis!", 
    id: 2},
    {storyName: "Vegas; Last Call", 
    thumbnailURL: Vegas, 
    desc: "You were nobody, a math teacher maybe, others say a real estate agent. Doesn't really matter, because you've just won the 26.2 million dollar Jackpot at the Bellagio, and now all of Vegas is yours.", 
    id: 3},
    {storyName: "Everest Adventure", 
    thumbnailURL: Lake, 
    desc: "This is it. The adventure you've been preparing for all of your life. Your bag is packed, your sherpa selected. It's time for Everest.",  
    id: 4},
]

const StoryCardContainer = (props) => {

    const [selectedStory, setSelectedStory] = useState({
        selectedStory: {}
    })

    const handleStorySelect = (id) => {
        setSelectedStory({
            selectedStory: storyCollection[id]
        })
    }

    const STORYGREETING = `Let's get you started! 
    We here at Sodalyt are all about setting you up in the best possible way with our experts, 
    so your time and efforts, and more importantly your money, are all put to good use, 
    and you can sleep a little easier at night. That's what our team is all about. 
    So in order to do that and best help you, we just need a little info about you first. But don't worry! We made it fun.
    Pick a choose your own adventure story below while we craft a personality type for you :)   
    It wont take more than two minutes, scout's honor.
    `
    console.log(selectedStory, "In the Story Card Container")
    return ( 
        <div>
            <Container className='story-card-container'>
                <h4>Story Cards</h4>
                <Row>
                    <p>{STORYGREETING}</p>
                </Row>
                <Row>
                    {storyCollection.map(story => (<StoryCard 
                    key={story.id}
                    story={story} 
                    id={story.id} 
                    handleStorySelect={handleStorySelect}
                    />))}
                </Row>
            <Link to={{
                pathname: '/stories/alt',
                state: {stateTest: "Im passing this object through React Router Dom"}
            }}>Not a fan of the choose your own adventure format? No worries. Take this quick survey and we'll handle the rest.</Link>
            </Container>
        </div>
     );
}
 
export default StoryCardContainer;
import React, {useState} from 'react';
import StoryCard from './StoryCard'

import Atlantis from './StoryCardIcons/city.png'
import Mars from './StoryCardIcons/mars.png'
import Vegas from './StoryCardIcons/las-vegas.png'
import Lake from './StoryCardIcons/dock.png'

import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

const storyCollection = [
    {storyName: "Mission: Colonize Mars", thumbnailURL: Mars, desc: "", id: 1},
    {storyName: "Discovering Atlantis", thumbnailURL: Atlantis, desc: "", id: 2},
    {storyName: "Vegas; Last Call", thumbnailURL: Vegas, desc: "", id: 3},
    {storyName: "Weekend Getaway", thumbnailURL: Lake, desc: "",  id: 4},
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

    return ( 
        <div>
            <Container>
                <h4>Story Cards</h4>
                <Row>
                    <p>{STORYGREETING}</p>
                </Row>
                <Row>
                    {storyCollection.map(story => (<StoryCard 
                    story={story} 
                    id={story.id} 
                    />))}
                </Row>
            </Container>
        </div>
     );
}
 
export default StoryCardContainer;
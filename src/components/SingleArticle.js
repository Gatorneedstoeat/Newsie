import React from 'react';
import { Card } from 'react-bootstrap';
import Moment from 'react-moment';
// import ScrollAnimation from 'react-animate-on-scroll';

const SingleArticle = ({ item }) => {

    //trunc the card text if bigger than n
    let description;
    let title;
    let descStrlen = 100;
    let titleStrlen = 75;
    //trunc description
    if(item.description && item.description.length > descStrlen){
        description = `${item.description.substring(0,descStrlen)} ...`;
    }
    else{
        description = item.description;
    }
    //trunc title
    if(item.title && item.title.length > titleStrlen){
        title = `${item.title.substring(0,titleStrlen)} ...`;
    }
    else{
        title = item.title;
    }

    let date = new Date(item.publishedAt);
    return (
  
            <a href={item.url} target="_blank" rel="noopener noreferrer">
                <Card>
                    <Card.Img variant="top" src={item.urlToImage} alt={title} height="200" />
                    <Card.Body>
                        <Card.Title>{title}</Card.Title>
                        <Card.Text>
                            {description}
                        </Card.Text>
                        <Card.Text>
                            <Moment format="YYYY-MM-DD" >{date}</Moment>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </a>
     
    )

}

export default SingleArticle
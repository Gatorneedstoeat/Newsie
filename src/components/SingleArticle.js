import React from 'react';
import { Card } from 'react-bootstrap';
// import ScrollAnimation from 'react-animate-on-scroll';

const SingleArticle = ({ item }) => {

    //trunc the card text if bigger than n
    let description;
    let title;
    let strlen = 50;
    if(item.description && item.description.length > strlen){
        description = `${item.description.substring(0,strlen)} ...`;
    }
    else{
        description = item.description;
    }
    if(item.title && item.title.length > strlen){
        title = `${item.title.substring(0,strlen)} ...`;
    }
    else{
        title = item.title;
    }
    return (
  
            <a href={item.url} rel="noopener noreferrer">
                <Card>
                    <Card.Img variant="top" src={item.urlToImage} alt={title} height="200" />
                    <Card.Body>
                        <Card.Title>{title}</Card.Title>
                        <Card.Text>
                            {description}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </a>
     
    )

}

export default SingleArticle
import React from 'react';
import {Card} from 'react-bootstrap';

const SingleArticle = ({ item }) => {
    
        return(
    <Card>
        <Card.Img variant="top" src={item.urlToImage} alt={item.title}/>
        <Card.Body>
            <Card.Title>{item.title}</Card.Title>
            <Card.Text>
                {item.description}
            </Card.Text>
        </Card.Body>
    </Card>
        )

}

export default SingleArticle
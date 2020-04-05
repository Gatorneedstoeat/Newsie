import React from 'react';
import { Card } from 'react-bootstrap';
import ScrollAnimation from 'react-animate-on-scroll';

const SingleArticle = ({ item }) => {

    return (
        <ScrollAnimation animateIn="slideInUp" animateOnce={true}>
            <a href={item.url} rel="noopener noreferrer">
                <Card>
                    <Card.Img variant="top" src={item.urlToImage} alt={item.title} />
                    <Card.Body>
                        <Card.Title>{item.title}</Card.Title>
                        <Card.Text>
                            {item.description}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </a>
        </ScrollAnimation>
    )

}

export default SingleArticle
import React from 'react';
import { Container } from 'react-bootstrap';
import NewsArticles from '../components/NewsArticles';

class News extends React.Component {
    
    render() {
        return (
            <Container fluid id="newsSection">
                <NewsArticles url={this.props.url} />
            </Container>
        )
    }
}



export default News
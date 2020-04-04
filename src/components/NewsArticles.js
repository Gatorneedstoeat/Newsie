import React from 'react';
import { CardColumns,Container } from 'react-bootstrap';
import SingleArticle from './SingleArticle';
import axios from 'axios';

class NewsArticles extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            news: []
        };
    }

    componentDidMount() {
        axios.get(`https://newsapi.org/v2/top-headlines?country=us`, { 'headers': { 'x-api-key': '3e018690ee5f430da3e46a329a591eb1' } })
            .then(res => {
                const data = res.data;
                this.setState({
                    news: data.articles
                });
            })
            .catch((error) => console.log(error));
    }

    renderArticles() {
        return this.state.news.map((item,keys) => (
            <SingleArticle key={keys} item={item} />
        ));
    }

    render() {
        return (
            
            <Container>
                <CardColumns>
                    {this.renderArticles}
                </CardColumns>
            </Container>
        );
    }
}

export default NewsArticles
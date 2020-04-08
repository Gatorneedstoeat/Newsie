import React from 'react';
import { CardColumns } from 'react-bootstrap';
import SingleArticle from './SingleArticle';
import axios from 'axios';

class NewsArticles extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            url:"https://newsapi.org/v2/top-headlines?country=us",
            news: [],
        };
    }

    componentDidMount = () => {
        axios.get(`${this.state.url}`, { 'headers': { 'x-api-key': '3e018690ee5f430da3e46a329a591eb1' } })
            .then(res => {
                const data = res.data;
                this.setState({
                    news: data.articles
                });
            })
            .catch((error) => console.log(error));
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevState.news !== this.state.news) {
          console.log(this.state.news);
        }
      }

    renderArticles = () => {
        return this.state.news.map((item,keys) => (
            <SingleArticle key={keys} item={item} />
        ));
    }

    render() {
        return ( 
            
                <CardColumns className="m-4">
                    {this.renderArticles()}
                </CardColumns>
            
        );
    }
}

export default NewsArticles
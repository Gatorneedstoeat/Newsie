import React from 'react';
import { CardColumns } from 'react-bootstrap';
import axios from 'axios';
import SingleArticle from './SingleArticle';


class NewsArticles extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            news: [],
        };
    }

    getNews = () => {
        axios.get(encodeURI(`https://newsapi.org/v2/${this.props.url.type}${this.props.url.query}`), { 'headers': { 'x-api-key': '3e018690ee5f430da3e46a329a591eb1' } })
        .then(res => {
            this.setState({
                news: res.data.articles
            });
        })
        .catch((error) => console.log(error));
    }

    componentDidMount = () => {
       this.getNews();
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.url !== this.props.url) {
          this.getNews();
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
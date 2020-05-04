import React from 'react';
import NewsArticles from '../components/NewsArticles';

class News extends React.Component {

    render() {
        return (
            <NewsArticles url={this.props.url} />
        )
    }
}



export default News
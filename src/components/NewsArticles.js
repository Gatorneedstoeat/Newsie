import React from 'react';
import axios from 'axios';
import SingleArticle from './SingleArticle';


class NewsArticles extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            news: [],
            loading: false,
        };
    }

    getNews = () => {
        this.setState({ loading: true });
        axios.get(encodeURI(`https://newsapi.org/v2/${this.props.url.type}${this.props.url.query}`), { 'headers': { 'x-api-key': '3e018690ee5f430da3e46a329a591eb1' } })
            .then(res => {
                this.setState({
                    news: [...res.data.articles]
                });
                this.setState({ loading: false });
            })
            .catch((error) => console.log(error));
    }
    getMoreNews = () => {
        this.setState({ loading: true });
        axios.get(encodeURI(`https://newsapi.org/v2/${this.props.url.type}${this.props.url.query}`), { 'headers': { 'x-api-key': '3e018690ee5f430da3e46a329a591eb1' } })
            .then(res => {
                this.setState({
                    news: this.state.news.concat([...res.data.articles])
                });
                this.setState({ loading: false });
            })
            .catch((error) => console.log(error));
    }
    //get the default news onload
    componentDidMount = () => {
        this.getNews();
    }
    //if the new url !== the old load that
    componentDidUpdate(prevProps, prevState) {
        if (prevProps.url !== this.props.url) {
            this.getNews();
        }
    }

    renderArticles = () => {
        return this.state.news.map((item, keys) => (
            <SingleArticle key={keys} item={item} />
        ));
    }

    render() {
        // Additional css
        const loadingCSS = {
            height: "100px",
            margin: "30px"
        };

        // To change the loading icon behavior
        const loadingTextCSS = { display: this.state.loading ? "block" : "none" };

        return (

            <div className="flex-container">
                <div className="d-flex flex-wrap align-items-center justify-content-center flex-news">
                    {this.renderArticles()}

                </div>
                <div
                    ref={loadingRef => (this.loadingRef = loadingRef)}
                    style={loadingCSS}
                >
                    <span style={loadingTextCSS}>Loading...</span>
                </div>
            </div>


        );
    }
}

export default NewsArticles
import React from 'react';
import axios from 'axios';
import SingleArticle from './SingleArticle';


class NewsArticles extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            news: [],
            loading: false,
            page: 1,
            prevY: 0,
            allResults: false

        };
    }

    getNews = (page = 1) => {
        //less then 5 pages are loading and all the results havent been returned load another(api limit)
        if (this.state.page <= 4 && !this.state.allResults) {
            this.setState({ loading: true });
            axios.get(encodeURI(`https://newsapi.org/v2/${this.props.url.type}${this.props.url.query}&page=${page}`), { 'headers': { 'x-api-key': '3e018690ee5f430da3e46a329a591eb1' } })
                .then(res => {
                    //if the results have add to array else set allResults true
                    if (res.data.articles.length) {
                        this.setState({
                            news: this.state.news.concat([...res.data.articles])
                        });
                    }
                    else {
                        this.setState({ allResults: true });
                    }
                    //hide loading div
                    this.setState({ loading: false });
                })
                .catch((error) => console.log(error));
        }
    }
    //when the observer fires handle it by setting new y point and getting the next page of news
    handleObserver(entities, observer) {
        const y = entities[0].boundingClientRect.y;
        if (this.state.prevY > y) {
            observer.unobserve(this.loadingRef);
            //get the next page of news
            this.getNews(this.state.page + 1);
            //set the page state to current displayed page
            this.setState({ page: this.state.page + 1 },()=>{
                observer.observe(this.loadingRef);
            });
        }
        this.setState({ prevY: y });;
    }
    //get the default news onload
    componentDidMount = () => {
        this.getNews();
        var options = {
            root: null,
            rootMargin: "0px",
            threshold: 1.0
        };
        //create an observer to listen for the intersection of the loadingRef div at the bottom of the news div
        this.observer = new IntersectionObserver(
            this.handleObserver.bind(this),
            options
        );
        this.observer.observe(this.loadingRef);

    }


    //if the new url !== the old load that
    componentDidUpdate(prevProps, prevState) {
        if (prevProps.url !== this.props.url) {
            //reset the page and news if the url changes 
            this.setState({
                page: 1,
                news: [],
                allResults: false,
                prevY:0,
            },() => {this.getNews()});
            //get the defult news for the url
            
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
            textAlign:"center",
            margin: '20px auto',
            display: this.state.loading ? "block" : "none",
            fontSize:"2em"
            
        };

        return (

            <div className="flex-container">
                <div className="d-flex flex-wrap align-items-center justify-content-center flex-news">
                    {this.renderArticles()}

                </div>
                <div
                    ref={loadingRef => (this.loadingRef = loadingRef)}
                >
                    <span style={loadingCSS}>Loading...</span>
                </div>
            </div>


        );
    }
}

export default NewsArticles
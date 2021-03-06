import React from 'react';
import './css/App.scss';
import 'animate.css/animate.min.css';
import NavBar from './sections/NavBar';
import News from './sections/News';
import Footer from './sections/Footer';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      url: {
        type: "top-headlines",
        query: "?country=us"
      }
    }
  }

  handleCustomSearch = (search) => {
    this.setState({
      url: {
        type: "everything",
        query: `?q=${search}`
      }
    });
  }

  handleCategory = (category) => {
    this.setState({
      url: {
        type: "top-headlines",
        query: `?category=${category}&country=us`
      }
    })
  }
  handleEverything = () => {
    this.setState({
      url: {
        type: "top-headlines",
        query: `?country=us`
      }
    })
  }

  render() {
    return (
      <div className="App">
        <NavBar
          customSearch={this.handleCustomSearch}
          category={this.handleCategory}
          everything={this.handleEverything}
        />
        <News url={this.state.url} />
        <Footer />
      </div>
    );
  }
}

export default App;

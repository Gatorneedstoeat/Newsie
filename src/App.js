import React from 'react';
import './css/App.scss';
import 'animate.css/animate.min.css';
import NavBar from './sections/NavBar';
import News from './sections/News';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleCustomSearch = this.handleCustomSearch.bind(this);
    this.state = {
      url: {
        type: "top-headlines",
        query: "?country=us"
      }
    }
  }

  handleCustomSearch(search){
    this.setState({
      url:{
        type:"everything",
        query:`:?q=${search}`
      }
    });
    console.log(`new state ${this.state.url.query} and ${this.state.url.type} and ${search}`);
  }

  render() {
    return (
      <div className="App">
        <NavBar onCustomSearch={this.handleCustomSearch}/>
        <News url={this.state.url} />
      </div>
    );
  }
}

export default App;

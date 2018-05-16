import React, { Component } from 'react';
import './App.css';
import News from './News/News';
import { concat, sortBy, map, sample , shuffle} from 'lodash'
// import concat from 'lodash/concat';

class App extends Component {
  constructor(props){
  	super(props);
  	this.state = {
      newsCategory : ['top-headlines?sources=bbc-news', 'top-headlines?country=de&category=business', 'top-headlines?q=trump', 'everything?q=apple&from=2018-05-15&to=2018-05-15&sortBy=popularity','everything?q=reactjs']
    };

  }

randomTopics(){
  console.log(this.state.newsCategory);
  const sh = shuffle(this.state.newsCategory);
  return shuffle(this.state.newsCategory);
}

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to News Feed API</h1>
        </header>
        <News topic={shuffle(this.state.newsCategory)[0]}/>
      </div>
    );
  }
}

export default App;

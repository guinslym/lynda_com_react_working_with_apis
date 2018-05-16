import React,{Component} from 'react';
import NewSingle from './NewSingle'

export default class News extends Component {

constructor(props){
	super(props);
	this.state = {
    news: [],
  };
}

componentDidMount() {
  const url='https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=d5cf45043cd34b59b432df10e3cef274';

  fetch(url)
  .then((response)=> {
    //When You receive a response do this; return it as JSON
    return response.json()
  }).then((data) =>{
    // Whatever is return
    this.setState({
      news:data.articles
    })
  }).catch((error)=>{
    // if there is error
    console.log(error)
  })

}

renderItems(item){
  return this.state.news.map((item)=> (
    <NewSingle key={item.url} item={item} />
  ));
}
    render() {
        return (
            <div className="row">
              {this.renderItems()}
            </div>
        );
    }
}

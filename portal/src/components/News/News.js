import React,{Component} from 'react';
import NewSingle from './NewSingle'
import { concat, sortBy, map, sample , shuffle} from 'lodash'

export default class News extends Component {

constructor(props){
	super(props);
	this.state = {
    news: [],
  };
}
// _.shuffle([1, 2, 3, 4]);
// var other = _.concat(array, 2, [3], [[4]]);


componentDidMount() {
  const url= `https://newsapi.org/v2/${this.props.topic}&apiKey=d5cf45043cd34b59b432df10e3cef274`;

	console.log(url)

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

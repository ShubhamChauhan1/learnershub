import React, { Component } from 'react'
import Newsitem from './Newsitem'

export default class News extends Component {
    constructor(){
        super();
        this.state = {
            articles : this.articles,
            loading : false
        }
    }

    componentDidMount(){
        let url = "https://official-joke-api.appspot.com/random_joke";
        let data = fetch(url);
        let 

    }
  render() {
    return (
      <div className='container my-3'>
        <h2>Today's top headlines</h2>
        <div className = "row">
        </div>
        <Newsitem/>
      </div>
    )
  }
}

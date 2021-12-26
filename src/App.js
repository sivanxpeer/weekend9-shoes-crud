import React, { Component } from 'react';
import dataApi from './DataApi/DataApi';

export default class App extends Component {
  constructor(props){
    super(props);
    
    this.state={
      newItem:"",
      list:[ ]
    }
  }
  componentDidMount = async () => {
    try {
      const { data } = await dataApi.get('/products');
      console.log(data);
    } catch (error) {
      console.log(error.message);
    }
  }

  render() {
    return (<div className='App'></div>);
  }
}

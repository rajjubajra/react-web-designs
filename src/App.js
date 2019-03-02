import React, { Component } from 'react';
import MainPage from './components/MainPage/MainPage';
import events from 'events';
import ajax from './ajax';
import Loading from './Loading';

import './App.css';



// Create an emitter object so that we can do pub/sub
const emitter = new events.EventEmitter();


class App extends Component {

  constructor() {
    super()
    this.state = {
      images: [],
      isLoaded: false
    }
    this.refresh = this.refresh.bind(this)
  }

  componentWillMount() {
    emitter.addListener('NODE_UPDATED', this.refresh)
  }

  componentWillUnmount() {
    emitter.addListener('NODE_UPDATED', this.refresh)
  }

  async componentDidMount() {
    await this.refresh()
  }

  async refresh() {
    // AJAX fetch server/node/rest?_format=json and setState with the response data
    try {
      const axios = await ajax() // wait for an initialized axios object
      const response = await axios.get('/rest/images') // wait for the POST AJAX request to complete
      if (response.data) {
        // setState will trigger repaint
        this.setState({ 
                        images: response.data, 
                        isLoaded: true
                      })
      }
      } catch (e) {
      alert(e)
    }
  }


  render(){
    return(
      <div>
        {this.state.isLoaded == true 
        ? 
        <MainPage images={this.state.images} />
        :
        <Loading />
        }
      </div>
    )
  }

  
}

export default App;

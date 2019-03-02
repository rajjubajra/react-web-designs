import React, { Component } from 'react';
import events from 'events';
import ajax from '../../ajax';
import styled from 'styled-components';


const Page = styled.div`
display: flex;
  section{
      display: flex;
      flex-wrap: wrap;
      margin: var(--standard-margin);
  }
  

  img{
    width: 250px;
    border:1px solid #ccc;
    margin: 10px;
  }
`;

// Create an emitter object so that we can do pub/sub
const emitter = new events.EventEmitter();


class ImgLab extends Component {
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
    
    const url = 'https://yellow-website.com'
    const images = this.state.images.map((img)=> {
        if(img.field_image_category == "Background Image"){  
            return(    
              <div key={img.nid}>
                   <img src={url + img.field_image_rest_api} alt={img.field_image_category} title={img.field_image_category} />
                   <p>{img.field_image_name}</p>
              </div>)
        }
    });

    const logo = this.state.images.map((logo)=>{
      if(logo.field_image_category == 'Logo'){
          return(
              <div key={logo.nid}>
                   <img src={url + logo.field_image_rest_api} alt={logo.field_image_category} title={logo.field_image_category} />
                   <p>{logo.field_image_name}</p>
              </div>)
      }
    });


    
    return(
      <Page>
        <section>
          <h3>Logo</h3>
          {this.state.isLoaded == true ? logo : 'Loading....'}
          <h3>Background Images</h3>
          {this.state.isLoaded == true ? images : 'Loading....'}
        </section>
        
      </Page>
    )
  }
  
  
}

export default ImgLab;

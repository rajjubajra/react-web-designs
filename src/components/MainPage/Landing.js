import React from 'react';
import styled from 'styled-components';

const Page = styled.div`
  width: 100%
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #999;

  #myDIV {
    height: 250px;
    width: 250px;
    overflow: auto;
  }
  
  #content {
    height: 800px;
    width: 2000px;
    background-color: coral;
    color: #000;
  }

`;


class Landing extends React.Component{
 

  render(){

    return(
      <Page>
     
        
        
        <h1>Welcome..</h1>
      </Page>
    )
  }

}
export default Landing;
import React from 'react';
import styled from 'styled-components';

const Page = styled.div`
width: 100%;
display:flex;
margin-bottom: 100px;

section{
  display:flex;
  width: 100%;
  margin:var(--standard-margin);  
}

div.text{
  width: 45%;
  text-align: center;
}

div.template{
  width: 55%;
  display: flex;
  justify-content: center;
  align-items:center;

   i{
    width: 80%;
    height: 300px;
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
   }
  
  .fas{
    font-weight: 900;
    font-size: 5rem;
    text-align: center;
    width: 100%;
    color: slategrey;
    opacity: .5;
    text-shadow: 1px 1px 0px #000;
  }
}




`;

class Websites extends React.Component{

  render(props){

  const  bgImage = this.props.responsive_web;

    return(
      <Page>
        <section>
            <div className="template">
              <i style={{backgroundImage:`url("${bgImage}")`}}></i>
            </div>
            <div className="text">
              <h3>Websites</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus error excepturi numquam, non dolore.</p>
              <a className="button" href="#" target="_blank">View More</a>
            </div>
        </section>
      </Page>
    )
  }
}
export default Websites;
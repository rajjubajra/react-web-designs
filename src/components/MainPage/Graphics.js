import React from 'react';
import styled from 'styled-components';

const Page = styled.div`
display:flex;
width: 100%;
margin-bottom: 100px;

section{
  display: flex;
  width: 100%;
  margin: var(--standard-margin);
}

div.text{
  width: 50%;
  text-align: center;
}

div.design{
  display: block;
  width: 50%;

    .fas, .fab{
      font-weight: 900;
      font-size: 5rem;
      text-align: center;
      width: 100%;
      color: slategrey;
      opacity: .5;
      text-shadow: 1px 1px 0px #000;
    }

    i{
      width: 80%;
      height: 300px;
      background-size: contain;
      background-position: center;
      background-repeat: no-repeat;
     }
    
  
}


`;


class Graphics extends React.Component{

  render(props){
    const bggImage = this.props.graphics;
    console.log('graphics image',bggImage);
    return(
      <Page>
        <section>
            <div className="text">
                <h3>Graphic Design</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus error excepturi numquam, non dolore.</p>
                <a className="button" href="#">View More</a>
          </div>
          <div className="design">
                 <i style={{backgroundImage:`url("${bggImage}")`}}></i>
          </div>
        </section>        
      </Page>

    )
  }
}
export default Graphics;
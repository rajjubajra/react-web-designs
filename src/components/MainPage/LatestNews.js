import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
width: 100%;
min-height: 500px;
display:flex;
flex-direction: column;
margin-bottom: 50px;

div.readmore-cards{
  display: flex;
   margin-left: var(--standard-margin);
   margin-right: var(--standard-margin);
}

h2{
  text-align: center;
}

a.read-all-button{
  margin: var(--standard-margin);
  align-self: flex-end;
}


.col{
  width: 31.33%;
  margin: 1%
}

.date{
  font-size: 0.7rem;
  font-weight: 100;
  text-transform: uppercase;
  letter-spacing: 0.3rem;
}
.img{
  width:100%;

  div{
    display: block;
    min-height: 200px;
    margin: 1%;
    background-color: var(--background-card);
  }
}



`; 

class LatestNews extends React.Component{

  render(){
    return(
      <Section>
        
          <h2>Latest News</h2>
          <a href="" className="read-all-button">Read All News Blog</a>
        
        
        <div className="readmore-cards">
            <div className="col">
              <div className="img"><div>Image</div></div>
              <div className="title"><h3>News Tilte One</h3></div>
              <div className="date">Feb 10, 2019</div>
              <div className="news"><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, corporis deserunt. Voluptates nobis consequuntur cupiditate assumenda error! Error quos similique tenetur officiis.</p></div>
              <a href="#" className="button">Read More</a>
            </div>
            <div className="col">
            <div className="img"><div>Image</div></div>
              <div className="title"><h3>News Tilte One</h3></div>
              <div className="date">Feb 10, 2019</div>
              <div className="news"><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, corporis deserunt. Voluptates nobis consequuntur cupiditate assumenda error! Error quos similique tenetur officiis.</p></div>
              <a href="#" className="button">Read More</a>
            </div>
            <div className="col">
            <div className="img"><div>Image</div></div>
              <div className="title"><h3>News Tilte One</h3></div>
              <div className="date">Feb 10, 2019</div>
              <div className="news"><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, corporis deserunt. Voluptates nobis consequuntur cupiditate assumenda error! Error quos similique tenetur officiis.</p></div>
              <a href="#" className="button">Read More</a>
            </div>
        </div>
      </Section>
    )
  }
}
export default LatestNews;
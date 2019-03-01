import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
width: 100%;
min-height: 100vh;
display: flex;
justify-content: space-between;
flex-wrap: no-wrap;
margin-bottom: 100px;
  
  div.col{
    width: 200px;
    display:flex;
    
    div.block{
      width: 95%;
      min-height: 150px;
      margin: 2.5%;
      display: flex;
      flex-direction: column;
      background-color: #f4f4f4;
      justify-content:center;
    }
  }

  .fa, .fas, .fab, .far {
    font-weight: 900;
    font-size: 3rem;
    text-align: right;
    width: 100%;
    color: slategrey;
    opacity: .5;
    text-shadow: 1px 1px 0px #000;
}
`;


class ScrollingFeatures extends React.Component{

  render(){
    return(
      <Section>
        <div className="col">
          <div className="block">
            <p><i className="fas fa-user-friends"></i></p>
            <h4>Friendly</h4>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui unde recusandae eveniet ut corporis.</p>
          </div>
        </div>
        <div className="col">
          <div className="block">
            <p><i className="fab fa-opencart"></i></p>
            <h4>Creative</h4>
            <p>Consectetur adipisicing elit. Aspernatur nostrum ullam eveniet aliquam voluptas numquam.</p>
          </div>
        </div>
        <div className="col">
          <div className="block">
            <p><i className="fas fa-apple-alt"></i></p>
            <h4>Professional</h4>
            <p>Ipsum dolor sit amet consectetur adipisicing elit. Ratione laboriosam, porro eveniet quam ex odit inventore in sequi.</p>
          </div>
        </div>
        <div className="col">
          <div className="block">
            <p><i className="fab fa-algolia"></i></p>
            <h4>Free Images</h4>
            <p>Adipisicing elit. Voluptate distinctio, mollitia aliquid dicta asperiores sint omnis facere dolores provident!</p>
            </div>
        </div>
        <div className="col">
          <div className="block">
            <p><i className="far fa-smile-wink"></i></p>
            <h4>Affordatble</h4>
            <p>Elit. Expedita et quos molestiae eaque numquam! Ea ratione sit maiores enim, sunt modi totam quisquam nam incidunt id.</p>
          </div>
        </div>
        <div className="col">
          <div className="block">
            <p><i className="fas fa-user-check"></i></p>
            <h4>Satisfaction</h4>
            <p>The ipsum dolor sit, amet consectetur adipisicing elit. Porro, nulla veniam libero officiis ducimus ex!</p>
          </div>
        </div>
      </Section>
    )
  }
}
export default ScrollingFeatures;
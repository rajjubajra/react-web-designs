import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
width: 100%;
min-height: 300px;
margin-bottom: 100px;
display: flex;
justify-content:center;
align-items: center;
background-color: var(--background-card);


div.form{
    text-align: center;
}
input[type='text']{
  padding: 10px;
  width: 200px;
  font-size: 0.9rem;
}
button{
    padding: 11px 24px;
    background-color: slategrey;
    font-size: 0.9rem;
    color: white;
}

`;


class Subscription extends React.Component{
  state = {
    sub: ''
  }

  render(){
    return(
      <Section>
        <div className="form">
          <h2>News letter subscription</h2>
          <form>
            <input type="text" name="subscription"  placeholder="Email address" />
           <button type="submit">Subscribe</button>
          </form>
        </div>
      </Section>
    )
  }
}
export default Subscription;
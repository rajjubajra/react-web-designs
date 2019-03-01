import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
width: 100%;
margin-bottom: 100px;

div.footer{
  width: 100%;
  display: flex;
  margin-left: var(--standard-margin);
  margin-right: var(--standard-margin);

  div.left{
    text-align: center;

  }
}

div.left, div.right{
   width: 50%;
}
`;

class Footer extends React.Component{

  render(){
    return(
      <Section>
        <div className="footer">
          <div className="left">
            <h3>Get Quotation:</h3>
            <a  target="_blank" className="button">Message us</a>
          </div>
          <div className="right">
              <div className="logo">Logo</div>
              <div className=""><p>+0 (00) 00000000</p></div>
              <div className="name"><h4>Yellow-Website</h4></div>
              <div className="add"><p>Address Lines</p></div>
          </div>
        </div>
        
      </Section>
    )
  }
}
export default Footer;
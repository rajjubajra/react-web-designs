import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
width: 100%;
min-height: 300px;
margin-bottom: 100px;

h2{
  text-align: center;
}

div.contact{
  margin-left: var(--standard-margin);
  margin-right: var(--standard-margin);
  display: flex;
}

.col{
  width: 31.33%;
  margin: 1%;
  height: 300px;
  display:flex;
  justify-content: center;
  align-items: center;
}

.icon{
    padding: 20px;
    margin: 10px;
    border: 1px solid #ccc;
    color: #7b7a7a;
}
.title{
  font-weight: 100;
    font-size: 0.7rem;
    -webkit-letter-spacing: 2px;
    -moz-letter-spacing: 2px;
    -ms-letter-spacing: 2px;
    letter-spacing: 2px;
    text-transform: uppercase;
    line-height: 1.5rem;
}
.text{
  font-weight: 100;
  letter-spacing: 1px;
  font-size: 0.9rem;
}






`;

class Contact extends React.Component{


  render(){
    return(
      <Section>
        <h2>Contact us</h2>
        <div className="contact">    
            <div className="col">
              <div className="icon"><i className="fas fa-phone"></i></div>
              <div>
                <div className="title">Telephone</div>
                <div className="text">+0 (00) 00000000</div>
              </div>
              
            </div>
            <div className="col">
              <div className="icon"><i className="fas fa-envelope"></i></div>
              <div>
                <div className="title">Email</div>
                <div className="text">email@example.com</div>
              </div>      
            </div>
            <div className="col">
              <div className="icon"><i className="fas fa-map-marked-alt"></i></div>
              <div>
                <div className="title">Address</div>
                <div className="text">001 Line Address, City, Country. Postcode</div>
              </div>        
            </div>
        </div> 
      </Section>
    )
  }
}

export default Contact;


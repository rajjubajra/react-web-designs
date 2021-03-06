import React from 'react';
import styled from 'styled-components';

const Page = styled.div`
width: 100%;
background-color: #f5f5f5;

section{
  display:flex;
  min-height: 100vh;
  align-items: center;
  padding: var(--standard-margin);
}


div{
  width: 50%;
}

ul.images{
  display:flex;
  justify-content: center;
}

ul.images > li{
    list-style: none;
    width: 25%;
    height: 250px;
    border: 0.5rem solid #fff;
    margin: 5px;
    box-shadow: 1px 1px 1px #3333334f;
    background-size: cover;
    background-position: center;
}

button{
    margin: 10px 20px;
    padding: 10px 20px;
    font-size: 0.8rem;
    text-transform: uppercase;
    letter-spacing: 0.5rem;
}

`;

class CallAction extends React.Component{

  render(props){
    const {v_1, v_2, v_3} = this.props;

    return(
      <Page>
        <section>
          <div>
            <h3>Are you looking for Web development</h3>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab hic dicta voluptatibus odit inventore asperiores sequi !</p>
            <p></p>
            <button>Contact us now</button>
          </div>
          <div>
            <ul className="images">
              <li style={{backgroundImage:`url("${v_1}")`}}></li>
              <li style={{backgroundImage:`url("${v_2}")`}}></li>
              <li style={{backgroundImage:`url("${v_3}")`}}></li>
            </ul>
          </div>
        </section>
      </Page>
    )
  }
}
export default CallAction;
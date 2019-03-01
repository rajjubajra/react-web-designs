import React from 'react';
import styled from 'styled-components';

const Page = styled.div`
width: 100%;
min-height: 90vh;
background-color: #f5f5f5;
display: -webkit-box;
display: -webkit-flex;
display: -ms-flexbox;
display: flex;
justify-content: space-evenly;
align-items: center;

section{
  margin-left: var(--standard-margin);
  margin-right: var(--standard-margin);
  display: flex;
  
}

div.col{
  width: 33.33%;
  display: flex;
  h2{
    align-self: center;
  }
  p{
    margin: var(--standard-margin);
  }
  
}
`;


class Aboutus extends React.Component{

  render(){
    return(
      <Page>
        <section>
            <div className="col">
              <h2>About us</h2>
            </div>
            <div className="col">
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur minima fuga alias facere assumenda ab pariatur. Quo id nisi cum unde, culpa molestiae maxime, explicabo dolore, ratione ducimus incidunt facere! Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, cumque aliquam. Repellat vel omnis, optio ea possimus nam laborum? Labore, ab autem? Cumque, dignissimos voluptatum? Voluptates aut dolorum omnis molestias?</p>
            </div>
            <div className="col">
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero suscipit delectus quibusdam maxime velit quos, magnam quia consequuntur perferendis earum corporis voluptates excepturi beatae aspernatur reiciendis quis esse enim quo? Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam sequi similique, tempora tenetur explicabo vero! Minima laboriosam quos sit excepturi veniam delectus itaque accusantium praesentium in. Dolore minus a pariatur.</p>
            </div>
        </section>
      </Page>
    )
  }
}
export default Aboutus;
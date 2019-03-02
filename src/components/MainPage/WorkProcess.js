import React from 'react';
import styled from 'styled-components';

const Page = styled.section`
    width: 100%;
    
    section{
      padding: var(--standard-margin);
      display:flex;
      min-height: 600px;
      justify-content: space-around;
      align-items: center;
      text-align: center;
    }
    

    div.col{
        width: 25%;
        text-align: center;

        div{
          margin-top: 20px;
          font-size: 0.9rem;
          text-transform: uppercase;
          font-weight: 100;
        }
    }

    .fab, .fas {
      font-size: 3rem;
      font-weight: 900;
      width: 80%;
      padding: 50px 0px;
      border: 1px solid #ccc;
      color: silver;
    }

`;

class WorkProcess extends React.Component{

  render(){
    return(
      <Page>
        <section>
            <div className="col">
                <h3>Work Process</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur quas magnam vitae quod veniam facere ad rerum veritatis, repellat dignissimos, sequi vero neque.</p>
            </div>
            <div className="col">
                <i className="fas fa-chalkboard-teacher"></i>
                <div>1 Plan</div>
            </div>
            <div className="col">
                <i className="fab fa-dev"></i>
                <div>2 Develop</div>
            </div>
            <div className="col">
                <i className="fas fa-cloud-upload-alt"></i>
                <div>3 Deploy</div>
            </div>
        </section>
        
      </Page>
    )
  }
}
export default WorkProcess;
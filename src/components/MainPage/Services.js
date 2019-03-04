import React from 'react';
import styled from 'styled-components';

const Page = styled.div`
  width: 100%;
  min-height: 100vh;
  display:block;

  section{
    padding:var(--standard-margin);
  }
  
                                      
  h2{
    text-align: center;
  }
  div.icons{
    margin: 50px 0px 80px 0px;
  }


  div.icons > ul {
    display: flex;
    justify-content: space-around;
    text-align: center;
  }
  div.icons > ul > li{
    list-style: none;
    width: 25%;
  }

  blockquote{
    display: flex;
    flex-direction: column;
    
  }
  blockquote > i{
    text-align:right;
    
  }

  div.content{
    display: flex;
    
     div{
       width: 33.33%;
       p{
         margin: var(--standard-margin);
       }
     }


  }

  .fab, .fas, .far{
    font-size: 4rem;
    color: #fdfdfd;
    text-shadow: 1px 1px 2px #000;
    padding: 30px 20px;
  }

`;

class Services extends React.Component{


  render(){
    return(
      <Page>
        <section>
            <h2>Services</h2>
            <div className="icons">
                <ul>
                  <li>
                    <div><i className="fas fa-code-branch"></i></div>
                    Branding
                  </li>
                  <li>
                    <div><i className="fas fa-highlighter"></i></div>
                    Marketing
                  </li>
                  <li>
                    <div><i className="fab fa-opencart"></i></div>
                    Design
                  </li>
                  <li>
                    <div><i className="fab fa-connectdevelop"></i></div>
                    Development
                  </li>
                  <li>
                    <div><i className="far fa-images"></i></div>
                    Photography
                  </li>
                </ul>
            </div>
            <div className="content">
                <div className="col">
                  <blockquote>
                        Consectetur adipisicing elit. Consequuntur molestias debitis, obcaecati minima saepe quod dicta amet, accusantium aperiam tempore perferendis, deleniti numquam. Perferendis dolorum sint, quo provident aut dignissimos.
                    <i>- Author</i>
                  </blockquote>
                </div>
                <div className="col">
                  <p>Tem, ipsum dolor sit amet consectetur adipisicing elit. Dolores, voluptates. Cumque fugit, provident modi quis at veritatis exercitationem recusandae delectus hic sed deleniti dolore eaque fugiat quas perspiciatis excepturi nemo Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni explicabo tempore, distinctio animi, ex obcaecati molestias ea, illo architecto amet aperiam tenetur fuga blanditiis qui iste odit. Voluptatem, totam tenetur</p>
                </div>
                <div className="col">
                  <p>Dolor sit amet consectetur adipisicing elit. Labore iusto nobis numquam voluptatem. Modi libero qui repudiandae magnam maxime est, tempore nobis! Aliquam error reprehenderit suscipit unde non et quis. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi at nam, pariatur praesentium architecto voluptatibus iure doloremque? Quibusdam sit voluptatum, necessitatibus tempore suscipit itaque. Sapiente ipsum facere debitis ut maiores.</p>
                </div>

            </div>
        </section>
      </Page>
    )
  }
}
export default Services;
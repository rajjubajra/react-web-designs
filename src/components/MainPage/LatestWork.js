import React from 'react';
import styled from 'styled-components';

const Page = styled.section`
width: 100%;
min-height: 90vh;
display: flex;
flex-direction: column;
margin-bottom: 100px;

section{
  margin:var(--standard-margin);
}
div.row{
  min-height: 100px;
  display: flex;
  flex-direction: column;
  justify-content:center;
  align-items: center;

    
}
div.gallery{
  display:flex;
  flex-wrap: wrap;
}

div.gallery > div.card{
  width: 33.33%;

  span{
    display: block;
    width: 95%;
    margin: 2.5%;
    min-height: 250px;
    border: 1px solid #ccc;
    background-size: cover;
    background-position: center;
  }
}


`;


class LatestWork extends React.Component{

  render(props){
    const url = 'https://yellow-website.com';

    const latestJob = this.props.images.map((img)=>{
      if(img.field_image_category == 'Tea'){
      return(
        <div className="card">
          <span style={{backgroundImage:`url("${url + img.field_image_rest_api}")`}} ></span>
        </div>
      )
      }
    })

    return(
      <Page>
          <section>
              <div className="row">
                <h3>Latest Work</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa dicta, consequuntur doloremque fugiat corporis, iure commodi asperiores, hic distinctio labore amet quis ipsam placeat. Maiores perferendis soluta sequi et animi.</p>
              </div>
              <div className="gallery">
                {latestJob}
              </div>
              <div className="row">
                <a className="button" href="" target="_blank">Veiw more works</a>
              </div>
          </section>
      </Page>
    )
  }
}
export default LatestWork;
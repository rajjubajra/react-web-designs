import React from 'react';
import Header from '../Header/Header';
import Landing from './Landing';
import Aboutus from './Aboutus';
import Services from './Services';
import CallAcction from './CallAction';
import WorkProcess from './WorkProcess';
import LatestWork from './LatestWork';
import Features from './Features';
import Reviews from './Reviews';
import Websites from './Websites';
import Graphics from './Graphics';
import ScrollingFeatures from './ScrollingFeatures';
import LatestNews from './LatestNews';
import Subscription from './Subscription';
import Contact from './Contact';
import Footer from './Footer';
import ImgLab from './ImgLab';
import CopyRightFooter from './CopyRightFooter';
import './style.css'; 
import styled from 'styled-components';
import Logo from '../../images/logo.png';


const Page = styled.div`
width: 100%;
section.parallax{
  width: 100%;
  /*set minimum height*/
  min-height: 100vh;

  /* Create the parallax scrolling effect */
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  background-repeate: no-reapt;
 
}

`;


class MainPage extends React.Component{
      state = {
        bg_1: '',
        bg_2: '',
        bg_3: '',
        bg_4: '',
        bg_5: ''
      }
      

      componentDidMount(props)
      {
          const url = 'https://yellow-website.com'
          this.props.images.map((img)=>{
            img.field_image_name == 'bg-2' && this.setState({bg_2: url + img.field_image_rest_api })
            img.field_image_name == 'bg-5' && this.setState({bg_5: url + img.field_image_rest_api})
            img.field_image_name == 'bg-3' && this.setState({bg_3: url + img.field_image_rest_api})
            img.field_image_name == 'bg-6' && this.setState({bg_6: url + img.field_image_rest_api})
          })
      }
 
  
      render(){
         console.log(this.state.bg_2);
            return( 
            <Page>
              <section><Header logo={Logo} /></section>
              <section className="parallax" style={{backgroundImage:`url("${this.state.bg_2}")`}}>
                <Landing />
              </section>
              <section>
                <Aboutus />
              </section>
              <section className="parallax" style={{backgroundImage:`url("${this.state.bg_5}")`}}>
                <Services />
              </section>
              <section>
                <CallAcction />
              </section>
              <section className="parallax" style={{backgroundImage: `url("${this.state.bg_3}")`}}><WorkProcess /></section>
              <section><LatestWork /></section>
              <section><Features /></section>
              <section><Reviews /></section>
              <section><Websites /></section>
              <section> <Graphics /></section>
              <section><ScrollingFeatures /></section>
              <section><LatestNews /></section>
              <section><Subscription /></section>
              <section><Contact /></section>
              <section className="parallax" style={{backgroundImage:`url("${this.state.bg_6}")`}}><Footer /> </section>
              <section><ImgLab /></section>   
              <section><CopyRightFooter /></section>
            </Page>
          )

       
      } 



}
export default MainPage;

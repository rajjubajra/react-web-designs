import React from 'react';
import styled, {keyframes} from 'styled-components';


const animate = keyframes`
  from {
    border-buttom: 0px solid #999;
  }
  to{
    border-buttom: 1px solid #999;
  }
`;


const Nav = styled.div`
display: flex;
justify-content: space-between;

.logo{
  margin: 0px 20px;
  img{
    width: 50px;
  }
}


ul.main-menu{
  height: 54px;
  margin-right: 20px;
  display: flex;
}
ul.main-menu > li{
  list-style: none; 
  a{
    font-size: 0.8rem;
    text-transform: uppercase;
    text-decoration: none;
    padding: 0px 15px;
    margin: 0px 5px;
    color: #999;
    -webkit-transition: padding 0.4s; /* For Safari 3.1 to 6.0 */
    transition: padding 0.4s;
  }
  a:hover{
    color: #333;
    padding: 20px 15px;
    border-bottom: 1px solid #999;
    -webkit-transition: padding 0.4s; /* For Safari 3.1 to 6.0 */
    transition: padding 0.4s;
  }
}



@media only screen and (max-width: 700px) {

  .header{
    width: 100%;
    height: 54px;
  }

  ul.main-menu{
    display: none;
    flex-direction: column;
    position: relative;
    top: 13px;
    width: 200px;
    z-index: 1;
    padding: 0px;
    text-align: center;
    li{
      line-height: 2.5rem;
      background-color: #ddd;
    }
    li a:hover{
      color: #fff;
      border-bottom: 0px;
    }
  }
  .show{
   display: flex !important;
  }
  .line-button{
    display: flex;
    flex-direction: column;
    position: fixed;
    right: 40px;
    top: 10px;
    z-index: 1;
  }
  .line-button > div{
    width: 20px;
    height:2px;
    margin: 2px;
    background-color: #ddd;
  }
}
`;



class Header extends React.Component{
  constructor(){
    super();
    this.state = {
      isHovere: false,
      isMobileMenu: false,
    }    
  }

  handleHover = () => {
      this.state.isHovere === false 
        ? this.setState({isHovere: true}) 
        : this.setState({isHovere: false});
       const NavBtn = document.querySelector('.main-menu');      
       this.state.isHovere ? NavBtn.classList.remove('show'): NavBtn.classList.add('show');
  }
  handleMenu = () => {
    this.state.isMobileMenu === false 
      ? this.setState({isMobileMenu: true}) 
      : this.setState({isMobileMenu: false});
     const NavBtn = document.querySelector('.main-menu');      
     this.state.isMobileMenu ? NavBtn.classList.remove('show'): NavBtn.classList.add('show');
}
  




  render(props){
    const {logo} = this.props;
    
    return(
      <Nav>
        <div className="header">
          <div className="logo"><img src={logo} alt="logo" /></div>
          {/**  mobile app line icon for drop down menu */}
            <div  className="line-button" 
                  onMouseEnter={this.handleHover} 
                  onMouseLeave={this.handleHover}>
              <div></div><div></div><div></div>
            </div>
        </div>
        
        <div>
          <ul className="main-menu" 
                  onMouseEnter={this.handleMenu} 
                  onMouseLeave={this.handleMenu}>

            <li><a onClick={this.foo} href="#" target="_blank">Multi Page</a></li>
            <li><a onClick={this.foo} href="#" target="_blank">Single Page</a></li>
            <li><a onClick={this.foo} href="#" target="_blank">Blogs</a></li>
            <li><a onClick={this.foo} href="#" target="_blank">Elements</a></li>
            <li><a onClick={this.foo} href="#" target="_blank">Icons</a></li>
          </ul>
        </div>
      </Nav>     
    )
  }
}
export default Header;
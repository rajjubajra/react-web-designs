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
  ul.main-menu{
    flex-direction: column;

    li{
      line-height: 2.5rem;
    }


  }

  .line-button{
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 15px 0px;
  }

  .line-button > div{
    width: 20px;
    height:2px;
    margin: 2px;
    background-color: #000;
  }
}

   
`;



class Header extends React.Component{
  foo = () =>{
    

  }

  


  render(props){
    const {logo} = this.props;
    return(
      <Nav>
        <div className="logo"><img src={logo} alt="logo" /></div>
        <div>
            {/**  mobile app line icon for drop down menu */}
            <div className="line-button"><div></div><div></div><div></div></div>

          <ul className="main-menu">
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
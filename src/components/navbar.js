
  import React from "react"
  import {Link} from "gatsby"
  import logo from '../images/logo.png'

  

  const activeStyle = {
      color: 'lightgrey',
      
    }
  
  
  const NavBar = ({ toggleNavbar, isActive }) => {    
      return(
          <section className={` navagation-wrap col-12 ${isActive ? 'mobile-wrap' : ''}`}> 
  
              <div id="main-nav-wrap">
                  <div className="logo-wrap">
                      <Link to="/">
                    <img width="100%" src= {logo} alt="Vyntrade logo" /> </Link>
  
                  </div>
                  
                  <div >
                      <div  className={` responsive-nav ${isActive ? 'mobile-nav' : ''}`}>
                          <ul className="nav">
                                     <li><Link  activeStyle={activeStyle} to="/">Home</Link></li>
                              <li><Link to="/about/" activeStyle={activeStyle} >About</Link></li>
                              <li><Link to="/services/" activeStyle={activeStyle} >Instructions</Link></li>
                              <li><Link to="/portfolio/" activeStyle={activeStyle} >Blog</Link></li>
                           <div style={{marginTop: "-1.75em"}}>
                           <a  href= "https://www.github.com">
    <button className="nav-button">
    <p>Get the code</p>
    </button>
   
    
 
   </a>
                              </div>
                       
  
                            
                          </ul>
                      </div>
                   
                  </div>
   

      
                  <div id="hamburger-wrap">
                      <div  className={` burger-open ${isActive ? 'burger-close' : ''}`}
              
              data-target='nav-menu'
              onClick={toggleNavbar}
              aria-hidden={true}>
                          <span className="line line01"></span>
                          <span className="line line02"></span>
                          <span className="line line03"></span>
                      </div>
                  </div>
                  
              </div>
          </section>
  
      )
  }
  export default NavBar

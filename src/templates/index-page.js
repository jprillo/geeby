import React from "react"
import { graphql } from "gatsby"
import { Helmet } from 'react-helmet'
import Layout from '../components/layout2'

import hero from '../images/hero-image.png'
import icon1 from '../images/flash.png'
import stars from '../images/stars.png'
import avatar from '../images/Avatar.png'
import Button from '../components/button'





export default function Home({ data }) {
  const home = data.markdownRemark
  return (
  
  <div className="main-wrap">
       <Helmet>
        <title>Geeby | A Gatsby blog starter with Netlify CMS</title>
        <meta name="description" content={home.frontmatter.mission} />
        <meta name="theme-color" content="black" />
      </Helmet>
  <Layout>
    <section className="hero flex">
      <div className="col-6" >
        <h1>{home.frontmatter.title}</h1>      
        <p className="subheading">{home.frontmatter.mission}</p> 
        <div className="button-container">
        <div className="col-6">        
        <Button/>
        </div>       
        <div className="col-6"> 
          <p >Learn More</p>
        </div>
        
      </div>
</div>
      <div className="col-6 mobile-hide" style={{textAlign: "right"}}>
      <img className="hero-image" width="100% "src ={hero} alt="This is geeby."/>
      </div> 
    </section>

  

    <section className="vertical-padding align-center" >
     
      <div>
        <h2>All In One Solution</h2>
        <p className="center">{home.frontmatter.about}</p>
        <div className = "flex center gap-1em">
          <div className="col-4 pad-3em">
          <img className="icon" width="100% "src ={icon1} alt="This is geeby."/>
            <h3>Super Fast</h3>
            <p>A free minimalist static blog with content management system. Easy to set up and customize</p>

          </div>
          <div className="col-4 pad-3em">
          <img className="icon" width="100% "src ={icon1} alt="This is geeby."/>
                      <h3>Super Fast</h3>
            <p>A free minimalist static blog with content management system. Easy to set up and customize</p>
            
          </div>
          <div className="col-4 pad-3em">
          <img className="icon" width="100% "src ={icon1} alt="This is geeby."/>
          <h3>Super Fast</h3>
            <p>A free minimalist static blog with content management system. Easy to set up and customize</p>
            
          </div>
        </div>
      
     
      </div>
      </section>
     
<div className="vertical-padding">
  <h2>Here is a list of dependancies</h2>
  <div className = "flex center card-container gap-1em">
          <div className="col-3 pad-3em alt-background" >
          <img className="icon" width="100% "src ={icon1} alt="This is geeby."/>
            <h3>Super Fast</h3>
            <p>A free minimalist static blog with content management system. Easy to set up and customize</p>

          </div>
          <div className="col-3 pad-3em alt-background">
          <img className="icon" width="100% "src ={icon1} alt="This is geeby."/>
                      <h3>Super Fast</h3>
            <p>A free minimalist static blog with content management system. Easy to set up and customize</p>
            
          </div>
          <div className="col-3 pad-3em alt-background">
          <img className="icon" width="100% "src ={icon1} alt="This is geeby."/>
          <h3>Super Fast</h3>
            <p>A free minimalist static blog with content management system. Easy to set up and customize</p>
            
          </div>
          <div className="col-3 pad-3em alt-background">
          <img className="icon" width="100% "src ={icon1} alt="This is geeby."/>
          <h3>Super Fast</h3>
            <p>A free minimalist static blog with content management system. Easy to set up and customize</p>
            
          </div>
          <div className="col-3 pad-3em alt-background">
          <img className="icon" width="100% "src ={icon1} alt="This is geeby."/>
          <h3>Super Fast</h3>
            <p>A free minimalist static blog with content management system. Easy to set up and customize</p>
            
          </div>
        </div>
</div>

<section className="vertical-padding">
<h2>Here is a list of dependancies</h2>
<div className="flex alt-background center h-pad-10">
  <div className="col-6 pad-5">    
  <img width="50% "src ={stars} alt="This is geeby."/>
    <p className="v-pad-5">"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dis turpis nisi, justo, integer dignissim ornare leo euismod ac."</p>
    <img className="icon" width="100% "src ={avatar} alt="This is geeby."/>
    <p className="v-pad-1">Joe Blow</p>
  </div>
  <div className="col-6 pad-5">
  <img width="50% "src ={stars} alt="This is geeby."/>
    <p className="v-pad-5">"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dis turpis nisi, justo, integer dignissim ornare leo euismod ac."</p>
    <img className="icon" width="100% "src ={avatar} alt="This is geeby."/>
    <p className="v-pad-1">Joe Blow</p>
    </div>
</div>
</section>
   

  </Layout>
    
  
  
    </div>
  )
}
export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        mission
        about
   
      }
    }
  }
`
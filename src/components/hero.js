import React from 'react'
import Button from './button.js'
import { GatsbyImage } from "gatsby-plugin-image"


export default function Hero(props) {

    return (
        <section className="hero flex">
        <div className="col-6" >
          <h1>{props.headingOne}</h1>      
          <p className="subheading">{props.subheadingOne}</p> 
            <div className="button-container">
                <div className="col-6">        
                    <Button
                    type="primary"
                    cta={props.heroButtonCtaOne}
                    link={props.heroButtonLinkOne}
                    />
                </div>       
                <div className="col-6 button"> 
                     <p >{props.heroButtonCtaTwo}</p>
                </div>
          
            </div>
        </div>
        <div className="col-6 mobile-hide right" >
        <GatsbyImage image={props.heroImage} alt="this is a hero image" />
        <img className="hero-image" width="100% "src ={props.heroImage} alt="This is geeby."/>
        </div> 
      </section>

    )
}
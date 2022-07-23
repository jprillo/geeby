import React from "react"
import { graphql } from "gatsby"
import { Helmet } from 'react-helmet'

import Layout from '../components/layout2'
import Hero from '../components/hero'
import CardOne from '../components/cardOne'
import CardTwo from '../components/cardTwo'
import Review from '../components/review'
import {getImage } from "gatsby-plugin-image"


import icon1 from '../images/flash.png'
import stars from '../images/stars.png'
import avatar from '../images/Avatar.png'

export default function Home({ data }) {
  const home = data.markdownRemark;
  const h = home.frontmatter;
  const image = getImage(h.heroImage)
  return (

    <div className="main-wrap">
      <Helmet>
        <title>Geeby | A Gatsby blog starter with Netlify CMS</title>
        <meta name="description" content={home.frontmatter.headingOne} />
        <meta name="theme-color" content="black" />
      </Helmet>
      <Layout>
        <Hero
          headingOne={h.headingOne}
          subheadingOne={h.subheadingOne}
          heroButtonCtaOne={h.heroButtonCtaOne}
          heroImage={image}
          heroButtonCtaTwo={h.heroButtonCtaTwo}
          heroButtonLinkOne={h.heroButtonLinkOne}
        />
        <section className="vertical-padding align-center" >

          <div>
            <h2>{h.headingTwo}</h2>
            <p className="center">{home.frontmatter.about}</p>
            <div className="flex center gap-1em">

              {h.cards.map((item) => (

                <CardOne
                  title={item.title}
                  desc={item.desc}
                  icon={icon1}
                  type="cardOne"
                />

              ))}
            </div>
          </div>
        </section>

        <div className="vertical-padding">
          <h2>{h.headingThree}</h2>
          <div className="flex center card-container gap-1em">
            {h.dependancies.map((item) => (

              <CardTwo
                title={item.title}
                desc={item.desc}
                icon={icon1}
                type="cardTwo"
              />

            ))}
          </div>
        </div>

        <section className="vertical-padding">
          <h2>{h.headingFour}</h2>
          <div className="alt-background center h-pad-10" style={{overflow: "hidden"}}>
            <div className="flex ">
            {h.reviews.map((item) => (

<Review
  name={item.name}
  desc={item.desc}
  stars={stars}
  avatar={avatar}
/>

))}
          
          
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
        headingOne
        subheadingOne
        heroButtonCtaOne
        heroButtonCtaTwo
        heroButtonLinkOne
        heroImage {
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED, quality: 100)
          }
        }
        headingTwo
        headingThree
        headingFour
        cards{
          title
          desc
        }
        dependancies{
          title
          desc
        }
        reviews{
          name
          desc
        }
        
   
      }
    }
  }
`
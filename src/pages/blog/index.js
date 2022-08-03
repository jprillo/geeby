import React from "react"
import Layout from '../../components/layout2'
import { graphql, Link } from "gatsby"
import { Helmet } from 'react-helmet'


export default function Blog({data}) {
    const d = data.allMarkdownRemark;
    const h = d.edges[0].node.frontmatter
    const hslug = d.edges[0].node.fields.slug
    const f = d.edges[1].node.frontmatter
    const fslug = d.edges[1].node.fields.slug
    const t = d.edges[2].node.frontmatter
    const tslug = d.edges[2].node.fields.slug
    
  return <div >
      <Helmet>
        <title>Geeby | Gatsby Starter Blog</title>
        <meta name="description" content="VYNTRADE was founded in 2018 to offer consulting to Wine & Spirit Industry Companies.​" />
        <meta name="theme-color" content="black" />
      </Helmet>
      <Layout>
<div className="flex gap-2 pad-top ">
    <div className="col-8">
        <Link to = {hslug}>
        <div className="feature-article" style={{background: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url('${h.featuredImage.publicURL}')`}}>
        
            <h1>{h.title}</h1>
            <p>{h.description}</p>
            <div className="tag-flag">
              hudgkjwc
            </div>
        </div>
        </Link>
    </div>
    <div className="col-4 column gap-2">
        <Link to ={tslug}>
    <div className="article" style={{background: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url('${f.featuredImage.publicURL}')`}}>
            <h2>{f.title}</h2>
            <p>{f.description}</p>
        </div>
        </Link>

        <Link to ={fslug}>
        <div className="article" style={{background: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url('${t.featuredImage.publicURL}')`}}>
        <h2>{t.title}</h2>
            <p>{t.description}</p>
        </div>
        </Link>
    </div>
</div>
  </Layout>
  </div>
}


export const query = graphql`
query MyQuery {
    allMarkdownRemark(filter: {frontmatter: {templateKey: {eq: "blog-post"}}}) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            title
            description
            featuredImage {
                publicURL
             }
          }
        }
      }
    }
  }
`
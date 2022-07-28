import React from "react"
import Layout from '../../components/layout2'

import { Helmet } from 'react-helmet'

export default function Blog() {
  
  return <div >
      <Helmet>
        <title>Geeby | Gatsby Starter Blog</title>
        <meta name="description" content="VYNTRADE was founded in 2018 to offer consulting to Wine & Spirit Industry Companies.​" />
        <meta name="theme-color" content="black" />
      </Helmet>
      <Layout>
<div className="flex gap-2 pad-top ">
    <div className="col-8">
        <div className="feature-article" style={{background: "linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url('https://blog.logrocket.com/wp-content/uploads/2019/05/logrocket-blog.jpg')"}}>
            <h2>This is the first blog article</h2>
            <p>This is a good plce for a description</p>
        </div>
    </div>
    <div className="col-4 column gap-2">
    <div className="article" style={{backgroundImage: "url(https://blog.logrocket.com/wp-content/uploads/2019/05/logrocket-blog.jpg)"}}>
            <h3>This is the first blog article</h3>
            <p>This is a good plce for a description</p>
        </div>
        <div className="article" style={{backgroundImage: "url(https://blog.logrocket.com/wp-content/uploads/2019/05/logrocket-blog.jpg)"}}>
            <h3>This is the first blog article</h3>
            <p>This is a good plce for a description</p>
        </div>
    </div>
</div>
  </Layout>
  </div>
}

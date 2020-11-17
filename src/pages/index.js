import React from "react"
import {Link, graphql} from "gatsby"
import Header from "../components/header"

export default function Home({data}) {
  return <div style={{ color: `purple` }}>
    <Link to="/contact/">Contact</Link>
    <Header headerText = "Home Page" siteTitle={data.site.siteMetadata.title}/>
    <p>What a world.</p>
    <img src="https://source.unsplash.com/800x600/?architecture" alt="random image from unsplash"/>
    </div>
}

export const query = graphql`
  query{
    site{
      siteMetadata{
        title
      }
    }
  }
`

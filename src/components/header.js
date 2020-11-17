import React, { Fragment } from 'react'
import {useStaticQuery, graphql} from 'gatsby'
import styles from "./header.module.css"


export default function Header(props){
  const data = useStaticQuery(
    graphql`
      query{
        site{
          siteMetadata{
            description
          }
        }
      }
  `
  )
  return(
    <Fragment>
      <h1>{props.siteTitle}</h1>
      <h2>{props.headerText}</h2>
      <p>{data.site.siteMetadata.description}</p>
    </Fragment>
    
  )
}





import React, { Fragment } from "react";
import {graphql} from "gatsby"


export default function Lesson({data}){
  const lesson = data.markdownRemark;
  return(
    <Fragment>
      <h1>{lesson.frontmatter.title}</h1>
      <div dangerouslySetInnerHTML = {{__html:lesson.html}}/>
    </Fragment>
  )
}

export const query = graphql`
  query($slug: String!) {
  markdownRemark(fields:{slug:{eq: $slug}}){
    html
    frontmatter{
      title
    }
  }
}
`
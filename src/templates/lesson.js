import React from "react";
import { graphql, Link } from "gatsby";
import { MDXProvider } from "@mdx-js/react";
import { MDXRenderer } from 'gatsby-plugin-mdx'
import PageLayout from '../layouts/page-layout'
import CourseLayout from '../layouts/course-layout';


const shortcodes = { Link, PageLayout }

export default function Lesson(props) {

  console.log(props);
  const mdx= props.data.mdx;
  
  
  return (
    <CourseLayout 
      courseDirName = {props.location.state.courseDirName} 
      courseName ={props.location.state.courseName}
      lessons = {props.location.state.lessons}
    >
      <h1>{mdx.frontmatter.title}</h1>
      <MDXProvider components={shortcodes}>
        <MDXRenderer>{mdx.body}</MDXRenderer>
      </MDXProvider>
    </CourseLayout>
  )
}

export const pageQuery = graphql`
  query BlogPostQuery($id: String!) {
  mdx(id:{eq:$id}){
    id
    body
    frontmatter{
      title
    }
    fields{
      topic
    }
  }
}
`
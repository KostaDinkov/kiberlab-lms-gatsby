import React, { Fragment } from "react";
import { graphql, Link } from "gatsby";
import { MDXProvider } from "@mdx-js/react";
import { MDXRenderer } from 'gatsby-plugin-mdx'
import PageLayout from '../layouts/page-layout'


const shortcodes = { Link, PageLayout }

export default function Lesson({ data: { mdx } }) {

  return (
    <PageLayout>
      <h1>{mdx.frontmatter.title}</h1>
      <MDXProvider components={shortcodes}>
        <MDXRenderer>{mdx.body}</MDXRenderer>
      </MDXProvider>
    </PageLayout>
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
  }
}
`
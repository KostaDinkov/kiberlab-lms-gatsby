import React from "react"
import { Fragment } from "react"
import PageLayout from "../layouts/page-layout"

import CourseCard from "../templates/courseCard";


export default function Courses({ data }) {

  const cards = data.allMarkdownRemark.edges;
  console.log(cards)

  return (


    <PageLayout>
      <h1>All Courses</h1>
      {cards.map((card) =>
        <CourseCard
          key={card.node.parent.relativeDirectory}
          title={card.node.frontmatter.course}
          description={card.node.frontmatter.description}
          imgUrl={card.node.frontmatter.imageUrl}
        />)
      }
    </PageLayout>

  )
}

export const data = graphql`
  query {
  allMarkdownRemark(filter: {frontmatter: {title: {eq: "Introduction"}}}) {
    edges {
      node {
        frontmatter {
          title
          course
          imageUrl
          description
        }
        fields {
          slug
        }
        parent {
          ... on File {
            relativeDirectory
          }
        }
      }
    }
  }
}
`

import React from "react"
import PageLayout from "../layouts/page-layout"
import CourseCard from "../templates/courseCard";

export default function Courses({ data }) {

  const courses = data.allMdx.edges
                  .filter(c => c.node.parent.name.toLowerCase() === 'intro')
                  
  
  function getCourseLessons(courseName){
    const lessons = data.allMdx.edges.filter(c=>c.node.parent.relativeDirectory === courseName).sort((a,b)=>compare(a,b));
    console.log("Lessons:");
    console.log(lessons);
    return lessons;
  }
  function compare(lessonA, lessonB) {
    if (lessonA.node.frontmatter.order < lessonB.node.frontmatter.order) {
      return -1;
    }
    if (lessonA.node.frontmatter.order > lessonB.node.frontmatter.order) {
      return 1;
    }
    
    return 0;
  }
  return (
    <PageLayout>
      <h1>All Courses</h1>
      {courses.map((card) =>
        <CourseCard
          key={card.node.parent.relativeDirectory}
          courseName={card.node.frontmatter.course}
          description={card.node.frontmatter.description}
          imgUrl={card.node.frontmatter.imageUrl}
          link = {card.node.fields.slug}
          courseDirName = {card.node.parent.relativeDirectory}
          lessons = {getCourseLessons(card.node.parent.relativeDirectory)}
        />)
      }
    </PageLayout>

  )
}

export const data = graphql`
  query {
  allMdx {
    edges {
      node {
        id
        frontmatter {
          title
          course
          imageUrl
          description
          order
        }
        fields {
          slug
          topic
        }
        parent {
          ... on File {
            relativeDirectory
            name
          }
        }
      }
    }
  }
}
`


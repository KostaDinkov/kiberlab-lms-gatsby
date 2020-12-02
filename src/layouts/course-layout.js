import React, { Fragment } from 'react'
import styles from './course-layout.module.scss';
import Logo from '../components/logo/logo';
import { Link } from 'gatsby';
import LessonIcon from "../components/lessonIcon/lessonIcon";


export default function CourseLayout(props) {
  console.log("Props from course-layout");
  console.log(props);
  return (

    <Fragment>
      <div className="page-background" />
      <div className={styles.coursePageLayout}>
        <div className={styles.sideBar}>
          <Logo /><br />
          <Link to="/courses">&lt; Назад към Всички Курсове</Link>
          <h2>{props.courseName}</h2>
          <ul className={styles.lessonList}>
            {props.lessons.map(lesson => (
              <li key={lesson.node.id}>
                <LessonIcon lessonType={lesson.node.frontmatter.type} />
                <Link
                  to={lesson.node.fields.slug}
                  state={
                    {
                      courseDirName: props.courseDirName,
                      lessons: props.lessons,
                      courseName : props.courseName
                    }
                  }
                >
                  {lesson.node.frontmatter.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.content}>
          {props.children}
        </div>
      </div>
    </Fragment>

  )
}


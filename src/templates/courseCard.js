import React from 'react';
import { Link } from 'gatsby';

import styles from "./courseCard.module.css";

export default function CourseCard(props) {


  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <Link 
          to={props.link} 
          state={
            {
              courseName:props.courseName,
              lessons: props.lessons
            }}
        >{props.courseName}</Link>
        </div>
      <div className={styles.description}>{props.description}</div>
      <div className = {styles.imageContainer}>
        <img className ={styles.cardImg} src={props.imgUrl} alt="random"/>
      </div>
    </div>
  )
}




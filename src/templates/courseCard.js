import React from 'react';
import {graphql} from 'gatsby';

import styles from "./courseCard.module.css";

export default function CourseCard(props) {

  
  return (
    <div className={styles.container}>
      <div className={styles.title}>{props.title}</div>
      <div className={styles.description}>{props.description}</div>
      <div className={styles.image}>
        <img src={props.imgUrl} alt="random image"/>
      </div>

    </div>
  )
}


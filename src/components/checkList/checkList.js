import React, { Fragment } from "react";
import styles from './checkList.module.scss';

export default function CheckList({ children }) {

  return (
    <Fragment>
      <ul className={styles.checkList}>
        {children.map((el,i) =>
          <li key={i}>
            <i className="fa fa-check-square-o"></i> {el}
          </li>
          
        )}
      </ul>
    </Fragment>
  )
}
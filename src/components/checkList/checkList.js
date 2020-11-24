import React, { Fragment } from "react";

export default function CheckList({ children }) {

  return (
    <Fragment>
      <ul>
        {children.map((el,i) =>
          <li key={i}>
            <i className="fa fa-check-square-o"></i> {el} <br/>
          </li>
        )}
      </ul>
    </Fragment>
  )
}
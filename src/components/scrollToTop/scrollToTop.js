import React, { Fragment } from "react"

export default function ScrollToTop({ text }) {

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }
  return (
    <Fragment>
      
      <a
        style={{ cursor: "pointer" }}
        onClick={scrollToTop}><i className="fa fa-arrow-up"></i> {text || "Нагоре"}
      </a>
    </Fragment>
  )
}
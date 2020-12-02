import React from 'react'

export default function LessonIcon({ lessonType }) {

  let iconClass = "fa fa-book";

  switch (lessonType) {
    case "video":
      iconClass = "fa fa-video-camera"
      break;
    case "test":
      iconClass = "fa fa-check-square-o"
      break;
    case "exercise":
      iconClass = "fa fa-pencil-square-o"
      break;
    default:
      iconClass = "fa fa-book";

  }
  return (
    <i className={iconClass}/>
  )

}
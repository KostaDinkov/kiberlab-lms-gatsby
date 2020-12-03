import React,{useState, useEffect} from 'react'

export default function MyImage(props) {

 
  return (
    <div style={{width:props.width, height:props.height }} >
      <img style={{objectFit:"scale-down"}} src={props.src} alt={props.alt} width="100%" height="100%" />
    </div>
  )
}
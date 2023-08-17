import React from "react";

import{
    TichevronLeftOutline,
    TichevronRightOutline,



}from "http://cdn.skypack.dev/react-icons/ti";
const CARDS= 10;
const MAX_VISIBILITY=3;

const Card =({title, content})=>(
  <div className="card">
    <h2>{title}</h2>
    <p>{content}</p>
  </div>
);

const Carousel =({children})=>{
    const
}
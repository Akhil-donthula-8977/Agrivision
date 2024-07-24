import React from 'react'
import {
    CircularProgressbar,
    buildStyles
  } from "react-circular-progressbar";
const ProgressBar = () => {
    const percentage = 66;
  return (
    <div>  <CircularProgressbar
    value={percentage}
    text={`${percentage}%`}
    styles={buildStyles({
      rotation: 0.5 + (1 - percentage / 100) / 2
    })}
  /></div>
  )
}

export default ProgressBar
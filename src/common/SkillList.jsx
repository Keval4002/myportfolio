import React from 'react'

function SkillList(props) {
  return (
    <span>
    <img src={props.src} alt={props.src} />
    <p>{props.skill}</p>
    </span>
  )
}

export default SkillList
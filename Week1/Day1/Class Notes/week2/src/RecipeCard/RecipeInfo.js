import React from 'react'
import './styles.css'

export default function RecipeInfo(props) {
  const {title, description} = props
  return (
    <div>
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  )
}

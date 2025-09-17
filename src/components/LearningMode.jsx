import React from 'react'
import Lessons from './learning/Lessons'
import Dictionary from './learning/Dictonary'

export default function LearningMode(){
  return (
    <div>
      <h2>Learning Mode</h2>
      <div className="grid">
        <div className="card">
          <Lessons />
        </div>
        <div className="card">
          <Dictionary />
        </div>
      </div>
    </div>
  )
}

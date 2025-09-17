import React from 'react'

export default function Profile(){
  return (
    <div className="card">
      <h3>Your Profile</h3>
      <p className="small">Profile, progress, preferences, and accessibility settings.</p>

      <label className="small" style={{display:'block',marginTop:8}}>
        Font size:
        <select style={{marginLeft:8}}>
          <option>Medium</option>
          <option>Large</option>
          <option>Extra Large</option>
        </select>
      </label>
      <div style={{marginTop:12}}>
        <button className="btn">Export progress</button>
      </div>
    </div>
  )
}

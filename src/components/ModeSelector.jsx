import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function ModeSelector(){
  const nav = useNavigate()
  return (
    <div className="card">
      <h1>Welcome to ASL Bridge</h1>
      <p className="footer-note">Choose a mode — Accessibility is for real-time communication. Learning is for lessons & practice.</p>

      <div className="grid" style={{marginTop:16}}>
        <button className="mode-btn" onClick={()=>nav('/accessibility')} aria-label="Open Accessibility mode">
          <strong>Accessibility Mode</strong>
          <span className="small">Speech → Text captions, quick phrases, camera sign detection (beta).</span>
        </button>

        <button className="mode-btn" onClick={()=>nav('/learning')} aria-label="Open Learning mode">
          <strong>Learning Mode</strong>
          <span className="small">Lessons, dictionary, camera practice with feedback.</span>
        </button>
      </div>
    </div>
  )
}

import React, { useState } from 'react'
const lessons = [
  { id: 'alphabet', title: 'Alphabet', description: 'Learn A–Z finger-spelling' },
  { id: 'basics', title: 'Basics', description: 'Hello, please, thank you, yes/no' }
]

export default function Lessons(){
  const [active, setActive] = useState(null)
  return (
    <div>
      <h3>Lessons</h3>
      <ul>
        {lessons.map(l => (
          <li key={l.id} style={{marginBottom:8}}>
            <button className="mode-btn" onClick={()=>setActive(l.id)} aria-expanded={active===l.id}>
              <strong>{l.title}</strong>
              <div className="small">{l.description}</div>
            </button>
          </li>
        ))}
      </ul>

      {active && (
        <div style={{marginTop:12}}>
          <h4>{lessons.find(x=>x.id===active)?.title}</h4>
          <p className="small">Lesson content goes here — video, 3D avatar, and camera practice.</p>

        </div>
      )}
    </div>
  )
}

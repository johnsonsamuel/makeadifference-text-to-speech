import React, { useState } from 'react'
import dict from '../../data/dictinary.json'

export default function Dictionary(){
  const [q, setQ] = useState('')
  const items = (dict).filter(d => d.word.toLowerCase().includes(q.toLowerCase()))
  return (
    <div>
      <h3>Dictionary</h3>
      <input aria-label="Search dictionary" placeholder="Search (e.g., hello)" value={q} onChange={e=>setQ(e.target.value)} style={{width:'100%',padding:8,marginBottom:8}}/>
      <div>
        {items.map(it => (
          <div key={it.id} style={{display:'flex',gap:12,alignItems:'center',padding:8,borderBottom:'1px solid #f1f5f9'}}>
            <div style={{flex:1}}>
              <strong>{it.word}</strong>
              <div className="small">{it.category}</div>
            </div>
            <video src={it.video} width={140} controls aria-label={`Sign demo for ${it.word}`} />
          </div>
        ))}
        {items.length === 0 && <p className="small">No results.</p>}
      </div>
    </div>
  )
}

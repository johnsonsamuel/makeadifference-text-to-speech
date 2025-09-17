import React, { useEffect, useState } from 'react'
import dict from '../../data/dictinary.json'

export default function TextToSign(){
  const [input, setInput] = useState('')
  const [result, setResult] = useState(null)
  const [custom, setCustom] = useState(null)

  useEffect(()=> {
    setResult(null)
  }, [input])

  function lookup(text){
    const t = text.trim().toLowerCase()
    const found = (dict).find(e => e.word.toLowerCase() === t || e.id === t)
    if(found) setResult(found)
    else setCustom(t || null)
  }

  return (
    <div>
      <div style={{display:'flex', gap:8, marginBottom:12}}>
        <input aria-label="Text to convert to sign" placeholder="Type a phrase (e.g., Hello)" value={input} onChange={e=>setInput(e.target.value)} style={{flex:1,padding:8}}/>
        <button className="btn" onClick={()=>lookup(input)}>Show Sign</button>
      </div>

      {result && (
        <div>
          <h4>{result.word}</h4>
          <video src={result.video} controls width={320} aria-label={`Sign video for ${result.word}`} />
        </div>
      )}

      {(!result && custom) && (
        <div className="card">
          <p>No direct sign found in dictionary for <strong>{custom}</strong>. Try shorter keywords or check dictionary.</p>
        </div>
      )}
    </div>
  )
}

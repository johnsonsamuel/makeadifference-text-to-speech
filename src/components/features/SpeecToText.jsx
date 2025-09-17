import React, { useEffect, useRef, useState } from 'react'
import CopyToClipboardComponent from '../CopyToClipboard'

export default function SpeechToText(){
  const [listening, setListening] = useState(false)
  const [text, setText] = useState('')
  const recognitionRef = useRef(null)

  useEffect(()=>{
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
    if (!SpeechRecognition) {
      setText('Speech Recognition not supported in this browser. Try Chrome.')
      return
    }
    const rec = new SpeechRecognition()
    rec.lang = 'en-US'
    rec.interimResults = true
    rec.continuous = true

    rec.onresult = (ev) => {
      let interim = ''
      let final = ''
      for (let i = ev.resultIndex; i < ev.results.length; ++i) {
        const res = ev.results[i]
        if (res.isFinal) final += res[0].transcript
        else interim += res[0].transcript
      }
      setText((final + ' ' + interim).trim())
      if (['stop captions', 'stop'].includes(interim?.trim())) {
        rec.stop()
        setListening(false)
      }
    }
    rec.onerror = (e) => {
      console.error('Speech error', e)
    }
    recognitionRef.current = rec
    return ()=> {
      rec.stop()
    }
  },[])

  function toggle(){
    const rec = recognitionRef.current
    if (!rec) return
    if (!listening){
      try {
        rec.start()
        setListening(true)
        setText('')
      } catch(e){
        console.warn('Could not start recognition', e)
      }
    } else {
      rec.stop()
      setListening(false)
    }
  }

  function handleReset() {

  }

  return (
    <div>
      <div style={{display:'flex',gap:8,alignItems:'center',marginBottom:8}}>
        <button className="btn" onClick={toggle} aria-pressed={listening}>{listening ? 'Stop' : 'Start'} Captions</button>
        <span className="small" aria-live="polite">{listening ? 'Listening...' : 'Idle'}</span>
      </div>

      <div className="caption-box" role="status" aria-live="assertive" aria-atomic="true">
        {text || 'No speech detected yet.'}
      </div>
      <CopyToClipboardComponent textToCopy={text} />

      {/* <button onClick={handleReset}>
        {'Reset'}
      </button> */}
    </div>
  )
}

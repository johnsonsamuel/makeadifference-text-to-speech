import React from 'react'
import SpeechToText from './features/SpeecToText'
import TextToSign from './features/TextToSign'
import CameraSignRecognizer from './features/CameraSignRecoginzer'

export default function AccessibilityMode(){
  return (
    <div>
      <h2>Accessibility Mode</h2>

      <section className="card" aria-labelledby="captions-label" style={{marginBottom:12}}>
        <h3 id="captions-label">Live Captions (Speech → Text)</h3>
        <p className="small">Use the microphone to capture speech and show large captions.</p>
        <SpeechToText />
      </section>

      {/* <section className="card" style={{marginBottom:12}}>
        <h3>Text → Sign</h3>
        <TextToSign />
      </section> */}

      {/* <section className="card">
        <h3>Sign → Text (Camera — Beta)</h3>
        <p className="small">Open the camera and try alphabet/phrases detection (model integration required).</p>
        <CameraSignRecognizer />
      </section> */}
    </div>
  )
}

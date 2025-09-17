import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import ModeSelector from './components/ModeSelector'
import AccessibilityMode from './components//AccessbilityMode'
import LearningMode from './components/LearningMode'
import Profile from './components/Profile'
import './styles.css'
import SpeechToText from './components/features/SpeecToText'

export default function App() {
  return (
    <div className="app">
      <header className="app-header" role="banner">
        <Link to="/" aria-label="Home" className="logo">Voice to Text - makeadifference.app</Link>
        <nav aria-label="Main navigation">
          {/* <Link to="/accessibility">Accessibility</Link> */}
          {/* <Link to="/learning">Learning</Link>
          <Link to="/profile">Profile</Link> */}
        </nav>
      </header>

      <main role="main">
        <Routes>
          {/* <Route path="/" element={<ModeSelector />} /> */}
          <Route path="/" element={<SpeechToText />} />
          {/* <Route path="/learning" element={<LearningMode />} />
          <Route path="/profile" element={<Profile />} /> */}
        </Routes>
      </main>

      <footer className="app-footer" role="contentinfo">
        <small>Built with accessibility in mind — ASL Bridge | An initiative from makeadifference.app</small>
      </footer>
    </div>
  )
}

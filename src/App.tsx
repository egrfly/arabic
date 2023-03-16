import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import Home from './components/Home'
import Quiz from './components/Quiz'
import letterModes from './config/letterModes'
import wordModes from './config/wordModes'
import letters from './data/letters'
import interjections from './data/words/interjections'
import './App.scss'

const App = () => {
  return (
    <main className="App mt-5 px-4 py-5 bg-dark text-light text-center">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/letters"
                 element={<Quiz key="Arabic Abjad (Alphabet)" heading="Arabic Abjad (Alphabet)"
                                availableLettersOrWords={letters} modes={letterModes} />} />
          <Route path="/words/interjections"
                 element={<Quiz key="Interjections" heading="Interjections"
                                availableLettersOrWords={interjections} modes={wordModes} />} />
        </Routes>
      </Router>
    </main>
  )
}

export default App

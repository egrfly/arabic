import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import Home from './components/Home'
import Quiz from './components/Quiz'
import letterModes from './config/letterModes'
import wordModes from './config/wordModes'
import { wordCategories } from './data/words'
import { getFormattedPath } from './helpers/pathGenerator'
import letters from './data/letters'
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
          {
            Object.keys(wordCategories).map((category) => <Route path={`/words/${getFormattedPath(category)}`}
                                                                 element={<Quiz key={category} heading={category}
                                                                                availableLettersOrWords={wordCategories[category]}
                                                                                modes={wordModes} />}/>)
          }
        </Routes>
      </Router>
    </main>
  )
}

export default App

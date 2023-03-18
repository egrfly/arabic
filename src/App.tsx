import React, { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import Home from './components/Home'
import Quiz from './components/Quiz'
import letterModes from './config/letterModes'
import wordModes from './config/wordModes'
import { wordCategoryGroups } from './data/words'
import { getFormattedPath } from './helpers/pathGenerator'
import letters from './data/letters'
import './App.scss'

const App = () => {
  useEffect(() => {
    const root = document.getElementById('root')
    root!.style.transition = "background 2.5s"
    root!.style.backgroundColor = '#343a4044'
  }, [])

  return (
    <main className="App px-4 py-5 text-center">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/letters"
                 element={<Quiz key="Arabic Abjad (Alphabet)" heading="Arabic Abjad (Alphabet)"
                                availableLettersOrWords={letters} modes={letterModes} />} />
          {
            wordCategoryGroups.map((categoryGroup) =>
              Object.keys(categoryGroup).map((category) =>
                <Route path={`/words/${getFormattedPath(category)}`}
                       key={category}
                       element={<Quiz key={category} heading={category}
                                      availableLettersOrWords={categoryGroup[category]}
                                      modes={wordModes} />}/>
              )
            )
          }
        </Routes>
      </Router>
    </main>
  )
}

export default App

import React from 'react'
import Quiz from './components/Quiz'
import './App.scss'

const App = () => {
  return (
    <main className="App px-4 py-5 bg-dark text-light text-center">
      <h1 className="mb-4">Arabic Abjad (Alphabet)</h1>
      <Quiz />
    </main>
  )
}

export default App

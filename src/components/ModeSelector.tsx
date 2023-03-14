import React from 'react'
import modes from '../data/modes'
import mode from '../models/mode'
import './ModeSelector.scss'

interface ModeSelectorProps {
  questionMode: mode,
  answerMode: mode,
  setQuestionMode: (mode: mode) => void,
  setAnswerMode: (mode: mode) => void,
  reverseQuestionAndAnswerModes: () => void,
  reversedQuestionAndAnswerModes: boolean,
}

const ModeSelector = ({ questionMode, answerMode, setQuestionMode, setAnswerMode, reverseQuestionAndAnswerModes, reversedQuestionAndAnswerModes }: ModeSelectorProps) => {
  return (
    <div className="ModeSelector d-flex flex-column flex-sm-row justify-content-center align-items-center">
      <div className="dropdown d-inline-block m-1">
        <button className="ModeSelector__ModeButton btn btn-outline-light dropdown-toggle justify-content-between border-2" type="button" data-bs-toggle="dropdown" aria-expanded="false">
          {questionMode.name}
        </button>
        <ul className="ModeSelector__ModeDropdown dropdown-menu dropdown-menu-dark border-light text-center">
          {
            modes.filter(mode => ![questionMode.name, answerMode.name].includes(mode.name))
              .map(option => <li key={option.name}><button className="dropdown-item" onClick={() => setQuestionMode(option)}>{option.name}</button></li>)
          }
        </ul>
      </div>
      <button className="btn btn-outline-light m-1" onClick={reverseQuestionAndAnswerModes}>
        <i className={`bi bi-arrow-repeat ${reversedQuestionAndAnswerModes ? 'upside-down' : ''}`}></i>
      </button>
      <div className="dropdown d-inline-block m-1">
        <button className="ModeSelector__ModeButton btn btn-outline-light dropdown-toggle justify-content-between border-2" type="button" data-bs-toggle="dropdown" aria-expanded="false">
          {answerMode.name}
        </button>
        <ul className="ModeSelector__ModeDropdown dropdown-menu dropdown-menu-dark border-light text-center">
          {
            modes.filter(mode => ![questionMode.name, answerMode.name].includes(mode.name))
              .map(option => <li key={option.name}><button className="dropdown-item" onClick={() => setAnswerMode(option)}>{option.name}</button></li>)
          }
        </ul>
      </div>
    </div>
  )
}

export default ModeSelector

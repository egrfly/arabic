import React from 'react'
import mode from '../models/mode'
import letter from '../models/letter'
import word from '../models/word'
import './ModeSelector.scss'

interface ModeSelectorProps<T extends letter | word> {
  modes: mode<T>[],
  questionMode: mode<T>,
  answerMode: mode<T>,
  setQuestionMode: (mode: mode<T>) => void,
  setAnswerMode: (mode: mode<T>) => void,
  reverseQuestionAndAnswerModes: () => void,
  reversedQuestionAndAnswerModes: boolean,
}

const ModeSelector = <T extends letter | word>({ modes, questionMode, answerMode, setQuestionMode, setAnswerMode, reverseQuestionAndAnswerModes, reversedQuestionAndAnswerModes }: ModeSelectorProps<T>) => {
  return (
    <div className="ModeSelector d-flex flex-column flex-sm-row justify-content-center align-items-center">
      <div className="dropdown d-inline-block m-1">
        <button className="ModeSelector__ModeButton btn btn-dark dropdown-toggle justify-content-between border-2" type="button" data-bs-toggle="dropdown" aria-expanded="false">
          {questionMode.name}
        </button>
        <ul className="ModeSelector__ModeDropdown dropdown-menu dropdown-menu-dark p-0 text-center">
          {
            modes.filter((mode) => ![questionMode.name, answerMode.name].includes(mode.name))
                 .map((option) => <li key={option.name}><button className="dropdown-item" onClick={() => setQuestionMode(option)}>{option.name}</button></li>)
          }
        </ul>
      </div>
      <button className="ModeSelector__ReverseButton btn btn-dark m-1" onClick={reverseQuestionAndAnswerModes}>
        <i className={`ModeSelector__ReverseButtonIcon bi bi-arrow-repeat ${reversedQuestionAndAnswerModes ? 'ModeSelector__ReverseButtonIcon--UpsideDown' : ''}`}></i>
      </button>
      <div className="dropdown d-inline-block m-1">
        <button className="ModeSelector__ModeButton btn btn-dark dropdown-toggle justify-content-between border-2" type="button" data-bs-toggle="dropdown" aria-expanded="false">
          {answerMode.name}
        </button>
        <ul className="ModeSelector__ModeDropdown dropdown-menu dropdown-menu-dark p-0 text-center">
          {
            modes.filter((mode) => ![questionMode.name, answerMode.name].includes(mode.name))
                 .map((option) => <li key={option.name}><button className="dropdown-item" onClick={() => setAnswerMode(option)}>{option.name}</button></li>)
          }
        </ul>
      </div>
    </div>
  )
}

export default ModeSelector

import React, { useState } from 'react'
import alphabet from '../data/alphabet'
import modes from '../data/modes'
import mode from '../models/mode'
import letter from '../models/letter'
import './Quiz.scss'

const AlphabetQuiz = () => {
  const [questionMode, setQuestionMode] = useState<mode>(modes[0])
  const [answerMode, setAnswerMode] = useState<mode>(modes[1])

  const [currentLetter, setCurrentLetter] = useState<letter>()
  const [optionLetters, setOptionLetters] = useState<letter[]>()
  const [selectedLetter, setSelectedLetter] = useState<letter>()
  const [checkingState, setCheckingState] = useState<boolean>(false)

  const [reversedQuestionAndAnswerModes, setReversedQuestionAndAnswerModes] = useState<boolean>(false)

  const refreshLetter = () => {
    setCheckingState(false)
    setSelectedLetter(undefined)

    let targetLetter
    do {
      targetLetter = alphabet[Math.floor(alphabet.length * Math.random())]
    } while (targetLetter === currentLetter)
    setCurrentLetter(targetLetter)

    const newOptionLetters = [targetLetter]
    let decoyOptionLetter
    while (newOptionLetters.length < 4) {
      decoyOptionLetter = alphabet[Math.floor(alphabet.length * Math.random())]
      if (!newOptionLetters.includes(decoyOptionLetter)) {
        newOptionLetters.push(decoyOptionLetter)
      }
    }
    setOptionLetters(newOptionLetters.map(letter => ({ letter, sortingKey: Math.random() }))
      .sort((letter1, letter2) => letter1.sortingKey - letter2.sortingKey)
      .map(({ letter }) => letter))
  }

  const reverseQuestionAndAnswerTypes = () => {
    const previousQuestionMode = questionMode
    setQuestionMode(answerMode)
    setAnswerMode(previousQuestionMode)
    setReversedQuestionAndAnswerModes(!reversedQuestionAndAnswerModes)
  }

  const getOptionButtonClass = (letter: letter) => {
    if (checkingState && letter === currentLetter) {
      return "btn-success"
    } else if (checkingState && letter === selectedLetter) {
      return "btn-danger"
    } else if (letter === selectedLetter) {
      return "btn-primary"
    } else {
      return "btn-outline-primary"
    }
  }

  return (
    <>
      <div className="d-flex flex-lg-row flex-column justify-content-center align-items-center">
        <div className="mode btn btn-outline-light disabled m-2">{questionMode.name}</div>
        {/*<div className="dropdown m-2 d-inline-block">*/}
        {/*  <button className="btn btn-outline-light dropdown-toggle justify-content-between border-2" type="button" data-bs-toggle="dropdown" aria-expanded="false">*/}
        {/*    {questionMode.name}*/}
        {/*  </button>*/}
        {/*  <ul className="dropdown-menu dropdown-menu-dark border-light">*/}
        {/*    {*/}
        {/*      modes.filter(mode => ![questionMode.name, answerMode.name].includes(mode.name))*/}
        {/*        .map(option => <li><button className="dropdown-item" onClick={() => setQuestionMode(option)}>{option.name}</button></li>)*/}
        {/*    }*/}
        {/*  </ul>*/}
        {/*</div>*/}
        <div className="d-inline-block">
          <button className="btn btn-outline-light" onClick={reverseQuestionAndAnswerTypes}>
            <i className={`bi bi-arrow-repeat ${reversedQuestionAndAnswerModes ? "upside-down" : ""}`}></i>
          </button>
        </div>
        <div className="mode btn btn-outline-light disabled m-2">{answerMode.name}</div>
        {/*<div className="dropdown m-2 d-inline-block">*/}
        {/*  <button className="btn btn-outline-light dropdown-toggle justify-content-between border-2" type="button" data-bs-toggle="dropdown" aria-expanded="false">*/}
        {/*    {answerMode.name}*/}
        {/*  </button>*/}
        {/*  <ul className="dropdown-menu dropdown-menu-dark border-light">*/}
        {/*    {*/}
        {/*      modes.filter(mode => ![questionMode.name, answerMode.name].includes(mode.name))*/}
        {/*        .map(option => <li><button className="dropdown-item" onClick={() => setAnswerMode(option)}>{option.name}</button></li>)*/}
        {/*    }*/}
        {/*  </ul>*/}
        {/*</div>*/}
      </div>
      {
        currentLetter && optionLetters
          ? <>
              <div className="card w-75 mx-auto my-4 bg-black border border-primary border-2">
                <div className="card-body p-4 text-center">
                  <div className="fs-4">{questionMode.selector(currentLetter)}</div>
                  <div className="row">
                    {optionLetters.map(letter =>
                      <div className="col-lg-6 col-12 g-3 mt-3" key={letter.name}>
                        <button className={`btn ${getOptionButtonClass(letter)} w-100 p-3 fs-5`} style={{pointerEvents: checkingState ? "none" : undefined}} onClick={() => setSelectedLetter(letter)}>{answerMode.selector(letter)}</button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              {
                checkingState
                  ? <button className="btn btn-primary mt-2 mb-4" onClick={refreshLetter}>Continue</button>
                  : <button className="btn btn-primary mt-2 mb-4" onClick={() => setCheckingState(true)} disabled={!selectedLetter}>Check</button>
              }
            </>
          : <button className="btn btn-primary my-4" onClick={refreshLetter}>Start</button>
      }
    </>
  )
}

export default AlphabetQuiz

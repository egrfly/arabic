import React, { useState } from 'react'
import ModeSelector from './ModeSelector'
import OptionButton from './OptionButton'
import modes from '../data/modes'
import mode from '../models/mode'
import letter from '../models/letter'
import { generateNextOptionLetters, generateNextTargetLetter } from '../helpers/letterGenerator'

const AlphabetQuiz = () => {
  const [questionMode, setQuestionMode] = useState<mode>(modes[0])
  const [answerMode, setAnswerMode] = useState<mode>(modes[1])

  const [targetLetter, setTargetLetter] = useState<letter>()
  const [optionLetters, setOptionLetters] = useState<letter[]>()
  const [selectedLetter, setSelectedLetter] = useState<letter>()
  const [checkingState, setCheckingState] = useState<boolean>(false)

  const [reversedQuestionAndAnswerModes, setReversedQuestionAndAnswerModes] = useState<boolean>(false)

  const refreshLetter = () => {
    setCheckingState(false)
    setSelectedLetter(undefined)
    const nextTargetLetter = generateNextTargetLetter(targetLetter)
    const nextOptionLetters = generateNextOptionLetters(nextTargetLetter)
    setTargetLetter(nextTargetLetter)
    setOptionLetters(nextOptionLetters)
  }

  const reverseQuestionAndAnswerModes = () => {
    const previousQuestionMode = questionMode
    setQuestionMode(answerMode)
    setAnswerMode(previousQuestionMode)
    setReversedQuestionAndAnswerModes(!reversedQuestionAndAnswerModes)
  }

  return (
    <>
      <ModeSelector questionMode={questionMode} setQuestionMode={setQuestionMode}
                    answerMode={answerMode} setAnswerMode={setAnswerMode}
                    reverseQuestionAndAnswerModes={reverseQuestionAndAnswerModes}
                    reversedQuestionAndAnswerModes={reversedQuestionAndAnswerModes} />

      {
        targetLetter && optionLetters
          ? <>
              <div className="card w-75 mx-auto my-4 bg-black border border-primary border-2">
                <div className="card-body p-4 text-center">
                  <div className="fs-4">{questionMode.selector(targetLetter)}</div>
                  <div className="row">
                    {optionLetters.map(letter =>
                      <div className="col-lg-6 col-12 g-3 mt-3" key={letter.name}>
                        <OptionButton optionLetter={letter}
                                      targetLetter={targetLetter}
                                      selectedLetter={selectedLetter}
                                      setSelectedLetter={setSelectedLetter}
                                      answerMode={answerMode}
                                      checkingState={checkingState}
                                      key={letter.name} />
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

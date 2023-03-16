import React, { useState } from 'react'
import ModeSelector from './ModeSelector'
import OptionButton from './OptionButton'
import mode from '../models/mode'
import letter from '../models/letter'
import word from '../models/word'
import { generateNextOptionLettersOrWords, generateNextTargetLetterOrWord } from '../helpers/letterOrWordGenerator'

interface QuizProps<T extends letter | word> {
  heading: string,
  availableLettersOrWords: T[],
  modes: mode<T>[],
}

const Quiz = <T extends letter | word>({ heading, availableLettersOrWords, modes }: QuizProps<T>) => {
  const [questionMode, setQuestionMode] = useState<mode<T>>(modes[0])
  const [answerMode, setAnswerMode] = useState<mode<T>>(modes[1])

  const [targetLetterOrWord, setTargetLetterOrWord] = useState<T>()
  const [optionLettersOrWords, setOptionLettersOrWords] = useState<T[]>()
  const [selectedLetterOrWord, setSelectedLetterOrWord] = useState<T>()
  const [checkingState, setCheckingState] = useState<boolean>(false)

  const [reversedQuestionAndAnswerModes, setReversedQuestionAndAnswerModes] = useState<boolean>(false)

  const refreshLetter = () => {
    setCheckingState(false)
    setSelectedLetterOrWord(undefined)
    const nextTargetLetterOrWord = generateNextTargetLetterOrWord(availableLettersOrWords, targetLetterOrWord)
    const nextOptionLettersOrWords = generateNextOptionLettersOrWords(availableLettersOrWords, nextTargetLetterOrWord)
    setTargetLetterOrWord(nextTargetLetterOrWord)
    setOptionLettersOrWords(nextOptionLettersOrWords)
  }

  const reverseQuestionAndAnswerModes = () => {
    const previousQuestionMode = questionMode
    setQuestionMode(answerMode)
    setAnswerMode(previousQuestionMode)
    setReversedQuestionAndAnswerModes(!reversedQuestionAndAnswerModes)
  }

  return (
    <>
      <h1 className="mb-4">{heading}</h1>
      <ModeSelector modes={modes} questionMode={questionMode} answerMode={answerMode}
                    setQuestionMode={setQuestionMode} setAnswerMode={setAnswerMode}
                    reverseQuestionAndAnswerModes={reverseQuestionAndAnswerModes}
                    reversedQuestionAndAnswerModes={reversedQuestionAndAnswerModes} />
      {
        targetLetterOrWord && optionLettersOrWords
          ? <>
              <div className="card w-75 mx-auto my-4 bg-black border border-primary border-2">
                <div className="card-body p-4 text-center">
                  <div className="fs-4">{questionMode.selector(targetLetterOrWord)}</div>
                  <div className="row">
                    {optionLettersOrWords.map((letterOrWord, index) =>
                      <div className="col-lg-6 col-12 g-3 mt-3"
                           key={(letterOrWord as letter).name || (letterOrWord as word).transliteration}>
                        <OptionButton optionLetterOrWord={letterOrWord}
                                      targetLetterOrWord={targetLetterOrWord}
                                      selectedLetterOrWord={selectedLetterOrWord}
                                      setSelectedLetterOrWord={setSelectedLetterOrWord}
                                      answerMode={answerMode}
                                      checkingState={checkingState} />
                      </div>
                    )}
                  </div>
                </div>
              </div>
              {
                checkingState
                  ? <button className="btn btn-primary mt-2 mb-4" onClick={refreshLetter}>Continue</button>
                  : <button className="btn btn-primary mt-2 mb-4" onClick={() => setCheckingState(true)} disabled={!selectedLetterOrWord}>Check</button>
              }
            </>
          : <button className="btn btn-primary my-4" onClick={refreshLetter}>Start</button>
      }
    </>
  )
}

export default Quiz

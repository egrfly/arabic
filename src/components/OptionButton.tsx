import React from 'react'
import mode from '../models/mode'
import letter from '../models/letter'
import word from '../models/word'

interface OptionButtonProps<T extends letter | word> {
  optionLetterOrWord: T,
  targetLetterOrWord: T,
  selectedLetterOrWord?: T,
  setSelectedLetterOrWord: (letterOrWord: T) => void,
  answerMode: mode<T>,
  checkingState: boolean,
}

const OptionButton = <T extends letter | word>({ optionLetterOrWord, targetLetterOrWord, selectedLetterOrWord, setSelectedLetterOrWord, answerMode, checkingState }: OptionButtonProps<T>) => {
  const getCorrectnessClass = (letterOrWord: letter | word) => {
    if (checkingState && letterOrWord === targetLetterOrWord) {
      return 'btn-success'
    } else if (checkingState && letterOrWord === selectedLetterOrWord) {
      return 'btn-danger'
    } else if (letterOrWord === selectedLetterOrWord) {
      return 'btn-primary'
    } else {
      return 'btn-outline-primary'
    }
  }

  const getClickabilityClass = (checkingState: boolean) => {
    if (checkingState) {
      return 'pe-none'
    } else {
      return ''
    }
  }

  return <button className={`btn w-100 p-3 fs-5 ${getCorrectnessClass(optionLetterOrWord)} ${getClickabilityClass(checkingState)}`}
                 onClick={() => setSelectedLetterOrWord(optionLetterOrWord)}>{answerMode.selector(optionLetterOrWord)}</button>
}

export default OptionButton

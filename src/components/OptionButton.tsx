import React from 'react'
import letter from '../models/letter'
import mode from '../models/mode'

interface OptionButtonProps {
  optionLetter: letter,
  targetLetter: letter,
  selectedLetter?: letter,
  setSelectedLetter: (letter: letter) => void,
  answerMode: mode,
  checkingState: boolean,
}

const OptionButton = ({ optionLetter, targetLetter, selectedLetter, setSelectedLetter, answerMode, checkingState }: OptionButtonProps) => {
  const getCorrectnessClass = (letter: letter) => {
    if (checkingState && letter === targetLetter) {
      return 'btn-success'
    } else if (checkingState && letter === selectedLetter) {
      return 'btn-danger'
    } else if (letter === selectedLetter) {
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

  return <button className={`btn w-100 p-3 fs-5 ${getCorrectnessClass(optionLetter)} ${getClickabilityClass(checkingState)}`}
                 onClick={() => setSelectedLetter(optionLetter)}>{answerMode.selector(optionLetter)}</button>
}

export default OptionButton

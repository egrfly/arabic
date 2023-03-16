import letter from '../models/letter'
import word from '../models/word'

export const generateNextTargetLetterOrWord = <T extends letter | word>(availableLettersOrWords: T[], previousTargetLetterOrWord?: T) => {
  let targetLetterOrWord: T
  do {
    targetLetterOrWord = availableLettersOrWords[Math.floor(availableLettersOrWords.length * Math.random())]
  } while (targetLetterOrWord === previousTargetLetterOrWord)
  return targetLetterOrWord
}

export const generateNextOptionLettersOrWords = <T extends letter | word>(availableLettersOrWords: T[], nextTargetLetterOrWord: T) => {
  const nextOptionLettersOrWords = [nextTargetLetterOrWord]
  let decoyOptionLetterOrWord: T
  while (nextOptionLettersOrWords.length < 4) {
    decoyOptionLetterOrWord = availableLettersOrWords[Math.floor(availableLettersOrWords.length * Math.random())]
    if (!nextOptionLettersOrWords.includes(decoyOptionLetterOrWord)) {
      nextOptionLettersOrWords.push(decoyOptionLetterOrWord)
    }
  }
  return nextOptionLettersOrWords.map(letter => ({ letter, sortingKey: Math.random() }))
    .sort((letter1, letter2) => letter1.sortingKey - letter2.sortingKey)
    .map(({ letter }) => letter)
}

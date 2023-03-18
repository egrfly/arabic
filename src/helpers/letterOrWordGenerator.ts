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
    const alreadyPresent = nextOptionLettersOrWords.includes(decoyOptionLetterOrWord)
    const wordWithSameMeaningAlreadyPresent = (decoyOptionLetterOrWord as word).meaning && nextOptionLettersOrWords.filter((letterOrWord) =>
      (letterOrWord as word).meaning === (decoyOptionLetterOrWord as word).meaning).length > 0
    if (!alreadyPresent && !wordWithSameMeaningAlreadyPresent) {
      nextOptionLettersOrWords.push(decoyOptionLetterOrWord)
    }
  }
  return nextOptionLettersOrWords.map((letter) => ({ letter, sortingKey: Math.random() }))
    .sort((letter1, letter2) => letter1.sortingKey - letter2.sortingKey)
    .map(({ letter }) => letter)
}

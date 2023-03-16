import word from '../models/word'
import interjections from './words/interjections'
import time from './words/time'

export const wordCategories: { [category: string]: word[] } = {
  'Interjections': interjections,
  'Time': time,
}

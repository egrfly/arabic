import word from '../models/word'
import interjections from './words/interjections'
import time from './words/time'
import commonVerbs from './words/commonVerbs'
import miscellaneousVerbs from './words/miscellaneousVerbs'

export const wordCategories: { [category: string]: word[] } = {
  'Interjections': interjections,
  'Time': time,
  'Common Verbs': commonVerbs,
  'Miscellaneous Verbs': miscellaneousVerbs,
}

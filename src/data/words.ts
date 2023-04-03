import word from '../models/word'
import interjections from './words/interjections'
import prepositions from './words/prepositions'
import commonVerbs from './words/commonVerbs'
import miscellaneousVerbs from './words/miscellaneousVerbs'
import foodAndDrink from './words/foodAndDrink'
import furniture from './words/furniture'
import handheldItems from './words/handheldItems'
import generalPlaces from './words/generalPlaces'
import transportation from './words/transportation'
import animals from './words/animals'
import time from './words/time'
import numbers from './words/numbers'
import intangibleNouns from './words/intangibleNouns'
import specificPlaces from './words/specificPlaces'
import languages from './words/languages'

export const wordCategoryGroups: { [category: string]: word[] }[] = [
  {
    'Interjections': interjections,
    'Prepositions': prepositions,
  },
  {
    'Common Verbs': commonVerbs,
    'Miscellaneous Verbs': miscellaneousVerbs,
  },
  {
    'Food and Drink': foodAndDrink,
    'Furniture': furniture,
    'Handheld Items': handheldItems,
    'General Places': generalPlaces,
    'Transportation': transportation,
    'Animals': animals,
    'Time': time,
    'Numbers': numbers,
    'Intangible Nouns': intangibleNouns,
  },
  {
    'Specific Places': specificPlaces,
    'Languages': languages,
  },
]

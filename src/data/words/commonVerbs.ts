import word from '../../models/word'
import eindi from '../../assets/words/commonVerbs/eindi.mp3'
import ahibu from '../../assets/words/commonVerbs/ahibu.mp3'
import arid from '../../assets/words/commonVerbs/arid.mp3'
import aruh from '../../assets/words/commonVerbs/aruh.mp3'
import aqdir from '../../assets/words/commonVerbs/aqdir.mp3'
import ahut from '../../assets/words/commonVerbs/ahut.mp3'
import aakhudh from '../../assets/words/commonVerbs/aakhudh.mp3'

const commonVerbs: word[] = [
  {
    spelling: 'عندي',
    transliteration: 'eindi',
    sound: eindi,
    meaning: 'I have',
  },
  {
    spelling: 'أحب',
    transliteration: 'ahibu',
    sound: ahibu,
    meaning: 'I like',
  },
  {
    spelling: 'أريد',
    transliteration: 'arid',
    sound: arid,
    meaning: 'I want',
  },
  {
    spelling: 'أروح',
    transliteration: 'aruh',
    sound: aruh,
    meaning: 'I go',
  },
  {
    spelling: 'أقدر',
    transliteration: 'aqdir',
    sound: aqdir,
    meaning: 'I can',
  },
  {
    spelling: 'أحط',
    transliteration: 'ahut',
    sound: ahut,
    meaning: 'I put (dialect)',
  },
  {
    spelling: 'آخذ',
    transliteration: 'aakhudh',
    sound: aakhudh,
    meaning: 'I take',
  },
]

export default commonVerbs

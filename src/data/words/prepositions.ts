import word from '../../models/word'
import fi from '../../assets/words/prepositions/fi.mp3'
import min from '../../assets/words/prepositions/min.mp3'
import ealaa from '../../assets/words/prepositions/ealaa.mp3'
import iilaa from '../../assets/words/prepositions/iilaa.mp3'
import bi from '../../assets/words/prepositions/bi.mp3'
import mae from '../../assets/words/prepositions/mae.mp3'

const prepositions: word[] = [
  {
    spelling: 'في',
    transliteration: 'fi',
    sound: fi,
    meaning: 'in',
  },
  {
    spelling: 'من',
    transliteration: 'min',
    sound: min,
    meaning: 'from',
  },
  {
    spelling: 'على',
    transliteration: 'ealaa',
    sound: ealaa,
    meaning: 'on',
  },
  {
    spelling: 'إلى',
    transliteration: 'iilaa',
    sound: iilaa,
    meaning: 'to',
  },
  {
    spelling: 'ب',
    transliteration: 'bi',
    sound: bi,
    meaning: 'by',
  },
  {
    spelling: 'مع',
    transliteration: 'mae',
    sound: mae,
    meaning: 'with',
  },
]

export default prepositions

import word from '../../models/word'
import marhaba from '../../assets/words/interjections/marhaba.mp3'
import alsalamEalaykum from '../../assets/words/interjections/alsalamEalaykum.mp3'
import lawSamaht from '../../assets/words/interjections/lawSamaht.mp3'
import shukran from '../../assets/words/interjections/shukran.mp3'
import asf from '../../assets/words/interjections/asf.mp3'
import naeam from '../../assets/words/interjections/naeam.mp3'
import la from '../../assets/words/interjections/la.mp3'
import maeAlsalama from '../../assets/words/interjections/maeAlsalama.mp3'

const interjections: word[] = [
  {
    spelling: 'مرحبا',
    transliteration: 'marhaba',
    sound: marhaba,
    meaning: 'hello',
  },
  {
    spelling: 'السلام عليكم',
    transliteration: 'alsalam ealaykum',
    sound: alsalamEalaykum,
    meaning: 'peace be upon you',
  },
  {
    spelling: 'لو سمحت',
    transliteration: 'law samaht',
    sound: lawSamaht,
    meaning: 'please',
  },
  {
    spelling: 'شكراً',
    transliteration: 'shukran',
    sound: shukran,
    meaning: 'thank you',
  },
  {
    spelling: 'آسف',
    transliteration: 'asf',
    sound: asf,
    meaning: 'sorry',
  },
  {
    spelling: 'نعم',
    transliteration: 'naeam',
    sound: naeam,
    meaning: 'yes',
  },
  {
    spelling: 'لا',
    transliteration: 'la',
    sound: la,
    meaning: 'no',
  },
  {
    spelling: 'مع السلامة',
    transliteration: 'mae alsalama',
    sound: maeAlsalama,
    meaning: 'goodbye',
  },
]

export default interjections

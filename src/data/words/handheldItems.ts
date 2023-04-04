import word from '../../models/word'
import jawal from '../../assets/words/handheldItems/jawal.mp3'
import risala from '../../assets/words/handheldItems/risala.mp3'
import kitab from '../../assets/words/handheldItems/kitab.mp3'
import fulus from '../../assets/words/handheldItems/fulus.mp3'
import qalam from '../../assets/words/handheldItems/qalam.mp3'
import shanta from '../../assets/words/handheldItems/shanta.mp3'
import haqiba from '../../assets/words/handheldItems/haqiba.mp3'
import kura from '../../assets/words/handheldItems/kura.mp3'

const handheldItems: word[] = [
  {
    spelling: 'جوال',
    transliteration: 'jawal',
    sound: jawal,
    meaning: 'mobile phone',
  },
  {
    spelling: 'رسالة',
    transliteration: 'risala',
    sound: risala,
    meaning: 'letter',
  },
  {
    spelling: 'كتاب',
    transliteration: 'kitab',
    sound: kitab,
    meaning: 'book',
  },
  {
    spelling: 'فلوس',
    transliteration: 'fulus',
    sound: fulus,
    meaning: 'money',
  },
  {
    spelling: 'قلم',
    transliteration: 'qalam',
    sound: qalam,
    meaning: 'pen',
  },
  {
    spelling: 'شنطة',
    transliteration: 'shanta',
    sound: shanta,
    meaning: 'bag',
  },
  {
    spelling: 'حقيبة',
    transliteration: 'haqiba',
    sound: haqiba,
    meaning: 'bag',
  },
  {
    spelling: 'كرة',
    transliteration: 'kura',
    sound: kura,
    meaning: 'ball',
  },
]

export default handheldItems

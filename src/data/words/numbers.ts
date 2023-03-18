import word from '../../models/word'
import sifr from '../../assets/words/numbers/sifr.mp3'
import wahid from '../../assets/words/numbers/wahid.mp3'
import aithnayn from '../../assets/words/numbers/aithnayn.mp3'
import thalatha from '../../assets/words/numbers/thalatha.mp3'
import arbaea from '../../assets/words/numbers/arbaea.mp3'
import khamsa from '../../assets/words/numbers/khamsa.mp3'
import sita from '../../assets/words/numbers/sita.mp3'
import sabea from '../../assets/words/numbers/sabea.mp3'
import thamania from '../../assets/words/numbers/thamania.mp3'
import tise from '../../assets/words/numbers/tise.mp3'
import eashra from '../../assets/words/numbers/eashra.mp3'

const numbers: word[] = [
  {
    spelling: 'صفر',
    transliteration: 'sifr',
    sound: sifr,
    meaning: 'zero',
  },
  {
    spelling: 'واحد',
    transliteration: 'wahid',
    sound: wahid,
    meaning: 'one',
  },
  {
    spelling: 'اثنين',
    transliteration: 'aithnayn',
    sound: aithnayn,
    meaning: 'two',
  },
  {
    spelling: 'ثلاثة',
    transliteration: 'thalatha',
    sound: thalatha,
    meaning: 'three',
  },
  {
    spelling: 'أربعة',
    transliteration: 'arbaea',
    sound: arbaea,
    meaning: 'four',
  },
  {
    spelling: 'خمسة',
    transliteration: 'khamsa',
    sound: khamsa,
    meaning: 'five',
  },
  {
    spelling: 'ستة',
    transliteration: 'sita',
    sound: sita,
    meaning: 'six',
  },
  {
    spelling: 'سبعة',
    transliteration: 'sabea',
    sound: sabea,
    meaning: 'seven',
  },
  {
    spelling: 'ثمانية',
    transliteration: 'thamania',
    sound: thamania,
    meaning: 'eight',
  },
  {
    spelling: 'تسع',
    transliteration: 'tise',
    sound: tise,
    meaning: 'nine',
  },
  {
    spelling: 'عشرة',
    transliteration: 'eashra',
    sound: eashra,
    meaning: 'ten',
  },
]

export default numbers

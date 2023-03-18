import word from '../../models/word'
import sayara from '../../assets/words/transportation/sayara.mp3'
import tayira from '../../assets/words/transportation/tayira.mp3'
import hilikubtar from '../../assets/words/transportation/hilikubtar.mp3'
import qitar from '../../assets/words/transportation/qitar.mp3'
import safina from '../../assets/words/transportation/safina.mp3'
import qarib from '../../assets/words/transportation/qarib.mp3'
import bas from '../../assets/words/transportation/bas.mp3'

const transportation: word[] = [
  {
    spelling: 'سيارة',
    transliteration: 'sayara',
    sound: sayara,
    meaning: 'car',
  },
  {
    spelling: 'طائرة',
    transliteration: 'tayira',
    sound: tayira,
    meaning: 'plane',
  },
  {
    spelling: 'هليكوبتر',
    transliteration: 'hilikubtar',
    sound: hilikubtar,
    meaning: 'helicopter',
  },
  {
    spelling: 'قطار',
    transliteration: 'qitar',
    sound: qitar,
    meaning: 'train',
  },
  {
    spelling: 'سفينة',
    transliteration: 'safina',
    sound: safina,
    meaning: 'ship',
  },
  {
    spelling: 'قارب',
    transliteration: 'qarib',
    sound: qarib,
    meaning: 'boat',
  },
  {
    spelling: 'باص',
    transliteration: 'bas',
    sound: bas,
    meaning: 'bus',
  },
]

export default transportation

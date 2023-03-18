import word from '../../models/word'
import sabuwra from '../../assets/words/furniture/sabuwra.mp3'
import bab from '../../assets/words/furniture/bab.mp3'
import tilifizyun from '../../assets/words/furniture/tilifizyun.mp3'
import kursi from '../../assets/words/furniture/kursi.mp3'
import tawila from '../../assets/words/furniture/tawila.mp3'
import kumbiutir from '../../assets/words/furniture/kumbiutir.mp3'

const furniture: word[] = [
  {
    spelling: 'سبورة',
    transliteration: 'sabuwra',
    sound: sabuwra,
    meaning: 'whiteboard',
  },
  {
    spelling: 'باب',
    transliteration: 'bab',
    sound: bab,
    meaning: 'door',
  },
  {
    spelling: 'تلفزيون',
    transliteration: 'tilifizyun',
    sound: tilifizyun,
    meaning: 'television',
  },
  {
    spelling: 'كرسي',
    transliteration: 'kursi',
    sound: kursi,
    meaning: 'chair',
  },
  {
    spelling: 'طاولة',
    transliteration: 'tawila',
    sound: tawila,
    meaning: 'table',
  },
  {
    spelling: 'كومبيوتر',
    transliteration: 'kumbiutir',
    sound: kumbiutir,
    meaning: 'computer',
  },
]

export default furniture

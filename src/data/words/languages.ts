import word from '../../models/word'
import earabi from '../../assets/words/languages/earabi.mp3'
import inkilizi from '../../assets/words/languages/inkilizi.mp3'
import fransi from '../../assets/words/languages/fransi.mp3'
import almani from '../../assets/words/languages/almani.mp3'
import iitali from '../../assets/words/languages/iitali.mp3'
import asbani from '../../assets/words/languages/asbani.mp3'
import ruwsi from '../../assets/words/languages/ruwsi.mp3'
import sini from '../../assets/words/languages/sini.mp3'
import sirbi from '../../assets/words/languages/sirbi.mp3'
import turki from '../../assets/words/languages/turki.mp3'

const languages: word[] = [
  {
    spelling: 'عربي',
    transliteration: 'earabi',
    sound: earabi,
    meaning: 'Arabic',
  },
  {
    spelling: 'إنكليزي',
    transliteration: 'inkilizi',
    sound: inkilizi,
    meaning: 'English',
  },
  {
    spelling: 'فرنسي',
    transliteration: 'fransi',
    sound: fransi,
    meaning: 'French',
  },
  {
    spelling: 'ألماني',
    transliteration: 'almani',
    sound: almani,
    meaning: 'German',
  },
  {
    spelling: 'إيطالي',
    transliteration: 'iitali',
    sound: iitali,
    meaning: 'Italian',
  },
  {
    spelling: 'أسباني',
    transliteration: 'asbani',
    sound: asbani,
    meaning: 'Spanish',
  },
  {
    spelling: 'روسي',
    transliteration: 'ruwsi',
    sound: ruwsi,
    meaning: 'Russian',
  },
  {
    spelling: 'صيني',
    transliteration: 'sini',
    sound: sini,
    meaning: 'Chinese',
  },
  {
    spelling: 'صربي',
    transliteration: 'sirbi',
    sound: sirbi,
    meaning: 'Serbian',
  },
  {
    spelling: 'تركي',
    transliteration: 'turki',
    sound: turki,
    meaning: 'Turkish',
  },
]

export default languages

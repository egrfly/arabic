import word from '../../models/word'
import bayt from '../../assets/words/generalPlaces/bayt.mp3'
import mateam from '../../assets/words/generalPlaces/mateam.mp3'
import bank from '../../assets/words/generalPlaces/bank.mp3'
import mahala from '../../assets/words/generalPlaces/mahala.mp3'
import mustashfa from '../../assets/words/generalPlaces/mustashfa.mp3'
import maktaba from '../../assets/words/generalPlaces/maktaba.mp3'

const generalPlaces: word[] = [
  {
    spelling: 'بيت',
    transliteration: 'bayt',
    sound: bayt,
    meaning: 'house',
  },
  {
    spelling: 'مطعم',
    transliteration: 'mateam',
    sound: mateam,
    meaning: 'restaurant',
  },
  {
    spelling: 'بنك',
    transliteration: 'bank',
    sound: bank,
    meaning: 'bank',
  },
  {
    spelling: 'محل',
    transliteration: 'mahala',
    sound: mahala,
    meaning: 'shop',
  },
  {
    spelling: 'مستشفى',
    transliteration: 'mustashfa',
    sound: mustashfa,
    meaning: 'hospital',
  },
  {
    spelling: 'مكتبة',
    transliteration: 'maktaba',
    sound: maktaba,
    meaning: 'library',
  },
]

export default generalPlaces

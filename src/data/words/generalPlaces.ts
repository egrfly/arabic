import word from '../../models/word'
import bayt from '../../assets/words/generalPlaces/bayt.mp3'
import mateam from '../../assets/words/generalPlaces/mateam.mp3'
import bank from '../../assets/words/generalPlaces/bank.mp3'
import mahal from '../../assets/words/generalPlaces/mahal.mp3'
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
    transliteration: 'mahal',
    sound: mahal,
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
  {
    spelling: 'مسجد',
    transliteration: 'masjid',
    sound: '',
    meaning: 'mosque',
  },
  {
    spelling: 'شارع',
    transliteration: 'sharie',
    sound: '',
    meaning: 'street',
  },
  {
    spelling: 'سينما',
    transliteration: 'sinima',
    sound: '',
    meaning: 'cinema',
  },
  {
    spelling: 'شركة',
    transliteration: 'sharika',
    sound: '',
    meaning: 'company',
  },
  {
    spelling: 'مدرسة',
    transliteration: 'madrasa',
    sound: '',
    meaning: 'school',
  },
  {
    spelling: 'فندق',
    transliteration: 'funduq',
    sound: '',
    meaning: 'hotel',
  },
]

export default generalPlaces

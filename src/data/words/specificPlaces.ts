import word from '../../models/word'
import euman from '../../assets/words/specificPlaces/euman.mp3'
import misr from '../../assets/words/specificPlaces/misr.mp3'
import alkhalij from '../../assets/words/specificPlaces/alkhalij.mp3'
import alsharq from '../../assets/words/specificPlaces/alsharq.mp3'
import biritania from '../../assets/words/specificPlaces/biritania.mp3'
import landan from '../../assets/words/specificPlaces/landan.mp3'
import faransa from '../../assets/words/specificPlaces/faransa.mp3'
import baris from '../../assets/words/specificPlaces/baris.mp3'
import almanya from '../../assets/words/specificPlaces/almanya.mp3'
import iitalia from '../../assets/words/specificPlaces/iitalia.mp3'
import iisbania from '../../assets/words/specificPlaces/iisbania.mp3'
import rusia from '../../assets/words/specificPlaces/rusia.mp3'
import sin from '../../assets/words/specificPlaces/sin.mp3'
import sirbia from '../../assets/words/specificPlaces/sirbia.mp3'
import turkia from '../../assets/words/specificPlaces/turkia.mp3'

const specificPlaces: word[] = [
  {
    spelling: 'عمان',
    transliteration: 'euman',
    sound: euman,
    meaning: 'Oman',
  },
  {
    spelling: 'مصر',
    transliteration: 'misr',
    sound: misr,
    meaning: 'Egypt',
  },
  {
    spelling: 'الخليج',
    transliteration: 'alkhalij',
    sound: alkhalij,
    meaning: 'the Gulf',
  },
  {
    spelling: 'الشرق',
    transliteration: 'alsharq',
    sound: alsharq,
    meaning: 'the Levant',
  },
  {
    spelling: 'بريطانيا',
    transliteration: 'biritania',
    sound: biritania,
    meaning: 'Britain',
  },
  {
    spelling: 'لندن',
    transliteration: 'landan',
    sound: landan,
    meaning: 'London',
  },
  {
    spelling: 'فرنسا',
    transliteration: 'faransa',
    sound: faransa,
    meaning: 'France',
  },
  {
    spelling: 'باريس',
    transliteration: 'baris',
    sound: baris,
    meaning: 'Paris',
  },
  {
    spelling: 'ألمانيا',
    transliteration: 'almanya',
    sound: almanya,
    meaning: 'Germany',
  },
  {
    spelling: 'إيطاليا',
    transliteration: 'iitalia',
    sound: iitalia,
    meaning: 'Italy',
  },
  {
    spelling: 'إسبانيا',
    transliteration: 'iisbania',
    sound: iisbania,
    meaning: 'Spain',
  },
  {
    spelling: 'روسيا',
    transliteration: 'rusia',
    sound: rusia,
    meaning: 'Russia',
  },
  {
    spelling: 'صين',
    transliteration: 'sin',
    sound: sin,
    meaning: 'China',
  },
  {
    spelling: 'صربيا',
    transliteration: 'sirbia',
    sound: sirbia,
    meaning: 'Serbia',
  },
  {
    spelling: 'تركيا',
    transliteration: 'turkia',
    sound: turkia,
    meaning: 'Turkey',
  },
]

export default specificPlaces

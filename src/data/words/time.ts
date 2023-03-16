import word from '../../models/word'
import maraWahiduh from '../../assets/words/time/maraWahiduh.mp3'
import maraThania from '../../assets/words/time/maraThania.mp3'
import alan from '../../assets/words/time/alan.mp3'
import alhin from '../../assets/words/time/alhin.mp3'
import alyawm from '../../assets/words/time/alyawm.mp3'
import daqiqa from '../../assets/words/time/daqiqa.mp3'
import saea from '../../assets/words/time/saea.mp3'
import yawm from '../../assets/words/time/yawm.mp3'
import usbue from '../../assets/words/time/usbue.mp3'
import shahr from '../../assets/words/time/shahr.mp3'
import sana from '../../assets/words/time/sana.mp3'

const time: word[] = [
  {
    spelling: 'مرة واحدة',
    transliteration: 'mara wahiduh',
    sound: maraWahiduh,
    meaning: 'once',
  },
  {
    spelling: 'مرة ثانية',
    transliteration: 'mara thania',
    sound: maraThania,
    meaning: 'again',
  },
  {
    spelling: 'الآن',
    transliteration: 'alan',
    sound: alan,
    meaning: 'now',
  },
  {
    spelling: 'الحين',
    transliteration: 'alhin',
    sound: alhin,
    meaning: 'now (dialect)',
  },
  {
    spelling: 'اليوم',
    transliteration: 'alyawm',
    sound: alyawm,
    meaning: 'today',
  },
  {
    spelling: 'دقيقة',
    transliteration: 'daqiqa',
    sound: daqiqa,
    meaning: 'minute',
  },
  {
    spelling: 'ساعة',
    transliteration: 'saea',
    sound: saea,
    meaning: 'hour',
  },
  {
    spelling: 'يوم',
    transliteration: 'yawm',
    sound: yawm,
    meaning: 'day',
  },
  {
    spelling: 'أسبوع',
    transliteration: 'usbue',
    sound: usbue,
    meaning: 'week',
  },
  {
    spelling: 'شهر',
    transliteration: 'shahr',
    sound: shahr,
    meaning: 'month',
  },
  {
    spelling: 'سنة',
    transliteration: 'sana',
    sound: sana,
    meaning: 'year',
  },
]

export default time

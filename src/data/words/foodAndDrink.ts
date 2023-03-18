import word from '../../models/word'
import khubz from '../../assets/words/foodAndDrink/khubz.mp3'
import burtaqal from '../../assets/words/foodAndDrink/burtaqal.mp3'
import tuwt from '../../assets/words/foodAndDrink/tuwt.mp3'
import qahwa from '../../assets/words/foodAndDrink/qahwa.mp3'
import shay from '../../assets/words/foodAndDrink/shay.mp3'
import halib from '../../assets/words/foodAndDrink/halib.mp3'
import easir from '../../assets/words/foodAndDrink/easir.mp3'
import ma from '../../assets/words/foodAndDrink/ma.mp3'
import may from '../../assets/words/foodAndDrink/may.mp3'

const foodAndDrink: word[] = [
  {
    spelling: 'خبز',
    transliteration: 'khubz',
    sound: khubz,
    meaning: 'bread',
  },
  {
    spelling: 'برتقال',
    transliteration: 'burtaqal',
    sound: burtaqal,
    meaning: 'orange',
  },
  {
    spelling: 'توت',
    transliteration: 'tuwt',
    sound: tuwt,
    meaning: 'berries',
  },
  {
    spelling: 'قهوة',
    transliteration: 'qahwa',
    sound: qahwa,
    meaning: 'coffee',
  },
  {
    spelling: 'شاي',
    transliteration: 'shay',
    sound: shay,
    meaning: 'tea',
  },
  {
    spelling: 'حليب',
    transliteration: 'halib',
    sound: halib,
    meaning: 'milk',
  },
  {
    spelling: 'عصير',
    transliteration: 'easir',
    sound: easir,
    meaning: 'juice',
  },
  {
    spelling: 'ماء',
    transliteration: 'ma',
    sound: ma,
    meaning: 'water',
  },
  {
    spelling: 'ماي',
    transliteration: 'may',
    sound: may,
    meaning: 'water (dialect)',
  },
]

export default foodAndDrink

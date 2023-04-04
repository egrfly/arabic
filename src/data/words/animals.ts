import word from '../../models/word'
import hisan from '../../assets/words/animals/hisan.mp3'
import fahal from '../../assets/words/animals/fahal.mp3'
import jamal from '../../assets/words/animals/jamal.mp3'
import zarafa from '../../assets/words/animals/zarafa.mp3'
import kalb from '../../assets/words/animals/kalb.mp3'
import namir from '../../assets/words/animals/namir.mp3'
import nahla from '../../assets/words/animals/nahla.mp3'
import dhubaba from '../../assets/words/animals/dhubaba.mp3'
import namla from '../../assets/words/animals/namla.mp3'

const animals: word[] = [
  {
    spelling: 'حصان',
    transliteration: 'hisan',
    sound: hisan,
    meaning: 'horse',
  },
  {
    spelling: 'فحل',
    transliteration: 'fahal',
    sound: fahal,
    meaning: 'stallion',
  },
  {
    spelling: 'جمل',
    transliteration: 'jamal',
    sound: jamal,
    meaning: 'camel',
  },
  {
    spelling: 'زرافة',
    transliteration: 'zarafa',
    sound: zarafa,
    meaning: 'giraffe',
  },
  {
    spelling: 'كلب',
    transliteration: 'kalb',
    sound: kalb,
    meaning: 'dog',
  },
  {
    spelling: 'نمر',
    transliteration: 'namir',
    sound: namir,
    meaning: 'tiger',
  },
  {
    spelling: 'نحلة',
    transliteration: 'nahla',
    sound: nahla,
    meaning: 'bee',
  },
  {
    spelling: 'ذبابة',
    transliteration: 'dhubaba',
    sound: dhubaba,
    meaning: 'fly',
  },
  {
    spelling: 'نملة',
    transliteration: 'namla',
    sound: namla,
    meaning: 'ant',
  },
]

export default animals

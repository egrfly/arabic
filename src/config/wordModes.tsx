import React from 'react'
import Arabic from '../components/Arabic'
import mode from '../models/mode'
import word from '../models/word'

const wordModes: mode<word>[] = [
  {
    name: 'Word spelling',
    selector: (word: word) => <Arabic>{word.spelling}</Arabic>,
  },
  {
    name: 'Word transliteration',
    selector: (word: word) => word.transliteration,
  },
  {
    name: 'Word sound',
    selector: (word: word) => <audio src={word.sound} controls className="align-middle mw-100 pe-auto"
                                     onPlay={(event) => (event.target as HTMLAudioElement).parentElement?.click()} />,
  },
  {
    name: 'Word meaning',
    selector: (word: word) => word.meaning,
  },
]

export default wordModes

import React from 'react'
import Arabic from '../components/Arabic'
import mode from '../models/mode'
import letter from '../models/letter'

const letterModes: mode<letter>[] = [
  {
    name: 'Letter name',
    selector: (letter: letter) => letter.name,
  },
  {
    name: 'Letter symbol (isolated)',
    selector: (letter: letter) => <Arabic>{letter.isolated}</Arabic>,
  },
  {
    name: 'Letter symbol (initial)',
    selector: (letter: letter) => <Arabic>{letter.initial}</Arabic>,
  },
  {
    name: 'Letter symbol (medial)',
    selector: (letter: letter) => <Arabic>{letter.medial}</Arabic>,
  },
  {
    name: 'Letter symbol (final)',
    selector: (letter: letter) => <Arabic>{letter.final}</Arabic>,
  },
  {
    name: 'Letter sound',
    selector: (letter: letter) => <audio src={letter.sound} controls className="align-middle mw-100 pe-auto" />,
  },
]

export default letterModes

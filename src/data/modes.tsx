import React from 'react'
import Arabic from '../components/Arabic'
import mode from '../models/mode'
import letter from '../models/letter'

const modes: mode[] = [
  {
    name: 'Letter names',
    selector: (letter: letter) => letter.name,
  },
  {
    name: 'Letter symbols',
    selector: (letter: letter) => <Arabic>{letter.symbol}</Arabic>,
  },
  {
    name: 'Letter sounds',
    selector: (letter: letter) => <audio src={letter.sound} controls className="align-middle mw-100 pe-auto" />,
  },
]

export default modes

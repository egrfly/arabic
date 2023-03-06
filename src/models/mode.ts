import { ReactNode } from 'react'
import letter from './letter'

interface mode {
  name: string,
  selector: (letter: letter) => ReactNode,
}

export default mode

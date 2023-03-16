import { ReactNode } from 'react'
import letter from './letter'
import word from './word'

interface mode<T extends letter | word> {
  name: string,
  selector: (letterOrWord: T) => ReactNode,
}

export default mode

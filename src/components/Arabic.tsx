import React, { ReactNode } from 'react'
import './Arabic.scss'

interface ArabicProps {
  children?: ReactNode,
}

const Arabic = ({ children }: ArabicProps) => {
  return <span className="arabic">{children}</span>
}

export default Arabic

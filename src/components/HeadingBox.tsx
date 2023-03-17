import React from 'react'
import './HeadingBox.scss'

interface HeadingBoxProps {
  heading: string,
}

const HeadingBox = ({ heading }: HeadingBoxProps) => {
  return <h1 className="HeadingBox mx-auto mb-4 p-3 rounded">{heading}</h1>
}

export default HeadingBox

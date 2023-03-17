import React from 'react'
import HeadingBox from './HeadingBox'
import './Home.scss'

const Home = () => {
  return (
    <div className="Home">
      <HeadingBox heading="Learn Arabic." />
      <div className="Home__ParagraphBox d-flex mx-auto">
        <p className="Home__Paragraph w-100 my-1 text-light border border-dark rounded">Use the links at the top of the page to choose a category.</p>
      </div>
    </div>
  )
}

export default Home

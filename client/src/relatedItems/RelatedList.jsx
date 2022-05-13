import React from 'react';
import Card from './Card.jsx'
import '../carousel.css'

const RelatedList = ({imgs}) => {
  var cards = imgs.map((img) => {
    return (
      <Card img={img} />
    )

  })
  return (
    <ul className="cardHolder">
      {cards}
    </ul>
  )
}

export default RelatedList;
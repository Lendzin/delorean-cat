import React, {useState} from 'react'
import {Card} from 'react-bootstrap'
import './CatCard.css'

export const CatCard = ({catData}) => {
  const {image, name, allergyInducingFur, cutenessLevel, livesLeft} = catData
  const [showBack, setShowBack] = useState(false)
  const front = showBack ? {display: 'none'} : {}
  const back = showBack ? {} : {display: 'none'}

  return (
    <>
      <Card
        className='cat-card'
        id='front'
        onClick={() => {
          setShowBack(true)
        }}
        style={front}
      >
        <Card.Body>
          <Card.Img
            alt='cat'
            onError={(error) => {
              error.target.src = './images/catmissing.jpg'
            }}
            src={`./images/${image}`}
          />{' '}
        </Card.Body>
        <Card.Title>{name} </Card.Title>
      </Card>
      <Card
        className='cat-card'
        id='back'
        onClick={() => {
          setShowBack(false)
        }}
        style={back}
      >
        <Card.Body>
          <Card.Title>{name} </Card.Title>
          <Card.Text>
            Allergy inducing fur: {allergyInducingFur ? 'Yes' : 'No'}
          </Card.Text>
          <Card.Text>Cuteness Level {cutenessLevel}</Card.Text>
          <Card.Text>Lives left: {livesLeft}</Card.Text>
        </Card.Body>
      </Card>
    </>
  )
}

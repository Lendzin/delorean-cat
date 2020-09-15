import {CatCard} from '../components/CatCard/CatCard'
import React from 'react'
import {Row, Col} from 'react-bootstrap'

const addRowsCols = (children, key) => {
  return (
    <Row key={key + Date.now()} className='row-cats'>
      {children.map((element, index) => {
        return (
          <Col key={index + Date.now()} className='col-cats'>
            {element}
          </Col>
        )
      })}
    </Row>
  )
}

export const getCatContent = (cats) => {
  let content = []
  let array = []
  let catElements = cats.map((cat) => {
    return <CatCard catData={cat} />
  })
  let elementCopies = catElements.slice(0)
  while (elementCopies.length > 2) {
    array.push(elementCopies.splice(0, 2))
  }
  array.push(elementCopies)
  array.forEach((innerArray, index) => {
    content.push(addRowsCols(innerArray, index))
  })
  return content
}

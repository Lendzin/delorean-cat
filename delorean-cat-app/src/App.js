import React, {useState, useEffect} from 'react'
import {Row, Col} from 'react-bootstrap'
import {URLs} from './config'
import axios from 'axios'
import './App.css'
import {CatCard} from './components/CatCard/CatCard'
import {SortingMenu} from './components/SortingMenu'

const App = () => {
  const [defaultCats, setDefaultCats] = useState([])
  const [cats, setCats] = useState([])

  useEffect(() => {
    async function loadCats() {
      try {
        const response = await axios.get(URLs.catSourceLive)
        const catObjects = response.data.cats
        let catObjectsArray = Object.keys(catObjects).map((cat) => {
          return catObjects[cat]
        })
        setCats(catObjectsArray)
        setDefaultCats(catObjectsArray)
      } catch (error) {
        console.error(error)
      }
    }
    loadCats()
  }, [])

  const changeSorting = (sortType) => {
    let catsToSort = cats.slice(0)

    if (sortType === 'Ascending') {
      setCats([...catsToSort.sort((a, b) => a.cutenessLevel - b.cutenessLevel)])
    } else if (sortType === 'Descending') {
      setCats([...catsToSort.sort((a, b) => b.cutenessLevel - a.cutenessLevel)])
    } else if (sortType === 'None') {
      setCats([...defaultCats])
    }
  }

  const addRowsCols = (children) => {
    return (
      <>
        <Row className='row-cats'>
          {children.map((element) => {
            return <Col className='col-cats'>{element}</Col>
          })}
        </Row>
      </>
    )
  }

  const setContent = () => {
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
    array.forEach((innerArray) => {
      content.push(addRowsCols(innerArray))
    })
    return content
  }

  const content = setContent()

  return (
    <div className='App'>
      <header className='App-header'>
        <Row>
          <SortingMenu changeSorting={changeSorting} />
        </Row>
        {content}
      </header>
    </div>
  )
}

export default App

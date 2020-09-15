import React, {useState, useEffect} from 'react'
import {Row} from 'react-bootstrap'
import {getCatContent} from './services/contentHandler'
import {SortingMenu} from './components/SortingMenu/SortingMenu'
import {URLs} from './config'
import axios from 'axios'
import './App.css'

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

  const content = getCatContent(cats)

  return (
    <div className='App'>
      <header className='App-header'>
        <Row id='line'>
          <SortingMenu changeSorting={changeSorting} />
        </Row>
        {content}
      </header>
    </div>
  )
}

export default App

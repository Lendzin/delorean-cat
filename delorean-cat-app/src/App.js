import React, {useState, useEffect} from 'react'
import {URLs} from './config'
import axios from 'axios'
import './App.css'

const App = () => {
  const [defaultCats, setDefaultCats] = useState([])
  const [cats, setCats] = useState([])

  useEffect(() => {
    async function loadCats() {
      try {
        const response = await axios.get(URLs.catSource)
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

  useEffect(() => {
    console.log(cats)
  }, [cats])

  const changeSorting = (sortType) => {
    let catsToSort = JSON.parse(JSON.stringify(cats))
    if (sortType === 'Ascending') {
      let catsAscending = catsToSort.sort(
        (a, b) => a.cutenessLevel - b.cutenessLevel
      )
      setCats([...catsAscending])
    } else if (sortType === 'Descending') {
      let catsDescending = catsToSort.sort(
        (a, b) => b.cutenessLevel - a.cutenessLevel
      )
      setCats([...catsDescending])
    } else if (sortType === 'Unsorted') {
      setCats([...defaultCats])
    }
  }

  return (
    <div className='App'>
      <header className='App-header'>
        <select
          onChange={(event) => {
            changeSorting(event.target.value)
          }}
        >
          Sort list:
          <option key='1'>Unsorted</option>
          <option key='2'>Ascending</option>
          <option key='3'>Descending</option>
        </select>
        {cats.map((cat) => {
          return (
            <>
              <img
                onError={(error) => {
                  // THIS IS NOT A SAFE ACTION IF LOADING PICTURES THAT DO NOT WORK (Infinite reloads)
                  // (better load a default picture for each failed load)
                  error.target.onerror = null
                  error.target.src =
                    './images/' + cat.image.replace('.jpg', '.png')
                }}
                src={`./images/${cat.image}`}
              />{' '}
              <p>{cat.name} </p>
            </>
          )
        })}
      </header>
    </div>
  )
}

export default App

import React from 'react'
import {ButtonGroup, Button} from 'react-bootstrap'
import './SortingMenu.css'
export const SortingMenu = ({changeSorting}) => {
  return (
    <>
      <ButtonGroup id='sorting-menu'>
        <p>Sorting:</p>
        <Button onClick={() => changeSorting('None')} variant='primary'>
          None
        </Button>
        <Button onClick={() => changeSorting('Descending')} variant='success'>
          Much cute
        </Button>
        <Button onClick={() => changeSorting('Ascending')} variant='warning'>
          Not cute
        </Button>
      </ButtonGroup>
    </>
  )
}

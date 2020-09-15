import React from 'react'
import {ButtonGroup, Button} from 'react-bootstrap'
export const SortingMenu = ({changeSorting}) => {
  return (
    <>
      <ButtonGroup style={{margin: '1em'}}>
        <p style={{color: 'white', marginRight: '1em'}}>Sorting:</p>
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

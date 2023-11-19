import React from 'react'
import { Box } from '@mui/material'
import TrelloCard from '~/pages/Boards/BoardContent/ListColumns/Column/ListCards/TrelloCard/TrelloCard.jsx'


function ListCards() {

  return (
    <Box sx={{
      p: '0 5px',
      m: '0 5px',
      display: 'flex',
      flexDirection: 'column',
      gap: 1,
      overflowX: 'hidden',
      overflowY: 'auto',
      maxHeight: (theme) => `calc(${theme.trello.boardContentHeight}
               - ${theme.spacing(5)} - ${theme.trello.columnHeaderHeight} - ${theme.trello.columnFooterHeight})`,
      '&::-webkit-scrollbar-thumb': {
        backgroundColor: '#ced0da'
      },
      '&::-webkit-scrollbar-thumb:hover': {
        backgroundColor: '#bfc2cf'
      }
    }}>
      <TrelloCard/>
      <TrelloCard temporaryHideMedia/>
      <TrelloCard temporaryHideMedia/>
      <TrelloCard temporaryHideMedia/>
      <TrelloCard temporaryHideMedia/>
      <TrelloCard temporaryHideMedia/>
      <TrelloCard temporaryHideMedia/>
      <TrelloCard temporaryHideMedia/>
      <TrelloCard temporaryHideMedia/>
      <TrelloCard temporaryHideMedia/>
      <TrelloCard temporaryHideMedia/>
      <TrelloCard temporaryHideMedia/>
      <TrelloCard temporaryHideMedia/>
      <TrelloCard temporaryHideMedia/>
    </Box>
  )
}

export default ListCards
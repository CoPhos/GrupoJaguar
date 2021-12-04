import * as React from 'react'
import { DataGrid } from '@mui/x-data-grid'
import Box from '@mui/material/Box'

import { createStyles, makeStyles } from '@mui/styles'
import { createTheme, ThemeProvider } from '@mui/material/styles'

const useStyles = makeStyles(theme =>
  createStyles({
    root: {
      '& .MuiDataGrid-renderingZone': {
        maxHeight: 'none !important'
      },
      '& .MuiDataGrid-cell': {
        lineHeight: 'unset !important',
        maxHeight: 'none !important',
        whiteSpace: 'normal'
      },
      '& .MuiDataGrid-row': {
        maxHeight: 'none !important'
      }
    }
  })
)

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'firstName', headerName: 'First name', width: 130 },
  { field: 'lastName', headerName: 'Last name', width: 130 },
  { field: 'age', headerName: 'Age', type: 'number', width: 90 },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: params =>
      `${params.getValue(params.id, 'firstName') || ''} ${
        params.getValue(params.id, 'lastName') || ''
      }`
  }
]

const rows = [
  { id: 1, lastName: 'Snow violetSnow violetSnow violet', firstName: 'Jon', age: 35 },
  { id: 2, lastName: 'Lannasdasdaister', firstName: 'Cersei', age: 42 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: 22 },
  { id: 6, lastName: 'Melisandre', firstName: 'Snow violet', age: 150 },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
  { id: 10, lastName: 'Snow', firstName: 'Jon', age: 35 },
  { id: 20, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
  { id: 30, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
  { id: 40, lastName: 'Stark', firstName: 'Arya', age: 16 },
  { id: 50, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  { id: 60, lastName: 'Melisandre', firstName: null, age: 150 },
  { id: 70, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: 80, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 90, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
  { id: 100, lastName: 'Snow', firstName: 'Jon', age: 35 },
  { id: 200, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
  { id: 300, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
  { id: 400, lastName: 'Stark', firstName: 'Arya', age: 16 },
  { id: 500, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  { id: 600, lastName: 'Melisandre', firstName: null, age: 150 },
  { id: 700, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: 800, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 900, lastName: 'Roxie', firstName: 'Harvey', age: 65 }
]

function BitacoraTable(props) {
  const theme = createTheme()
  const classes = useStyles()
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ height: '100%', width: '100%' }}>
        <DataGrid
          className={classes.root}
          rows={rows}
          columns={columns}
          pageSize={10}
          rowsPerPageOptions={[10]}
          checkboxSelection={false}
          disableSelectionOnClick
        />
      </Box>
    </ThemeProvider>
  )
}

export default BitacoraTable

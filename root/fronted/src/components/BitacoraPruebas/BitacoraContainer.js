import React, { useEffect, useReducer } from 'react'
import API, { graphqlOperation } from '@aws-amplify/api'
import { List } from 'antd'
import 'antd/dist/antd.css'
import { listBitacoraDePruebasComprensions } from '../../graphql/queries'

import BitacoraTable from './BitacoraTable'

function reducer(state, action) {
  switch (action.type) {
    case 'SET_NOTES':
      return { ...state, notes: action.notes, loading: false }
    case 'ADD_NOTE':
      return { ...state, notes: [action.note, ...state.notes] }
    case 'RESET_FORM':
      return { ...state, form: initialState.form }
    case 'SET_INPUT':
      return { ...state, form: { ...state.form, [action.name]: action.value } }
    case 'ERROR':
      return { ...state, loading: false, error: true }
    default:
      return state
  }
}

const initialState = {
  notes: [],
  loading: true,
  error: false,
  form: { ubicacion: '', nombreObra: '' }
}

function BitacoraContainer() {
  const [state, dispatch] = useReducer(reducer, initialState)
  // useEffect(() => {
  //   fetchNotes()
  // }, [])

  async function fetchNotes() {
    try {
      const notesData = await API.graphql(graphqlOperation(listBitacoraDePruebasComprensions))
      dispatch({ type: 'SET_NOTES', notes: notesData.data.listBitacoraDePruebasComprensions.items })
    } catch (err) {
      console.log('error: ', err)
      dispatch({ type: 'ERROR' })
    }
  }

  return <BitacoraTable data={state}></BitacoraTable>
}

export default BitacoraContainer

import React, { useEffect, useReducer } from 'react'
import API, { graphqlOperation } from '@aws-amplify/api'
import { listBitacoraDePruebasComprensions } from '../../graphql/queries'
import { createBitacoraDePruebasComprension as createBitacora } from '../../graphql/mutations'
import { v4 as uuidv4 } from 'uuid'

import BitacoraTable from './BitacoraTable'

const CLIENT_ID = uuidv4()

function reducer(state, action) {
  switch (action.type) {
    case 'SET_NOTES':
      return { ...state, notes: action.notes, loading: false }
    case 'ADD_NOTE':
      return { ...state, notes: [action.note, ...state.notes] }
    case 'RESET_FORM':
      return { ...state, form: initialState.form }
    case 'SET_INPUT':
      return { ...state, form: {} }
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
  form: {}
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

  async function createNote() {
    const { form } = state
    const note = { ...form, clientId: CLIENT_ID, completed: false }
    dispatch({ type: 'ADD_NOTE', note })
    dispatch({ type: 'RESET_FORM' })
    try {
      await API.graphql(graphqlOperation(createBitacora, { input: note }))
      console.log('successfully created note!')
    } catch (err) {
      console.log('error: ', err)
    }
  }

  return <BitacoraTable data={state}></BitacoraTable>
}

export default BitacoraContainer

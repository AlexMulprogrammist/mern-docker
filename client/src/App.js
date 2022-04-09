import {useCallback, useEffect, useState} from 'react'
import axios from 'axios'
import {List} from './List'
import {Form} from './Form'

const baseURL = process.env.NODE_ENV === 'production' ?  'http://70.34.249.99:5000' : 'http://localhost:5000'
const api = axios.create({
  baseURL
})

function App() {
  const [notes, setNotes] = useState([])

  async function createNote(text) {
    const note = await api.post('/api/note', {text})
    setNotes([...notes, {...note.data.note}])
  }

  const fetchNotes = useCallback(async () => {
    const notes = await api.get('/api/note')
    setNotes(notes.data)
  }, [])

  useEffect(() => {
    fetchNotes()
  }, [fetchNotes])

  return (
    <>
      <nav className="navbar">
        <h3>Docker MERN</h3>
      </nav>
      <div className="container with-nav">
        <h1>Hello World2 DEV_MODE</h1>
        <Form onCreate={createNote} />
        <List list={notes} />
      </div>
    </>
  )
}

export default App;

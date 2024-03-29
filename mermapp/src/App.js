import { useState } from 'react'
import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useParams
} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'

import './App.css'
import Navigation from './components/Navigation'
import CreateNote from './components/CreateNote'
import CreateUser from './components/CreateUser'
import NotesList from './components/NotesList'

function App() {
  const EditNote = () => <CreateNote params={useParams()} />

  return (
    <Router>
      <Navigation />
      <div className='container p-4'>
        <Routes>
          <Route path='/' Component={NotesList} />
          <Route path='/edit/:id' Component={EditNote} />
          <Route path='/create' Component={CreateNote} />
          <Route path='/user' Component={CreateUser} />
        </Routes>
      </div>
    </Router>
  )
}
export default App

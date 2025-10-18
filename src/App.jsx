import React from 'react'
import Sidebar from './sidebar'
import Feed from './feed'
import Suggestions from './suggestions'
import PersonStory from './PersonStory'
import Profile from './profile'
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={
            <div className="app">
              <div className='sidebar'><Sidebar /></div>
              <div className='feed' ><Feed /></div>
              <div className='suggestions'><Suggestions /></div>
            </div>
          } />

          <Route path='/story/:storyid' element={
            <PersonStory />
          } />

          <Route path='/profile' element={
            <>
              <Sidebar />
              <Profile />
            </>
          } />

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
//npx json-server --watch data/jsondb.json --port 3000 --static ./data
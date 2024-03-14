import React from 'react'
import './App.css'
import {Route} from 'wouter'
import FeedVideos from './components/FeedVideos/FeedVideos'
import UploadVideo from './pages/Upload/Upload.jsx'

function App() {
  return (
    <div className='App'>
      <main>
        <Route path='/'>
          <FeedVideos/>
        </Route>
        <Route path='/uploadVideo'>
          <UploadVideo/>
        </Route>
      </main>
    </div>
  )
}

export default App

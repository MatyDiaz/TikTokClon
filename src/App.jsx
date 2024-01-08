import React from 'react'
import './App.css'
import VideoPlayer from './components/VideoPlayer/VideoPlayer'
import FeedVideos from './components/FeedVideos/FeedVideos'

function App() {
  return (
    <div className='App'>
      <main>
        <FeedVideos/>
      </main>
    </div>
  )
}

export default App

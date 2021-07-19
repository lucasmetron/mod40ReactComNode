import React, { useEffect, useState } from 'react'
import './App.css';

function App() {

  const [videos, setVideos] = useState([]);

  useEffect(() => {

    fetch('/api/videos').then(res => res.json()).then(data => {
      setVideos(data)
    })
    console.log(videos)

  }, [])


  return (
    <div className="App">
      <header className="App-header">
        {videos.map((id, index) => {
          return (
            <a key={index} href={`https://www.youtube.com/watch?v=${id}`}>
              <img src={`https://img.youtube.com/vi/${id}/0.jpg`} />
            </a>
          );
        })}
      </header>
    </div>
  );
}

export default App;

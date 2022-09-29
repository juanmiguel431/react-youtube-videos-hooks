import React, { useEffect, useState } from "react";
import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";
import useVideos from "../hooks/useVideos";

const App = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [videos, search] = useVideos('buildings');

  useEffect(() => {
    const selected = videos.length === 0 ? null : videos[0];
    setSelectedVideo(selected);
  }, [videos]);

  return (
    <div className="app ui container">
      <SearchBar onSearch={search}/>
      <div className="ui grid">
        <div className="ui row">
          <div className="eleven wide column">
            <VideoDetail video={selectedVideo}/>
          </div>
          <div className="five wide column">
            <VideoList
              videos={videos}
              onVideoSelect={setSelectedVideo}
              selectedVideo={selectedVideo}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

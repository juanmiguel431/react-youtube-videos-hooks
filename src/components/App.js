import React, { useEffect, useState } from "react";
import SearchBar from "./SearchBar";
import youtube from "../apis/youtube";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";

const App = () => {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  useEffect(() => {
    onSearch('buildings');
  }, []);

  const onSearch = async (term) => {
    const response = await youtube.get('/search', {params: {q: term}});
    const items = response.data.items;
    const selected = items.length === 0 ? null : items[0];
    setVideos(items);
    setSelectedVideo(selected);
  };

  return (
    <div className="app ui container">
      <SearchBar onSearch={onSearch}/>
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

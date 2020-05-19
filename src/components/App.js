import React from 'react';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoSelected from './VideoSelected';
import youtube from '../apis/youtube';

class App extends React.Component {
  state = { videos: [], error: '', currentVideo: null }

  componentDidMount() {
    this.onTermSubmit('COVID');
  }

  onTermSubmit = term => {
    youtube.get('/search', {
      params: {
        q: term,
      }
    })
    .then(response => {
      this.setState({
        videos: response.data.items,
        currentVideo: response.data.items[0],
      });
    })
    .catch(error => this.setState({ error: error.message }))
  }

  changeCurrentVideo = video => {
    this.setState({ currentVideo: video });
  }

  render() {
    const { error, videos, currentVideo } = this.state;
    return (
      <div className="ui container">
        <div>{error}</div>
        <SearchBar onTermSubmit={this.onTermSubmit} />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoSelected video={currentVideo}/>
            </div>
            <div className="five wide column">
              <VideoList
                changeCurrentVideo={this.changeCurrentVideo}
                videos={videos}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

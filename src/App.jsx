import { useState } from 'react';
import axios from 'axios';

function App() {
  const apiKey = 'ccfe9548';
  const [userInput, setUserInput] = useState('');
  const [data, setData] = useState({});
  const [moviePoster, setMoviePoster] = useState('');

  const searchMovie = () => {
    const url = `https://www.omdbapi.com/?t=${userInput}&apikey=${apiKey}`;

    axios.get(url).then((response) => {
      setData(response.data);
      setMoviePoster(response.data.Poster);
      console.log(response.data);
    });
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      searchMovie();
    }
  };

  return (
    <>
      <h1>CineSearch</h1>
      <div className="app">
        <div className="search">
          <input
            value={userInput}
            onChange={(event) => setUserInput(event.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Enter Movie or a Series  Name"
            type="text"
          />
        </div>
        {data.Title && (
          <div className="movie-details">
            <div className="movie-poster">
              {moviePoster && <img src={moviePoster} alt={data.Title} />}
            </div>
            <div className="movie-info">
              <h2>{data.Title}</h2>
              <p>Year: {data.Year}</p>
              <p>IMDB Ratings: {data.imdbRating}</p>
              <p>Cast: {data.Actors}</p>
              <p>Genre: {data.Genre}</p>
              <p>Plot: {data.Plot}</p>

              
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default App;

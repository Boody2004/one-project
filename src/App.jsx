import "./App.css";
import MovieCard from "./components/MovieCard";

function App() {
  const movieNumber = 2;

  return (
    <>
      {movieNumber === 1 ? (
        <MovieCard movie={{ title: "title", release_data: "20.20.2025" }} />
      ) : (
        <MovieCard movie={{ title: "title2", release_data: "22.22.2025" }} />
      )}
    </>
  );
}

export default App;

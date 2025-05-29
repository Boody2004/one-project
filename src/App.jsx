import "./App.css";
import MovieCard from "./components/MovieCard";

function App() {
  return (
    <>
      <MovieCard movie={{ title: "title", release_data: "20.20.2025" }} />
    </>
  );
}

export default App;

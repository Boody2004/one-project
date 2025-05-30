import MovieCard from "../components/MovieCard";

function Home() {
  const movies = [
    { id: 1, title: "title1", release_data: "2025" },
    { id: 2, title: "title2", release_data: "2025" },
    { id: 3, title: "title3", release_data: "2025" },
    { id: 4, title: "title4", release_data: "2025" },
  ];

  return (
    <div className="home">
      <div className="movie-grid">
        {movies.map((movie) => (
          <MovieCard movie={movie} key={movie.id} />
        ))}
      </div>
    </div>
  );
}

export default Home;

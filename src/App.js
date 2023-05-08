import { Header } from "./components/Header";
import { MoviesList } from "./components/MoviesContainer";


function App() {
  return (
    <div className="App">
      <Header />

      <section>
        <MoviesList movies={[]} />
      </section>
    </div>
  );
}

export default App;

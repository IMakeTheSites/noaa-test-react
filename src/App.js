import Layout from "./components/Layout";
import Pokemon from "./components/Pokemon";
import { PokemonProvider } from "./hooks/usePokemon";

function App() {
  return (
    <Layout>
      <PokemonProvider>
        <Pokemon />
      </PokemonProvider>
    </Layout>
  );
}

export default App;

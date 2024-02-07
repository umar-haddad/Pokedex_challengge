import { useEffect, useState } from "react";
import { apiPokemon } from "../service/api";
import "./list.css";
import SearchBar from "../component/searchBar";
import NFPoke from "../component/NFPoke";
import PokemonList from "../component/pokemonList";
import Loading from "../component/Loading";

function ListPage() {
  const [dataPokemon, setDataPokemon] = useState([]);
  const [searchStatus, setSearchStatus] = useState("initial");
  const [loading, setLoading] = useState(true);

  const typeColors = {
    Grass: "rgb(132 204 22)",
    Poison: "rgb(124 58 237)",
    Fire: "rgb(245 158 11)",
    Flying: "rgb(199 210 254)",
    Water: "rgb(6 182 212)",
    Normal: "rgb(168 162 158)",
    Electric: "rgb(234 179 8)",
    Ground: "rgb(120 113 108)",
    Bug: "rgb(77 124 15)",
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await apiPokemon();
        setDataPokemon(res);
        setSearchStatus(res.length > 0 ? "" : "Not Found");
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const search = async (value) => {
    try {
      setLoading(true);
      const res = await apiPokemon();
      const filteredPokemon = res.filter((pokemon) =>
        pokemon.name.toLowerCase().includes(value.toLowerCase())
      );
      setDataPokemon(filteredPokemon);
      setSearchStatus(filteredPokemon.length > 0 ? "" : "Not Found");
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col text-center py-5">
          <h1 className="display-3">POKEMON BALLS</h1>
          <SearchBar onSearch={search} />
        </div>
      </div>
      <div className="row justify-content-center card">
        <div className="col">
          {loading ? (
            <Loading />
          ) : searchStatus === "Not Found" ? (
            <NFPoke />
          ) : (
            <PokemonList dataPokemon={dataPokemon} typeColors={typeColors} />
          )}
        </div>
      </div>
    </div>
  );
}

export default ListPage;

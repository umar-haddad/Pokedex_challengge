import axios from "axios";

const API = import.meta.env.VITE_API;

async function apiPokemon() {
  try {
    const res = await axios.get(`${API}?limit=100`);

    return res.data;
  } catch (error) {
    throw new Error("Failed to fetch Pokemon data");
  }
}

async function apiGetPokemonById(id) {
  try {
    const response = await axios.get(`${API}/${id}`);
    const pokemonData = response.data;
  

    if (pokemonData) {
      return pokemonData;
    } else {
      throw new Error("Pokemon not found");
    }
  } catch (error) {
    if (error.response && error.response.status === 404) {
      throw new Error("Pokemon not found");
    } else {
      throw new Error("Failed to fetch Pokemon data");
    }
  }
}

export { apiPokemon, apiGetPokemonById };

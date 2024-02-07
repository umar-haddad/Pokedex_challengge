import PokemonCard from "../component/pokeCard";

function PokemonList(dataPokemon, typeColors) {
  return (
    <div className="container">
      <div className="row justify-content-center align-items-center">
        {dataPokemon?.dataPokemon.map((item, i) => (
          <div key={i} className="col-lg-3 col-md-4 col-sm-6 mb-4">
            <PokemonCard pokemon={item} typeColors={typeColors} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default PokemonList;

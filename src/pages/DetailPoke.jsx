/* eslint-disable react/jsx-key */
import { useEffect, useState } from "react";
import { apiGetPokemonById } from "../service/api";
import { useNavigate, useParams } from "react-router-dom";
import imageSrc from "../assets/img/pokemon.png";

function DetailPage() {
  const [pokemon, setPokemon] = useState();
  const { id } = useParams();
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/`);
  };

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
        const res = await apiGetPokemonById(id);
        setPokemon(res);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [id]);

  if (!pokemon) {
    return <p>Loading...</p>;
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-2">
          <img src={pokemon.imageUrl} alt="alt" className="w-100" />
        </div>
        <div className="col-md-6 pt-4">
          <p className="font-weight-bold text-4xl">{pokemon.name}</p>
          <div className="d-flex gap-4 text-xl mt-3">
            {pokemon.types.map((item, i) => (
              <p
                key={i}
                className="py-2 font-weight-bold px-4 rounded border border-dark"
                style={{
                  backgroundColor: typeColors[item] || "rgb(245 208 254)",
                }}
              >
                {item}
              </p>
            ))}
          </div>
          <div className="d-flex flex-wrap gap-2 my-2">
            <span>locations:</span>
            {pokemon.locations &&
            Array.isArray(pokemon.locations) &&
            pokemon.locations.length > 0 ? (
              pokemon.locations.map((item, i) => (
                <p key={i} className="text-decoration-underline">
                  {item}
                </p>
              ))
            ) : (
              <p>unknown</p>
            )}
          </div>
        </div>
      </div>
      <div className="mt-4">
        <p className="text-3xl font-weight-bold">Profile</p>
        <p className="w-100 text-secondary">{pokemon.description}</p>
        <hr />
        <p className="text-2xl font-weight-bold mt-4">Stats</p>
        <div className="row">
          <div className="col-md-6">
            <p>Hp: {pokemon.stats.HP}</p>
            <p>Attack: {pokemon.stats.Attack}</p>
            <p>Defense: {pokemon.stats.Defense}</p>
          </div>
          <div className="col-md-6">
            <p>Special Attack: {pokemon.stats["Special Attack"]}</p>
            <p>Special Defense: {pokemon.stats["Special Defense"]}</p>
            <p>Speed: {pokemon.stats.Speed}</p>
          </div>
        </div>
      </div>
      <div className="mt-4">
        <p className="text-2xl font-weight-bold">Abilities</p>
        <div className="d-flex flex-column p-4 bg-dark rounded-lg mt-4 gap-6">
          {pokemon.abilities.map((item, i) => (
            <div className="d-flex gap-3" key={i}>
              <div>
                <svg
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-20 h-20 p-4 bg-primary rounded-full"
                >
                  <image
                    href={imageSrc}
                    width="100"
                    height="100"
                    className="rounded-full"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z"
                  />
                </svg>
              </div>
              <div className="pt-6 font-weight-bold d-flex flex-column">
                <div className="px-8">
                  <p className="text-2xl font-weight-bold text-warning">
                    {item.name}
                  </p>
                  <p className="text-secondary">
                    <span className="font-weight-bold">Effect:</span>{" "}
                    {item.effect}
                  </p>
                  <p className="text-secondary">
                    <span className="font-weight-bold">Description:</span>{" "}
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full d-flex justify-content-center items-center mt-8 pb-20">
        <button
          onClick={handleClick}
          className="btn btn-secondery w-50 m-5 h-auto font-weight-bold text-xxl fs-3"
        >
          Go Back
        </button>
      </div>
    </div>
  );
}

export default DetailPage;

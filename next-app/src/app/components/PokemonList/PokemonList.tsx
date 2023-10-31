import Link from "next/link";
import { MappedPokemon } from "@/types";

const PokemonList = ({ pokemonList }: { pokemonList: MappedPokemon[] }) => {
  return (
    <div className="flex flex-wrap">
      {pokemonList &&
        pokemonList.map(({ id, name }) => (
          <Link
            key={id}
            href={`/pokemon/${name}`}
            className="bg-[#eee] bg-center bg-no-repeat m-2 h-36 w-36 relative"
            style={{
              // eslint-disable-next-line max-len
              backgroundImage: `url(${`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`})`,
            }}
          >
            <div className="list-item-name">{name}</div>
          </Link>
        ))}
    </div>
  );
};

export default PokemonList;
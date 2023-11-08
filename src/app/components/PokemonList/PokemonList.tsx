import Image from "next/image";
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
            className="transition m-2 h-36 w-36 relative border border-[#3F477A] translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 rounded-md shadow-md"
          >
            <div className="bg-[#eee] bg-center bg-no-repeat">
              <Image
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
                alt={name}
                width={100}
                height={100}
                objectFit="cover"
              />
            </div>
            <div className="absolute bottom-0 w-full text-center capitalize bg-[#272822] text-[$2e51ff]">
              {name}
            </div>
          </Link>
        ))}
    </div>
  );
};

export default PokemonList;

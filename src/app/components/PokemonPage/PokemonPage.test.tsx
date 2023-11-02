import { render, screen } from "@testing-library/react";
import PokemonPage from "./PokemonPage";

describe("PokemonPage", () => {
  test("Checks component renders correctly", async () => {
    const pokemonProps = {
      previous: {
        name: "bulbasaur",
        url: "https://pokeapi.co/api/v2/pokemon/1/",
        id: 1,
      },
      next: {
        url: "https://pokeapi.co/api/v2/pokemon/3/",
        name: "venusaur",
        id: 3,
      },
      name: "ivysaur",
    };
    const jsx = await PokemonPage(pokemonProps);
    render(jsx);

    // data-testid="pokemon-name"
    const headingElement = screen.getByTestId("pokemon-name");
    expect(headingElement).toBeTruthy();
    expect(headingElement.textContent).toBe("ivysaur");
  });
});

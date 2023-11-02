import { render, screen } from "@testing-library/react";
import PokemonPage from "./PokemonPage";

describe("PokemonPage", () => {
  test("Checks component renders correctly", async () => {
    const pokemonProps = {
      name: "ivysaur",
    };
    const jsx = await PokemonPage(pokemonProps);
    render(jsx);

    const headingElement = screen.getByTestId("pokemon-name");
    expect(headingElement).toBeTruthy();
    expect(headingElement.textContent).toBe("ivysaur");
  });
});

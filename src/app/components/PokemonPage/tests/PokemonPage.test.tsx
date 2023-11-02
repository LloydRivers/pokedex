import { render, screen } from "@testing-library/react";
import { PokemonPage } from "../..";
import { Pokemon } from "@/types";
import { vi } from "vitest";

import mockedResponseData from "./mockedResponseData.json";
import * as helpers from "@/helpers";

describe("PokemonPage Component", () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  test("Renders the component correctly", async () => {
    const spy = vi.spyOn(helpers, "fetchPokemon").mockImplementation(() => {
      return Promise.resolve(mockedResponseData as unknown as Pokemon);
    });

    render(<PokemonPage name="bulbasaur" />);

    await screen.findByText("bulbasaur");

    expect(spy).toHaveBeenCalledTimes(1);
    expect(screen.queryByText("bulbasaur")).toBeTruthy();
    expect(screen.queryByText("speed")).toBeTruthy();
    expect(screen.queryByText("special defense")).toBeTruthy();
    expect(screen.queryByText("special attack")).toBeTruthy();
    expect(screen.queryByText("defense")).toBeTruthy();
    expect(screen.queryByText("attack")).toBeTruthy();
    expect(screen.queryByText("hp")).toBeTruthy();
  });
});

import { render, screen } from "@testing-library/react";
import React from "react";
import PokemonAbility from "./PokemonAbility";

describe("PokemonAbility", () => {
  const abilities = ["torrent", "otherAbility", "hiddenAbility"];

  abilities.forEach((ability) => {
    it(`renders PokemonAbility component with abilityName: ${ability}`, () => {
      render(<PokemonAbility abilityName={ability} />);
      expect(screen.queryByText(ability)).toBeTruthy();
    });
  });
});

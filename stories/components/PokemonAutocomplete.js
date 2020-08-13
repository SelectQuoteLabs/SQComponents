import React from 'react';
import SQFormAutocomplete from '../../src/components/SQForm/SQFormAutocomplete';
import {useQueryPokemon} from './useQueryPokemon';

export default function PokemonAutocomplete({name}) {
  const [inputValue, setInputValue] = React.useState('');
  const {pokemonData, error} = useQueryPokemon(inputValue);

  const getPokemonOptions = pokemonData => {
    if (!pokemonData) return [{label: 'Loading...', value: 'loading'}];

    if (Array.isArray(pokemonData?.results)) {
      return pokemonData.results.map(pokemon => ({
        label: pokemon.name,
        value: pokemon.name,
      }));
    }
    return [
      {
        label: pokemonData.name,
        value: pokemonData.name,
      },
    ];
  };

  const pokemonOptions = React.useMemo(() => getPokemonOptions(pokemonData), [
    pokemonData,
  ]);

  error?.message && console.log(error.message);

  return (
    <SQFormAutocomplete
      name={name}
      label="Pokemon"
      size={10}
      handleAsyncInputChange={value => setInputValue(value)}
      isRequired
    >
      {pokemonOptions}
    </SQFormAutocomplete>
  );
}

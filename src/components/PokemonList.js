import './PokemonList.css'
import PokemonElement from "./PokemonElement";

const PokemonList = ({pokemons, onSelectedPokemon}) => {

    // const pokemonUrls = pokemons.map((pokemon) => {
    //     return pokemon.url
    // })

    const pokemonItem = pokemons.map((pokemon) => {
    return <PokemonElement 
            name={pokemon.name} 
            sprite={pokemon.sprites.other['official-artwork'].front_default}
            key={pokemon.id} 
            pokemon={pokemon} 
            onSelectedPokemon={onSelectedPokemon}
            />
    })

    return ( 
        <>
            <ul className='scrollable'>
                {pokemonItem}
            </ul>
        </>
     );
}
 
export default PokemonList;





// const pokemonsDetails = pokemons.map((pokemon, index) => {
//     const pokemonDetail = fetch(pokemon.url)
//     .then(res => res.json)
//     .then(data => data)
//     return <PokemonElement 
//             name={pokemonDetail.name} 
//             key={pokemonDetail.id} 
//             pokemon={pokemonDetail} 
//             onSelectedPokemon={onSelectedPokemon}
//             />
// })
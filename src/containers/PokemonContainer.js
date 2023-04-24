import { useEffect, useState } from "react";
import './PokemonContainer.css'
import PokemonDetails from "../components/PokemonDetails";
import PokemonList from "../components/PokemonList";
import PokemonTeam from "../components/PokemonTeam";

const PokemonContainer = () => {
    const [pokemons, setPokemons] = useState(null)
    const [selectedPokemon, setSelectedPokemon] = useState(null)
    const [pokemonTeam, setPokemonTeam] = useState([])

    const getPokemons = () => {
        fetch('https://pokeapi.co/api/v2/pokemon?limit=151&offset=0')
            .then(res => res.json())
            .then(data => {
                const pokemonDetailsPromise = data.results.map(pokemon => {
                    return fetch(pokemon.url)
                        .then(res => res.json())
                })
            Promise.all(pokemonDetailsPromise)
                .then(pokemonDetails => setPokemons(pokemonDetails))
        })
    }

    // const getPokemonsUrls = async function () {
    //     const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151&offset=0')
    //     const pokemonsUrlsData = await res.json()
    //     return pokemonsUrlsData
    // }

    // const getPokemonsDetailsFromUrls = async function () {
    //     const baseArray = await getPokemonsUrls()
    //     const pokemonsPromise = await baseArray.results.map(async (pokemon) => {
    //         const promiseRes = await fetch(pokemon.url)
    //         const promiseData = await promiseRes.json()
    //         return promiseData
    //     })
    //     const pokemonsDetails = await Promise.all(pokemonsPromise)
    //     setPokemons(pokemonsDetails)
    // }

    // const getPokemonsDetails = async function () {
    //     const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151&offset=0')
    //     const pokemonsUrlsData = await res.json()
    //     const pokemonsPromise = await pokemonsUrlsData.results.map(async (pokemon) => {
    //         const promiseRes = await fetch(pokemon.url)
    //         const promiseData = await promiseRes.json()
    //         return promiseData
    //     })
    //     const pokemonsDetails = await Promise.all(pokemonsPromise)
    //     setPokemons(pokemonsDetails)
    // }
    


    useEffect(() => {
        getPokemons()
    }, []);

    const onSelectedPokemon = function(pokemon) {
        setSelectedPokemon(pokemon)
    }

    const teamBuilder = function (pokemon) {
        const duplicatePokemon = pokemonTeam.find((duplicate) => pokemon === duplicate)
        if (duplicatePokemon) {
            console.log("Already in team!")
            return
        } else if (pokemonTeam.length === 6) {
            setPokemonTeam(pokemonTeam.splice(0, 1))
            setPokemonTeam([...pokemonTeam, pokemon])
        } else {
            setPokemonTeam([...pokemonTeam, pokemon])
        }
    }

    return ( 
        <>
            <h2>Choose your Team:</h2>
            <PokemonTeam pokemonTeam={pokemonTeam}/>
            <div className="list-details">
                {pokemons ? 
                    <PokemonList pokemons={pokemons} onSelectedPokemon={onSelectedPokemon}/> : 
                    <p>Please wait, we are loading information from the database...</p>} 
                    {selectedPokemon ? 
                        <PokemonDetails 
                        selectedPokemon={selectedPokemon}
                        name={selectedPokemon.name}
                        sprite={selectedPokemon.sprites.other['official-artwork'].front_default}
                        teamBuilder={teamBuilder}
                        /> :
                        <p>Choose your favourite!</p>
                        }  
            </div>
        </>
    );
}
 
export default PokemonContainer;
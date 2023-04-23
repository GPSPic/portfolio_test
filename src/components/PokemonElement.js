import './PokemonElements.css';

const PokemonElement = ({name, sprite, pokemon, onSelectedPokemon}) => {

    const capitalisePokemonName = (name) => {
        return name.charAt(0).toUpperCase() + name.slice(1)
    }
    const capitalisedName = capitalisePokemonName(name)

    const handleClick = function () {
        onSelectedPokemon(pokemon)
    }

    return ( 
            <li onClick={handleClick} className='clickable-list'>
                <img src={sprite} alt={name} height='50' width='50' />
                <p>{capitalisedName}</p>
            </li>
     );
}
 
export default PokemonElement;
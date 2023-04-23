import styled from "styled-components"

const PokemonTeam = ({pokemonTeam}) => {
    
    const capitalisePokemonName = (name) => {
        return name.charAt(0).toUpperCase() + name.slice(1)
    }

    const teamMembers = pokemonTeam.map((pokemon) => {
        const capitalisedName = capitalisePokemonName(pokemon.name)
        const sprite= pokemon.sprites.other['official-artwork'].front_default
        return (
        <PrettyView key={pokemon.id}>
            <img src={sprite} alt={capitalisedName} height='50' width='50' />
            <p>{capitalisedName}</p>
        </PrettyView>
        )
    })

    return ( 
        <>
            <h3>Select your favourite and add them to your team!</h3>
            <TeamView>
                {teamMembers}
            </TeamView>
        </>
     );
}

const TeamView = styled.ul`
    list-style: none;
    display: grid;
    grid-template-columns: auto auto auto;
    grid-gap: 10px;
    align-items: center;
    padding: 10px;
    padding-top: 20px;
    border: 1px solid;
    margin: 5px
`

const PrettyView = styled.li`
    text-align: center;
`

export default PokemonTeam;
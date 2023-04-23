import { Chart } from "react-google-charts"
import styled from "styled-components"

const PokemonDetails = ({selectedPokemon, name, sprite, teamBuilder}) => {

    const capitalisePokemonName = (name) => {
        return name.charAt(0).toUpperCase() + name.slice(1)
    }
    const capitalisedName = capitalisePokemonName(name)

    const handleClick = () => {
        teamBuilder(selectedPokemon)
    }

    const pokemonHP = selectedPokemon.stats[0].base_stat
    const pokemonAttack = selectedPokemon.stats[1].base_stat
    const pokemonDefense = selectedPokemon.stats[2].base_stat
    const pokemonSpecialAttack = selectedPokemon.stats[3].base_stat
    const pokemonSpecialDefense = selectedPokemon.stats[4].base_stat
    const pokemonSpeed = selectedPokemon.stats[5].base_stat

    const data = [
        ["Attribute", "Base Value", { role: "style" }, { role: "annotation" }],
        ["HP", pokemonHP, "red", pokemonHP],
        ["Attack", pokemonAttack, "orange", pokemonAttack], // English color name
        ["Defense", pokemonDefense, "yellow", pokemonDefense],
        ["Special Attack", pokemonSpecialAttack, "#0f15bf", pokemonSpecialAttack], // RGB value
        ["Special Defense", pokemonSpecialDefense, "color: #1f823a", pokemonSpecialDefense], // CSS-style declaration
        ["Speed", pokemonSpeed, "color: #b50bb8", pokemonSpeed],
      ];

    // const pokemonHighestStat = selectedPokemon.stats.find((stat) => {
    //     let highStat = selectedPokemon.stats[0].base_stat
    //     if (stat.base_stat > highStat) {
    //         highStat = stat.base_stat
    //     }
    //     return highStat
    // })
    // const maxChartValue = pokemonHighestStat + 10

    const options = {
        vAxis: 
            {minValue: 0,
            maxValue: 150,
            }
    }

    return ( 
        <>
            <section className="pokemon-details">
                <p>You selected {capitalisedName}!</p>
                <button onClick={handleClick}>Add to my team!</button>
                <ImageBlock className="visualisation">
                    <Chart chartType="ColumnChart" width="300px" height="400px" data={data} options={options}/>
                    <img src={sprite} alt={name} height='200' width='200' className="bigsprite" />
                </ImageBlock>
            </section>
        </>
     );
}

export default PokemonDetails;

const ImageBlock = styled.span`
    display: grid;
    grid-template-columns: auto auto;
    align-items: center;
`
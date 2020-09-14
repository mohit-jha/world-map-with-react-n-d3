import React, { useState, useEffect } from 'react'
import axios from 'axios'
import SelectPokemon from './SelectPokemon'
// import Img from '../src/a.jpg'

export default function PokemonApi() {
    const [sel, setsel] = useState();
    const [name, setname] = useState()
    const [moves, setmoves] = useState()
    const [Avtar, setavtar] = useState()
    const Img = (`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${Avtar}.png`)

    useEffect(() => {
        async function getData() {
            const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${sel}/`)

            console.log(res);
            setname(res.data.name)
            setmoves(res.data.moves.length)

            const val = (sel.length === 1 ? `00${sel}` : sel.length === 2  ?  `0${sel}` : `${sel}`)

            setavtar(val)
        }
        getData()
    })
    // const Img = `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${sel}.png`
    const handleChange = (event) => {
        setsel(event.target.value)
    }
    return (
        <div style={{ opacity: "0.9", height: '100vh' }}>
            <div className='col-8 mx-auto my-auto'>


                <div className='  row' >

                    <div className='col-4'>
                        <h3 style={{ paddingTop: '200px', opacity: '1' }}> You Choose <span style={{ color: 'red' }}>
                            {sel}
                        </span>
                        </h3>
                        <br />
                        <h3> My Name Is   <span style={{ color: 'red' }}>
                            {name}
                        </span>
                        </h3>
                        <br />
                        <h3> I Have   <span style={{ color: 'red' }}>
                            {moves}
                        </span> Moves
                          </h3>
                        <SelectPokemon change={handleChange} />
                    </div>
                    <div className='col-4 mt-5 my-auto ml-5'>
                        <img className='w-75 mt-5 ml-5' src={Img} />

                    </div>
                </div>
            </div>
        </div>
    )
}

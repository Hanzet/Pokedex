import { useEffect, useState } from "react"
import { PokemonContext } from "./PokemonContext"
import { useForm } from "../hooks/useForm"

const PokemonProvider = ({ children }) => {

    const [allPokemons, setAllPokemons] = useState([]);
    const [globalPokemons, setGlobalPokemons] = useState([]);
    const [offset, setOffset] = useState(0);

    // Utilizar Custom Hooks - useForm

    const { onInputChange, onResetForm, valueSearch } = useForm({
        valueSearch: ''
    });

    // Estados simples
    const [loading, setLoading] = useState(true);
    const [active, setActive] = useState(false);
    const [search, setSearch] = useState('');
    const [pokemon, setPokemon] = useState({});
    
    // Llamar 50 pokemons a la Api de PokeApi
    const getAllPokemons = async (limit = 50) => {

        const baseUrl = 'https://pokeapi.co/api/v2/'

        const response = await fetch(`${baseUrl}pokemon?limit=${limit}&offset=${offset}`)
        const data = await response.json()
        
        const promises = data.results.map(async (pokemon) => {
            const response = await fetch(pokemon.url)
            const data = await response.json()
            return data
        })
        const results = await Promise.all(promises)

        // Combinar los arreglos para que se muestren todos los pokemones
        setAllPokemons([
            ...allPokemons,
            ...results
        ])
        setLoading(false)
    }

    // Llamar a todos los pokemones

    const getGlobalPokemons = async () => {
        const baseUrl = 'https://pokeapi.co/api/v2/'

        const response = await fetch(`${baseUrl}pokemon?limit=100000&offset=0`)
        const data = await response.json()
        
        const promises = data.results.map(async (pokemon) => {
            const response = await fetch(pokemon.url)
            const data = await response.json()
            return data
        })
        const results = await Promise.all(promises)

        setGlobalPokemons(results)
        setLoading(false)
    }

    // Llamar a un pokemon por ID

    const getPokemonById = async (id) => {
        const baseUrl = 'https://pokeapi.co/api/v2/'

        const response = await fetch(`${baseUrl}pokemon/${id}`)
        const data = await response.json()
        return data
    }

    useEffect(() => {
        getAllPokemons()
    }, [])

    useEffect(() => {
        getGlobalPokemons()
    }, [])

    // Diccionario de valores de los pokemones
    return (
        <PokemonContext.Provider
            value={{
                valueSearch,
                onInputChange,
                onResetForm,
                allPokemons,
                globalPokemons,
                getPokemonById
            }}
        >
            {children}
        </PokemonContext.Provider>
    )
}

export default PokemonProvider

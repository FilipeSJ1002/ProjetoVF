import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

function Pokemon() {
    const [pokePesquisa, setPokePesquisa] = useState("")
    const [pokemonEscolhido, setPokemonEscolhido] = useState<any>(null)
    const navigate = useNavigate()

    const pokeData = async () => {
        await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokePesquisa.toLowerCase()}`)
        .then((response: any) => { // .then -> if
          setPokemonEscolhido(response.data) // Armazena o Pokémon retornado
        })
        .catch((error: any) => { // .catch -> ifelse
          console.error("Erro ao buscar o Pokémon", error)
          setPokemonEscolhido(null) // Limpa o estado se houver erro
          alert("Erro, Pokémon não encontrado!")
        })
      }
    

    return (
      <div>
        <button onClick={()=>{navigate("/")}}>Voltar para Home</button>
        <form onSubmit={(e) => {
            e.preventDefault()
            pokeData()
        }}>
            <div>
            <label>Pokémon Misterioso: </label>
            <input 
                type="text" 
                name="pokemon" 
                value={pokePesquisa} 
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPokePesquisa(e.target.value)} 
            />
            </div>

            <button type="submit">Buscar</button>
        </form>

      {pokemonEscolhido ? (
        <div>
          <p>
            <b>Nome do Pokémon:</b> {pokemonEscolhido.name} 
            <br/>
            <b>Código do Pokémon:</b> {pokemonEscolhido.id} 
          </p>
        </div>
      ): (<p><b>Sem pokémon escolhido</b></p>) }
      </div>
    )
  }
  
  export default Pokemon
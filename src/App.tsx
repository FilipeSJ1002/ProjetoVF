
import { useEffect, useState } from 'react'
import Button from './components/Button'
import Text from './components/Text'
import Input from './components/Input'
import axios from 'axios'

function App() {
  const [count, setCount] = useState(0)
  const [inputValue, setInputValue] = useState("")
  const [post, setPost] = useState([])
  const [pokePesquisa, setPokePesquisa] = useState("")
  const [pokemonEscolhido, setPokemonEscolhido] = useState<any>(null)
  useEffect(() => { if (inputValue === "Oi") { console.log("Hello") } }, [inputValue])


  const fetchData = async () => {
    await axios.get("https://jsonplaceholder.typicode.com/posts")
      .then((response: any) => { setPost(response.data) })
  }
  useEffect(() => { fetchData() }, [])
  useEffect(() => { console.log(post) }, [post])

  return (
    <div>
      <Button setCount={setCount} />
      <Text count={count} inputValue={inputValue} />
      <Input inputValue={inputValue} setInputValue={setInputValue} />
      <button type='submit' onClick={() => { console.log({ name: inputValue, counter: count }) }}>Enviar</button>
      
      <ul>
        {post.map((post: any, index: number) => (
          <li key={index}>{index} - {post.title} - {post.body}</li>
        ))}
      </ul>

      <form onSubmit={(e) => {
        e.preventDefault()
        console.log(inputValue)
      }}>
        <div>
          <label>Nome: </label>
          <input type="text" name="nome" value={inputValue} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setInputValue(e.target.value)} />
        </div>

        <button type="submit">Click Aqui</button>
      </form>
      
      <br/>
      <br/>
     
     {/* Pokémon Search Section */}
     <form onSubmit={(e) => {
        e.preventDefault()
        // Faz a busca pelo Pokémon baseado no número ou nome inserido
        axios.get(`https://pokeapi.co/api/v2/pokemon/${pokePesquisa.toLowerCase()}`)
          .then((response: any) => {
            setPokemonEscolhido(response.data) // Armazena o Pokémon retornado
          })
          .catch((error: any) => {
            console.error("Erro ao buscar o Pokémon", error)
            setPokemonEscolhido(null) // Limpa o estado se houver erro
          })
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

      {pokemonEscolhido && (
        <div>
          <p>
            <b>Nome do Pokémon:</b> {pokemonEscolhido.name} {/* Exibe o nome do Pokémon escolhido */} 
            <br/>
            <b>Código do Pokémon:</b> {pokemonEscolhido.id} {/* Exibe o codigo do Pokémon escolhido */}
          </p>
        </div>
      )}

    </div>
  )
}

export default App

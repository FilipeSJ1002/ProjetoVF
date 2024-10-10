import { useEffect, useState } from "react"
import Button from "../components/Button"
import Input from "../components/Input"
import Text from "../components/Text"

function Testes() {
    const [count, setCount] = useState(0)
    const [inputValue, setInputValue] = useState("")
    
    useEffect(() => { if (inputValue === "Oi") { console.log("Hello") } }, [inputValue])
  
    return (
      <div>
        <Button setCount={setCount} />
        <Text count={count} inputValue={inputValue} />
        <Input inputValue={inputValue} setInputValue={setInputValue} />
        <button type='submit' onClick={() => { console.log({ name: inputValue, counter: count }) }}>Enviar</button>
  
        <form onSubmit={(e) => {
          e.preventDefault()
          console.log(inputValue)
        }}> 
        <br/>
          <div>
            <label>Nome: </label>
            <input type="text" name="nome" value={inputValue} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setInputValue(e.target.value)} />
          </div>

          <button type="submit">Click Aqui</button>
        </form>
        
        <br/>
        <br/>
  
      </div>
    )
}
  
  export default Testes
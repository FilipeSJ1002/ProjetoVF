function Input({inputValue, setInputValue}: any) {

    return (
      <div>
        <input value={inputValue} onChange={(e)=>{setInputValue(e.target.value)}}></input>
      </div>
    )
  }
  
  export default Input
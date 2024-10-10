

function Button({setCount}: any) {

  return (
    <div>
        <button onClick={()=>{setCount((state:any)=>state+1)}}>Click +</button>
        &nbsp; {/* Espaço */}
        <button onClick={()=>{setCount((state:any)=>state-1)}}>Click -</button>
    </div>
  )
}

export default Button

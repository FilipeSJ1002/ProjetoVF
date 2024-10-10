import axios from "axios"
import { useEffect, useState } from "react"

function Post() {
    const [post, setPost] = useState([])
    const [lerMais, setLerMais] = useState(false)

    const fetchData = async () => {
        await axios.get("https://jsonplaceholder.typicode.com/posts")
            .then((response: any) => { setPost(response.data) })
    }
    useEffect(() => { fetchData() }, [])
    useEffect(() => { console.log(post) }, [post])

    const handleClick = (e: React.FormEvent<HTMLButtonElement>) => {
        e.preventDefault()
        setLerMais(!lerMais)
    }


    return (
        <div>
            <h2>Posts: </h2>
            {!lerMais ? (<button name="lerMais" onClick={handleClick}>Ler Mais</button>) : <button name="lerMais" onClick={handleClick}>Ler Menos</button>}
            {lerMais &&
                <ul>
                    {post.map((post: any, index: number) => (
                        <li key={index}>{index} - {post.title} - {post.body}</li>
                    ))}
                </ul>
            }

        </div>
    )
}

export default Post
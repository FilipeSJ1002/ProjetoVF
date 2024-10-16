import { useState } from "react"
import { useAuth } from "../contexts/AuthContext"

function Usuario() {
    const [tipoUsuario, setTipoUsuario] = useState("")
    const [nomeUsuario, setNomeUsuario] = useState("")
    const [senhaUsuario, setSenhaUsuario] = useState("")

    const {setIsLoggedIn} = useAuth()

    const autenticarUsuario = () => {
        if (nomeUsuario === "admin" && senhaUsuario === "admin") {
            setTipoUsuario("admin");
            setIsLoggedIn(true);
        } else {
            setTipoUsuario("comum");
            setIsLoggedIn(false);
        }

        // Agora o console.log só será chamado quando o botão for clicado
        console.log({
            nome: nomeUsuario,
            senha: senhaUsuario,
            tipoUsuario: nomeUsuario === "admin" && senhaUsuario === "admin" ? "admin" : "comum"
        });
        console.log({tipoUsuario: tipoUsuario}); // Não carrega na hora então foi necessario fazer a aplicação acima para ser correto
    };

        return (
            <div>
                <form onSubmit={(e) => {
                    e.preventDefault();
                    autenticarUsuario();
                }}>
                    <div>
                        <label>Nome: </label>
                        <input
                            type="text"
                            name="nome"
                            value={nomeUsuario}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                                setNomeUsuario(e.target.value)
                            }
                        />
                        <br/>
                        <label>Senha: </label>
                        <input
                            type="password"
                            name="senha"
                            value={senhaUsuario}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                                setSenhaUsuario(e.target.value)
                            }
                        />
                    </div>
                    <br/>
                    <button type="submit">Click Aqui</button>
                </form>
            </div>
        )
    }
export default Usuario;
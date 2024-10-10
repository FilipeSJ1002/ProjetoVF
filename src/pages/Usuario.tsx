import { useEffect, useState } from "react"
import ProtectedRoutes from "../components/ProtectedRoutes"

function Usuario() {
    const [tipoUsuario, setTipoUsuario] = useState("")
    const [nomeUsuario, setNomeUsuario] = useState("")
    const [senhaUsuario, setSenhaUsuario] = useState("")

    const autenticarUsuario = () => {
        if (nomeUsuario === "admin" && senhaUsuario === "admin") {
            setTipoUsuario("admin");
            ProtectedRoutes.autenticated = true;
        } else {
            setTipoUsuario("comum");
            ProtectedRoutes.autenticated = false;
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
                    <label>Nome: </label>
                    <input
                        type="text"
                        name="nome"
                        value={nomeUsuario}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                            setNomeUsuario(e.target.value)
                        }
                    />
                    <label>Senha: </label>
                    <input
                        type="password"
                        name="senha"
                        value={senhaUsuario}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                            setSenhaUsuario(e.target.value)
                        }
                    />
                    <br/><br/>
                    <button type="submit">Click Aqui</button>
                </form>
            </div>
        )
    }
export default Usuario;
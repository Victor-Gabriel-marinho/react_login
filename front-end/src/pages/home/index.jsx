import "./style.css";
import { useEffect,useState } from "react";
import Excluir from "../../assents/excluir.png";
import api from "../../services/api";

function Home() { 
  const [users, setUsers] = useState([]);


    useEffect( () => {
      api
        .get("/")
        .then((response) => {setUsers(response.data)})
        .catch((err) => {
          console.error("deu erro" + err)
        })
    }, []);

  return (
    <div className="container">
      <form action="">
        <h1 >Cadastro</h1>
        <input type="text" name="nome" placeholder="Nome"  />
        <input type="email" name="email" placeholder="Email" />
        <input type="number" className="Age" name="idade" placeholder="idade" />

        <button type="button">Cadastrar</button>
      </form>

      {users.map((users) => (
        <div className="card">
          <div>
            <p>Nome: <span>{users.nome}</span></p>
            <p>Email: <span>{users.email}</span></p>
            <p>idade:<span>{users.idade}</span></p>
          </div>
          <button>
            <img src={Excluir} alt="" />
          </button>
        </div>
      ))}
    </div>
  );
}

export default Home;
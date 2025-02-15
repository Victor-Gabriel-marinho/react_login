import "./style.css";
import { useEffect,useState } from "react";
import Excluir from "../../assents/excluir.png";
import api from "../../services/api";
import axios from "axios";

function Home() { 
  const [users, setUsers] = useState([]);

  const pegar_dados = (event) => {
    event.preventDefault();
    const user = {
      "nome": event.target[0].value,
      "email": event.target[1].value,
      "idade": event.target[2].value,
    }
  }

  const deletar = async (id) => {
    await axios 
      .delete("http://127.0.0.1:3000" + id)
  }

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
      <form action="" onSubmit={pegar_dados}>
        <h1 >Cadastro</h1>
        <input type="text" name="nome" placeholder="Nome"/>
        <input type="email" name="email" placeholder="Email"/>
        <input type="number" className="Age" name="idade" placeholder="idade" />

        <button type="submite">Cadastrar</button>
      </form>

      {users.map((users) => (
        <div className="card" key={users.id}>
          <div >
            <p >Nome: <span >{users.nome}</span></p>
            <p>Email: <span>{users.email}</span></p>
            <p>idade:<span>{users.idade}</span></p>
          </div>
          <button onClick={() => delete(users.id)}>
            <img src={Excluir} alt="" />
          </button>
        </div>
      ))}
    </div>
  );
}

export default Home;
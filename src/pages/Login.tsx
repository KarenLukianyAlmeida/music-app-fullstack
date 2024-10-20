import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import Context from "../context/Context";

function Login() {
  const [username, setUsername] = useState("");

  const { onLogin } = useContext(Context);

  const navigate = useNavigate();

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    onLogin(username);
    navigate('/search');
  }

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setUsername(event.target.value);
  }

  return (
    <>
      <h1>Music App</h1>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          type="text"
          name="username" id="username"
          placeholder="Qual é o seu nome?"
        />
        <button>Entrar</button>
      </form>
    </>
  )
}

export default Login;
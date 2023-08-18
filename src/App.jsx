import { useState } from 'react'
import './App.css'

function App() {
  const [email, setEmail] = useState("")
  const [senha, setSenha] = useState("")

  function handleEmail(evento){
    console.log(evento)
  }

  return (
    <>
      <header>
        <h1>Login</h1>
      </header>

      <main>
        <form action="">

          <div>
            <label htmlFor="email">Email: </label>
            <input type="email" id='email' placeholder='Digite seu email' onChange={handleEmail}/>
          </div>

          <div>
            <label htmlFor="password">Senha: </label>
            <input type="password" id='senha' placeholder='Digite sua senha' />
          </div>

        </form>

      </main>

  
    </>
  )
}

export default App

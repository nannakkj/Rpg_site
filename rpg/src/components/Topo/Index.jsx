import { useState } from 'react'
import './Topo.css'
import { Routes, Route, Link } from "react-router-dom";

export default function Topo() {
  const [menuAberto] = useState(false)

  return (
    <header className="header-container">
      <nav className={` ${menuAberto ? 'flex' : 'hidden'} header-topicos` }  >
        <Link to={'/characters'}><p id='header-topico'>Characters</p></Link>
        <Link to={'/campanhas'}><p id='header-topico'>Campanhas</p></Link>
        <Link to={'/account'}><p id='header-topico'>Account</p></Link>
      </nav>
            <button className="sm:hidden" onClick={() => setMenuAberto(!menuAberto)}
                >
            <h1>{menuAberto ? '❌' : '🍔'}</h1>
      </button>
    </header>
  )
}

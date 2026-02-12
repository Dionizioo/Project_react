// Importa o React (necessário para usar JSX)
import React from 'react'

// Importa o ReactDOM, que renderiza o React no navegador
import ReactDOM from 'react-dom/client'

// Importa o CSS global (onde definimos a fonte PT Mono)
import './index.css'

// Importa o componente principal da aplicação
import App from './App'

// Cria a raiz da aplicação React
// Aqui dizemos: “React, controle tudo que está dentro do #root”
ReactDOM.createRoot(document.getElementById('root')).render(
  // React.StrictMode ajuda a encontrar problemas durante o desenvolvimento
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

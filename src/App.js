import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios'

function App() {

  const [cep, setCep] = useState('')  
  const [data, setData] = useState('')

  async function buscar_cep(){

    if(cep === ""){
      alert("digite um cep")
      return
    }

    try{
      const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`)
      setData(response.data)
    }catch{
      alert("houve algum erro")
    }
  }


  return (
    <div className='container'>

      <div className='formulario'>
        <h1>Busca Cep</h1>
        
        <input 
          type='text'
          placeholder='Digite o cep...'
          value={cep}
          onChange={(e) => {setCep(e.target.value)}}
        />
        <button type='button' onClick={buscar_cep}>Pesquisar</button>
      </div>

      {Object.keys(data). length > 0 && (

        <div className='informacoes'>
          <h2>Cep: {data.cep} </h2>
          <span> {data.logradouro} </span>
          <span> {data.complemento} </span>
          <span> {data.bairro} </span>
          <span>{data.localidade} - {data.uf} </span>
        </div>

      )}

      
    </div>
  );
}

export default App;

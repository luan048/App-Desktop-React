import React from "react";

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faEye, faEyeSlash} from '@fortawesome/free-solid-svg-icons'

import './App.css'

function visibilityPassword() {
  const inputPassword = document.getElementById('inputPassword');
  const eyeSlash = document.getElementById('eye-slash');
  const eye = document.getElementById('eye')

  if (inputPassword.type === 'password') {
    inputPassword.type = 'text'
    eyeSlash.style.display = 'none'
    eye.style.display = 'block'
  } 
  
  else {
    inputPassword.type = 'password'
    eyeSlash.style.display = 'block'
    eye.style.display = 'none'
  }
}

function messageSucessfully() {
  const messageSucessfully = document.getElementById('messageSucessfully')
  const inputName = document.querySelector('.inputName').value.trim()
  const inputPassword = document.querySelector('.inputPassword').value.trim()

  if (inputName !== '' && inputPassword !== '') {
      messageSucessfully.classList.add('show')

      setTimeout(() => {
          messageSucessfully.classList.remove('show')
      }, 1400)
  }
}

function App() {
  return (
    <div className="container">
      <div id="messageSucessfully" className="messageSucessfully">
        <p>Enviado com Sucesso</p>
      </div>

      <div className="form">
        <h1>Olá, Novo Usuário</h1>
        <div className="bodyForm">
          <p>Este é o meu aplicativo de desktop usando Electron</p>
          <p>Your name:</p>
          <input type="text" id="inputName" className="inputName" placeholder="Name" />
          <p>Password</p>
          <input type="password" id="inputPassword" className="inputPassword" placeholder="Ex: 123456" />
          <FontAwesomeIcon icon={faEyeSlash} onClick={visibilityPassword} id="eye-slash" className="eye-icon fa-solid fa-eye-slash" />
          <FontAwesomeIcon icon={faEye} onClick={visibilityPassword} id="eye" className="eye-icon fa-solid fa-eye" />
          <button className="button" onClick={messageSucessfully}>Enviar</button>
        </div>
      </div>

      <div className="form1">
        <h1>Olá, Novo Usuário</h1>
        <div className="bodyForm">
          <p>Este é o meu aplicativo de desktop usando Electron</p>
          <p>Your name:</p>
          <input type="text" id="inputName" className="inputName" placeholder="Name" />
          <p>Password</p>
          <input type="password" id="inputPassword" className="inputPassword" placeholder="Ex: 123456" />
          <FontAwesomeIcon icon={faEyeSlash} onClick={visibilityPassword} id="eye-slash" className="eye-icon fa-solid fa-eye-slash" />
          <FontAwesomeIcon icon={faEye} onClick={visibilityPassword} id="eye" className="eye-icon fa-solid fa-eye" />
          <button className="button" onClick={messageSucessfully}>Enviar</button>
          <p className="teste">Teste Teste</p>
        </div>
      </div>

    </div>
  );
}

export default App;

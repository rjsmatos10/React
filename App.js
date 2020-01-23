import React from 'react';
import './global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';


function App() {

  return (
    <div id="app">
        <aside>
          <strong>Cadastrar</strong>
            <form>
            <div class="input-block">
            <label htmlFor="github_username">Usuário do Github</label>
            <input name="github_username" id="github_username" required />
            </div>


            <div class="input-block">
           <label htmlFor="github_username">Tecnologias</label>
           <input name="github_username" id="github_username" required />
            </div>

              <div className="input-group">
                 <div class="input-block">   
                   <label htmlFor="latitude">Latitude</label>
                   <input name="latitude" id="latitude" required />
                 </div>

            
                <div class="input-block">     
                   <label htmlFor="longitude">Longitude</label>
                   <input name="longitude" id="longitude" required />
                </div>
            </div>
            <button type="submit">Salvar</button>

            </form>
        </aside>
        <main>
            <ul>
              <li className="dev-item">
                  <header>
                     <img src="https://avatars2.githubusercontent.com/u/49045257?s=460&v=4" alt="Renan Matos"/>
                    <div className="user-info">
                      <strong>Renan Matos</strong>
                      <span>ReactJS , React Native , Node.js</span>
                    </div>
                  </header>
               <p>Repositório de tentativas com react</p>
               <a href="https://github.com/rjsmatos10">Acessar Perfil no Github</a>
              </li>
          <li className="dev-item">
            <header>
              <img src="https://avatars2.githubusercontent.com/u/49045257?s=460&v=4" alt="Renan Matos" />
              <div className="user-info">
                <strong>Renan Matos</strong>
                <span>ReactJS , React Native , Node.js</span>
              </div>
            </header>
            <p>Repositório de tentativas com react</p>
            <a href="https://github.com/rjsmatos10">Acessar Perfil no Github</a>
          </li>
          <li className="dev-item">
            <header>
              <img src="https://avatars2.githubusercontent.com/u/49045257?s=460&v=4" alt="Renan Matos" />
              <div className="user-info">
                <strong>Renan Matos</strong>
                <span>ReactJS , React Native , Node.js</span>
              </div>
            </header>
            <p>Repositório de tentativas com react</p>
            <a href="https://github.com/rjsmatos10">Acessar Perfil no Github</a>
          </li>
          <li className="dev-item">
            <header>
              <img src="https://avatars2.githubusercontent.com/u/49045257?s=460&v=4" alt="Renan Matos" />
              <div className="user-info">
                <strong>Renan Matos</strong>
                <span>ReactJS , React Native , Node.js</span>
              </div>
            </header>
            <p>Repositório de tentativas com react</p>
            <a href="https://github.com/rjsmatos10">Acessar Perfil no Github</a>
          </li>
            </ul>
        </main>

    </div>

  );
}

export default App;

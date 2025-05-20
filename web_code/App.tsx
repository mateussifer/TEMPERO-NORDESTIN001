import React, { useState, useEffect } from 'react';
import './App.css';

const App: React.FC = () => {
  const [page, setPage] = useState<'splash' | 'home' | 'receita'>('splash');

  useEffect(() => {
    if (page === 'splash') {
      const timer = setTimeout(() => setPage('home'), 2000);
      return () => clearTimeout(timer);
    }
  }, [page]);

  if (page === 'splash') {
    return (
      <div className="splash">
        <h1>Tempero Nordestino</h1>
      </div>
    );
  }

  if (page === 'home') {
    return (
      <div className="container">
        <header>
          <h1>Tempero Nordestino</h1>
          <nav>
            <button onClick={() => setPage('home')}>Início</button>
            <button onClick={() => setPage('receita')}>Receita do Dia</button>
          </nav>
        </header>
        <main>
          <h2>Receita do Dia</h2>
          <div className="card" onClick={() => setPage('receita')}>
            <img
              src="https://cdn.panelinha.com.br/receita/1581951773014-moqueca-de-peixe.jpg"
              alt="Baião de Dois"
            />
            <div>
              <h3>Baião de Dois</h3>
              <p>Uma explosão de sabores do sertão!</p>
            </div>
          </div>
        </main>
      </div>
    );
  }

  if (page === 'receita') {
    return (
      <div className="container">
        <header>
          <h1>Tempero Nordestino</h1>
          <nav>
            <button onClick={() => setPage('home')}>Voltar</button>
          </nav>
        </header>
        <main>
          <h2>Baião de Dois</h2>
          <iframe
            width="100%"
            height="315"
            src="https://www.youtube.com/embed/qK7S6EYDUhY"
            title="Baião de Dois"
            allowFullScreen
          ></iframe>
          <p className="descricao">
            O baião de dois é uma receita típica do Nordeste, feita com arroz, feijão verde ou feijão macassa, carne seca e queijo coalho. Sabor e tradição no prato!
          </p>
          <h3>Ingredientes:</h3>
          <ul>
            <li>2 xícaras de arroz</li>
            <li>2 xícaras de feijão verde</li>
            <li>200g de carne seca</li>
            <li>100g de queijo coalho</li>
            <li>Coentro, cebola, alho, sal e azeite</li>
          </ul>
          <h3>Modo de preparo:</h3>
          <ol>
            <li>Cozinhe o feijão e reserve.</li>
            <li>Refogue a cebola e alho, adicione a carne seca.</li>
            <li>Adicione o arroz e o feijão cozido.</li>
            <li>Coloque o queijo coalho e coentro.</li>
            <li>Sirva quente.</li>
          </ol>
        </main>
      </div>
    );
  }

  return null;
};

export default App;

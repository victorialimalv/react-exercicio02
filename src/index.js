import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Round } from './components/Round';
import { Square } from './components/Square';
 


/*
const titulo = React.createElement('h1', {}, 'Meu Primeiro Elemento');
const subtitulo = React.createElement('h2', {}, 'Meu Segundo Elemento');
const container = React.createElement('div', {}, [titulo, subtitulo]);


const lista = React.createElement('div', {}, 
React.createElement('h1', {}, 'Minhas Compras'),
React.createElement('ul', {}, [ 
  React.createElement('li', {className: 'pink'}, 'Morango'),
  React.createElement('li', {className: 'yellow'}, 'Banana'),
  React.createElement('li', {className: 'orange'}, 'Laranja'),
  React.createElement('li', {className: 'red'}, 'Maça'),
  React.createElement('li', {className: 'brow'}, 'Melancia')
]
)
);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  lista
);
*/



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Round />
    <Square />
    
    

  </React.StrictMode>
);







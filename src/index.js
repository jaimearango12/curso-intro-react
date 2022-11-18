import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App/index';
import './index.css';

// function App(props){
//   return(
//   <h1>    ¡{props.saludo}, {props.nombre}!  </h1>)
// }

// function withSaludo(WrappedComponent){
//   return function WrappedComponentWithSaludo (saludo){
//     return function ComponenteDeVerdad(props){
//       return (
//         <React.Fragment>
//           <WrappedComponent {...props} saludo={saludo} />
//           <p>Compañia de WrappedComponent</p>
//         </React.Fragment>
//       )
//     }
//   }
// } 

//const AppWithSaludo = withSaludo(App)('wenas');

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <AppWithSaludo  nombre="Jaime"/> */}
    <App/> 
  </React.StrictMode>
);


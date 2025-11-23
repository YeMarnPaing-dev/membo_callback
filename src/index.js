import React from 'react';
import ReactDOM from 'react-dom/client';
// import App from './App';
// import Callback from './Callback'
import ReactRouter from './ReactRouter';
import { BrowserRouter } from 'react-router';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Callback/> */}
    <BrowserRouter>
     <ReactRouter/>
    </BrowserRouter>
   
    
      </React.StrictMode>
);


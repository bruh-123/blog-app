import React from 'react';
import ReactDOM from 'react-dom';
import { ChakraProvider } from "@chakra-ui/react"
import './styles/global.css';
import { App } from "./components";

ReactDOM.render(
  <React.StrictMode>
      <ChakraProvider>
        <App />
      </ChakraProvider>

  </React.StrictMode>,
  document.getElementById('root')
);


import React from 'react';
import ReactDom from 'react-dom/client';
import HelloWorld from './HelloWorld';
import './styles.css';

ReactDom.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <HelloWorld title="Formulario Feo" />
    </React.StrictMode>
)
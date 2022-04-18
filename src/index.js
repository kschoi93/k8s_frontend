import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import 'index.css';
import App from 'App';
import Home from 'container/Home';
import CnnInference from 'container/ml/Cnn';
import SignUpPage from 'container/member/SignUpPage';


const rootElement = ReactDOM.createRoot(document.getElementById('root'));
rootElement.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="ml" index element={<CnnInference />} />
        <Route path="sign-up" element={<SignUpPage />} />
        <Route path="*" element={<p>There's nothing here: 404!</p>} />
      </Route>
    </Routes>
  </BrowserRouter>
);
import { render } from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import 'index.css';
import App from 'App';
import Home from 'container/Home';
import SignUpPage from 'container/member/SignUpPage';


const rootElement = document.getElementById('root');
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="ml" index element={<Home />} />
        <Route path="sign-up" element={<SignUpPage />} />
        <Route path="*" element={<p>There's nothing here: 404!</p>} />
      </Route>
    </Routes>
  </BrowserRouter>
  , rootElement
);
import { render } from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import 'index.css';
import App from 'App';
import Home from 'container/Home';
import SignInPage from 'container/member/SignInPage';
import SignUpPage from 'container/member/SignUpPage';


const rootElement = document.getElementById('root');
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="project" index element={<Home />} />
        <Route path="sign-in" element={<SignInPage />} />
        <Route path="sign-up" element={<SignUpPage />} />
        <Route path="*" element={<p>There's nothing here: 404!</p>} />
      </Route>
    </Routes>
  </BrowserRouter>
  , rootElement
);
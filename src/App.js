import React from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

import Header from 'container/layout/Header';
import Footer from 'container/layout/Footer';
import Sidebar from 'container/layout/Sidebar';

export default function App() {
  return (
    <>
      <Header />
        <Section>
          <Outlet />
        </Section>
      <Footer />
    </>
  );
};


const Section = styled.div`
  display: flex;
`;
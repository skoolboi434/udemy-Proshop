import React from 'react';
import { Container } from 'react-bootstrap';
import Header from './components/Header';

const App = () => {
  return (
    <>
      <Header />
      <main className='py-3'>
        <h1>Welcome to Proshop</h1>
      </main>
    </>
  );
};

export default App;

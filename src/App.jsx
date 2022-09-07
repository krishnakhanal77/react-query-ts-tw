import React from 'react';
import { Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Login from './pages/Login';
import UserCRUD from './pages/UserCRUD';
import SuperHeroes from './pages/SuperHeroes'
import RQSuperHeroes from './pages/RQSuperHeroes'
import { QueryClientProvider, QueryClient } from 'react-query';
import {ReactQueryDevtools} from 'react-query/devtools'

function App() {
  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient} >
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/login' element={<Login />} />
        <Route path='/users' element={<UserCRUD />} />
        <Route path='/super' element={<SuperHeroes />} />
        <Route path='/query' element={<RQSuperHeroes />} />
      </Routes>
      <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
    </QueryClientProvider>
  );
}

export default App;

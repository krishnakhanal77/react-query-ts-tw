import React from 'react';
import { Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Login from './pages/Login';
import UserCRUD from './pages/UserCRUD';
import QueryForm from './pages/QueryForm';
import SuperHeroes from './pages/SuperHeroes'
import DynamicParallelQuery from './pages/DynamicParallelQuery'
import ParallelPage from './pages/ParallelPage'
import RQSuperHeroes from './pages/RQSuperHeroes'
import PaginationWithQuery from './pages/PaginationWithQuery'
import SuperHeroDetail from './pages/SuperHeroDetail'
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
        <Route path='/query/:id' element={<SuperHeroDetail />} />
        <Route path='/parallel-query' element={<ParallelPage />} />
        <Route path='/pagination' element={<PaginationWithQuery />} />
        <Route path='/dynamic-parallel-query' element={<DynamicParallelQuery ids = {[1, 3]} />} />
        <Route path='/form' element={<QueryForm />} />
      </Routes>
      <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
    </QueryClientProvider>
  );
}

export default App;

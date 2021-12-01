import React, { useEffect } from 'react';
import CardList from '../components/cards/CardList';
import SearchBox from '../components/SearchBox';
import Spinner from '../components/Spinner';
import Header from '../components/Header'
import { Suspense } from 'react';
import './MainPage.css';

const MainPage = ({ robots, fetchRobotsList, isPending, search, onSearchChange }) => {
  
  useEffect(() => {
    fetchRobotsList()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  
  const filteredRobots = robots.filter(({ name }) =>
      name.toLowerCase().includes(search))
  
  return (
    <Suspense fallback={Spinner}>
      <div className="tc">
        <Header />
        <SearchBox search={onSearchChange} />
        { isPending ? <Spinner /> : <CardList robots={filteredRobots} /> }
      </div>
    </Suspense>
  );
};


export default MainPage;
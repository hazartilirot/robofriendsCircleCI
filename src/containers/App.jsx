import React from 'react';
import { connect } from 'react-redux';
import './App.css';
import { fetchRobots, setSearchRobot } from '../action';
import MainPage from '../components/MainPage';

const App = props => {
  
  return (
    <MainPage {...props} />
  );
};

  const mapStateToProps = state => ({
      search: state.searchCombined.search,
      robots: state.robotsCombined.robots,
      isPending: state.robotsCombined.isPending,
      error: state.robotsCombined.error
    
  })

  const mapDispatchToProps = dispatch => ({
    onSearchChange: event => 
      dispatch(setSearchRobot(event.target.value.toLowerCase())),
    fetchRobotsList: () => dispatch(fetchRobots())
  })


export default connect(mapStateToProps, mapDispatchToProps)(App);
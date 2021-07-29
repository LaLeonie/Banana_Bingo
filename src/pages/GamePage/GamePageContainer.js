import React, { useState, useEffect } from 'react';
import axios from 'axios';
import RouteButton from '../../common/containers/RouteButton';
import GameBoard from './components/GameBoard';
import { Body, Footer } from '../../common/components';
import NavBar from '../../common/containers/NavBar';

axios.defaults.baseURL = `https://api.airtable.com/v0/apprXnCLMqQbaOEvK/Table%201?api_key=${process.env.REACT_APP_API_KEY}`;

const GamePageContainer = () => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState('');
  const [loading, setloading] = useState(true);

  const fetchData = () => {
    axios
      .get()
      .then((res) => {
        setResponse(res);
      })
      .catch((err) => setError(err))
      .finally(() => setloading(false));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <NavBar full />
      <Body>
        <GameBoard />
        {response && JSON.stringify(response, null, 4)}
      </Body>
      <Footer>
        <RouteButton route="followup">I'm Done</RouteButton>
      </Footer>
    </>
  );
};

export default GamePageContainer;

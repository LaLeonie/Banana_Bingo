import React from 'react';
import { useSelector } from 'react-redux';

import RouteButton from './../../common/containers/RouteButton';
import { Footer, Body } from '../../common/components';
import NavBar from '../../common/containers/NavBar';

const victoryMessage = (
  <>
    <h2>What a victory!</h2>
    <p>You also get a star for every plant you ate today</p>
  </>
);

const loseMessage = (
  <>
    <h2>Don't worry, tomorrow is another day.</h2>
    <p>You still get a star for every plant you ate today.</p>
  </>
);

const FollowUpPageContainer = () => {
  const gameResult = useSelector((state) => state.userData.today.victory);
  const plantsSelected = useSelector(
    (state) => state.userData.today.dailyPlants
  );

  return (
    <>
      <NavBar />
      <Body>
        {gameResult ? victoryMessage : loseMessage}
        {plantsSelected.map((el) => (
          <div key={el.name}>
            <h3>{el.name}</h3>
            <div>amount: {el.amount}</div>
          </div>
        ))}

        <p>Have you eaten any more plants?</p>
      </Body>
      <Footer centered>
        <RouteButton route="tracker">Yes, I had more</RouteButton>
        <RouteButton route="result">No, that's all I've eaten</RouteButton>
      </Footer>
    </>
  );
};

export default FollowUpPageContainer;

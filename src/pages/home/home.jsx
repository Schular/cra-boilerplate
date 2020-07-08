import React, { useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getTotalValue, itemsSelector, counterSelector } from 'store/selectors/example';
import ExampleContext from 'context/example';
import { incrementCounter, decrementCounter } from 'store/actions/example';

const Counter = () => {
  const counter = useSelector(counterSelector);

  return <h3>{`Counter example: ${counter}`}</h3>;
};

const Home = () => {
  const exampleContext = useContext(ExampleContext);
  const totalValue = useSelector(getTotalValue);
  const items = useSelector(itemsSelector);
  const dispatch = useDispatch();

  return (
    <>
      <h1>Create-react-app boilerplate</h1>
      <h6>{`Hello there, let's render our ${exampleContext}`}</h6>
      {items.map(({ name }) => <li key={name}>{name}</li>)}
      <h6>{`Here is an example of list values selector: ${totalValue}`}</h6>
      <Counter />
      <button onClick={() => dispatch(incrementCounter())} type="button">Increment</button>
      <button onClick={() => dispatch(decrementCounter())} type="button">Decrement</button>
    </>
  );
};

export default Home;

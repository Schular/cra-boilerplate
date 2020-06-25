import React, { useContext } from 'react';

import ExampleContext from 'context/example';

const Home = () => {
  const exampleContext = useContext(ExampleContext);

  return (
    <>
      <h1>Create-react-app boilerplate</h1>
      <h6>{`Hello there, let's render our ${exampleContext}`}</h6>
    </>
  );
};

export default Home;

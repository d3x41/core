import React, { useId } from 'react';
import TestComponent from './components/TestComponent';

const App = () => {
  const id = useId();

  return (
    <div>
      <h1 id={id}>Main App Component</h1>
      <TestComponent />
      <p>Unique ID generated by useId: {id}</p>
    </div>
  );
};

export default App;

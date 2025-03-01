import React from 'react';

const App: React.FC = () => (
  <div>
    <h1>Welcome to Pizza Party!</h1>
    <p>This is a microfrontend example with React and TypeScript.</p>
  </div>
);

export default App;

// Variável não utilizada para forçar um erro de lint
const unusedVariable = 'This will trigger an ESLint error';
const unusedVariable2 = 'This will trigger an ESLint error';
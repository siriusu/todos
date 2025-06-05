import React from 'react';

const Home: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center my-8">Welcome to the Todo App!</h1>
      <p className="text-center text-lg">Navigate to /todos to see the Todo list.</p>
    </div>
  );
};

export default Home;


import { Outlet } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center">Todo App</h1>
        <Outlet />
      </div>
    </div>
  );
}

export default App;

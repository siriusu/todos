import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Todos from './pages/Todos';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      <nav className="bg-blue-600 p-4 shadow-md">
        <ul className="flex justify-center space-x-6">
          <li>
            <Link to="/" className="text-white hover:text-blue-200 text-lg font-semibold">
              Home
            </Link>
          </li>
          <li>
            <Link to="/todos" className="text-white hover:text-blue-200 text-lg font-semibold">
              Todos
            </Link>
          </li>
        </ul>
      </nav>

      <main className="p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/todos" element={<Todos />} />
          {/* その他のルートもここに追加 */}
        </Routes>
      </main>
    </div>
  );
};

export default App;


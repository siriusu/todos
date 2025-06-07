import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage'; // 新しく作成するコンポーネント
import TodoListPage from './pages/TodoListPage'; // 新しく作成するコンポーネント

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center">Todo App</h1>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/todos" element={<TodoListPage />} />
          {/* 他のルートもここに追加 */}
        </Routes>
      </div>
    </div>
  );
}

export default App;

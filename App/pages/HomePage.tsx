import type React from 'react';
import { Link } from 'react-router-dom';

const HomePage: React.FC = () => {
  return (
    <div className="text-center">
      <p className="text-lg mb-4 font-bold">Todoアプリへようこそ！</p>
      <Link to="/todos" className="btn btn-primary rounded-box">
        Todoリストを見る
      </Link>
    </div>
  );
};

export default HomePage;

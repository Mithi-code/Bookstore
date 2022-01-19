import { Routes, Route } from 'react-router-dom';
import Books from './pages/Books';
import Categories from './pages/Categories';
import Navbar from './components/Navbar';
import './styles/main.css';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Books />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </>
  );
}

export default App;

import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Read from './pages/Read';
import Write from './pages/Write';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/read" element={<Read />} />
      <Route path="/write" element={<Write />} />
    </Routes>
  );
}

export default App;

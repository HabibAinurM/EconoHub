import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/login';
import Register from './pages/register';
import Landing from './pages/landing';
import Latihan from './pages/Pelatihan';
import Loker from './pages/loker';
import HollandCodeTest from './pages/econotest';
import Latihanklik from './pages/Latihanlanjut';
import Hasiltes from './components/hasil';
import FormPelatihanPage from './pages/pelatihanklik';
import Lokerklik from './pages/lokerklik';
import Kirimcv from './pages/kirimloker';
import Selamatloker from './pages/selamatloker';
import Selamatlatihan from './pages/selamatlatih';
import Header1 from './pages/dashboard';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/dashboard" element={<Header1 />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/Pelatihan" element={<Latihan />} />
        <Route path="/Latihanlanjut/:id" element={<Latihanklik />} />
        <Route path="/loker" element={<Loker />} />
        <Route path="/econotest" element={<HollandCodeTest />} />
        <Route path="/hasil" element={<Hasiltes />} />
        <Route path="/pelatihanklik/:id" element={<FormPelatihanPage />} />
        <Route path="/lokerklik/:id" element={<Lokerklik />} />
        <Route path="/apply/:id" element={<Kirimcv />} />
        <Route path="/selamatloker" element={<Selamatloker />} />
        <Route path="/selamatlatih" element={<Selamatlatihan />} />
      </Routes>
    </Router>
  );
}

export default App;

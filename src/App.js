import { Route, Routes } from 'react-router-dom';
import './App.css';
import AboutUs from './Pages/AboutUs';
import Blogs from './Pages/Blogs';
import Home from './Pages/Home/Home';
import NotFound from './Pages/NotFound';
import Premium from './Pages/Premium';

function App() {
  return (
    <div className="">
      <Routes>
          <Route path='/' element={<Home />} />
          <Route path='home' element={<Home />} />
          <Route path='/aboutUs' element={<AboutUs />} />
          <Route path='/premium' element={<Premium />} />
          <Route path='/blogs' element={<Blogs />} />

          <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;

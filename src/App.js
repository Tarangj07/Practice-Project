import Main from './pages/Main'
import Blogs from './pages/Blogs'
import Contact from './pages/Contact'
import NoPage from './pages/NoPage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css';

function App() {
  return (
    <div className="App">
      <div className='container'>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Main />}>
              <Route path="blogs" element={<Blogs />} />
              <Route path="contact" element={<Contact />} />
              <Route path="*" element={<NoPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;

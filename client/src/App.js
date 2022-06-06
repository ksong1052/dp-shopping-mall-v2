import { Suspense } from 'react';
import './App.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Register from './pages/register/Register';
import Login from './pages/login/Login';
import NotFound from './pages/notFound/NotFound';

function App() {
  return (
    <div className="App">
      <Suspense fallback={(<div>Loading...</div>)}>
        <Router>

          <Header />

          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/register" element={<Register />} />
            <Route exact path="/login" element={<Login />} />
            <Route path="*" element={<NotFound />} />
          </Routes>

          <Footer />  

        </Router>
      </Suspense>
    </div>
  );
}

export default App;

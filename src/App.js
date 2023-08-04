import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
import PageNotFound from './Components/PageNotFound/PageNotFound';


function App() {
  return (
    <div className="app">
      <Router>
          <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route element={<PageNotFound />} />
          </Routes>
          <Footer />
      </Router>
    </div>
  );
}

export default App;

import { BrowserRouter as Router, Route, Switch, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import PageNotFound from './components/PageNotFound/PageNotFound';


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

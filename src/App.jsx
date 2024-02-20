
import { Route,  Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import About from './Components/About';
import ContactMe from './Components/ContactMe';
import Portfolio from './Components/Portfolio';
import PortfolioCard from './Components/PortfolioCard';
import Header from './Components/Header';



function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<ContactMe/>}/>
        <Route path='/portfolio' element={<Portfolio/>}/>
        <Route path='/portfolio/card' element={<PortfolioCard/>}/>
      </Routes>
    </div>
  );
}

export default App;

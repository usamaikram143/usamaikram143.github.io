import React from 'react';
import Nav from './components/Nav';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import PageNotFound from './components/PageNotFound';

function App() {
  return (
    
    <Router>

      <Nav/>
      <Routes>

        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/projects" element={<Projects/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="*" element={<PageNotFound/>}/>

      </Routes>

    </Router>
   
  );
}

export default App;

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap-icons/font/bootstrap-icons.min.css'
import Home from './Menu/Home';
import './index';

function App() {
  return (
  
    <>
      
      
    
      

 <BrowserRouter>
      
        <Routes>
          <Route path="/" element={<Home></Home>} />
        </Routes>
      </BrowserRouter>        

    
     
     
 
    </>
  
  );
}

export default App;

import { useState } from 'react';
// import { Toaster } from 'react-hot-toast';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Journey from './components/Journey';
import Login from './components/Login';
// import RedBusNavbar from './components/RedBusNavbar';
// import Search from './components/Search';
import SearchResults from './components/SearchResults';
import SeatSelection from './components/SeatSelection';
import JourneyContext from './context/JourneyContext';

function App() {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  return (
    <div className="App">
      <JourneyContext.Provider value={{
        from: from,
        to: to,
        setFrom: setFrom,
        setTo: setTo,
      }}>
      <BrowserRouter>
      {/* these three things will show on every page, but after these will be shown according to the routes */}
        <Routes>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/' element={<Journey Component={Home} />}></Route>
          <Route path='/results' element={<Journey Component={SearchResults} />}></Route>
          <Route path='/book-seats' element={<Journey Component={SeatSelection}/>}></Route>
        </Routes>
      </BrowserRouter>
      </JourneyContext.Provider>
    </div>
  );
}

export default App;

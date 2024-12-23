import { Routes, Route } from 'react-router-dom';
import Acceuil from './Pages/Acceuil';
import Calculator from './Pages/Calculator';
import Formu from './Pages/formu';
import Todo from './Pages/todo';
import NotFound from './Pages/NotFound';
import NavBar from './Pages/Navbar';
import World from './Pages/World';
import { FirstContext } from './Pages/Acceuil';

import { useState } from 'react';

function App() {
  const [IsDark, setIsDark] = useState(false);

  return (
    <FirstContext.Provider value={{ IsDark, setIsDark}}>
      <div className="">
        <NavBar />

        <Routes>
          <Route path="/" element={<Acceuil />} />
          <Route path="/Calculator" element={<Calculator />} />
          <Route path="/Formu" element={<Formu />} />
          <Route path="/TodoList" element={<Todo />} />
          <Route path="/WorldSlider" element={<World />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </FirstContext.Provider>
  );
}

export default App;

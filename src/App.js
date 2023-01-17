import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home, Content } from './components'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/:name' exact element={<Content />} />
      </Routes>

      <h3 style={{ margin: 0, marginLeft: 50, fontFamily: "Montserrat,sans-serif", fontWeight: "900", fontSize: "20px" }}>Developer : Chirayu Pancholi</h3>
    </BrowserRouter>
  );
}

export default App;

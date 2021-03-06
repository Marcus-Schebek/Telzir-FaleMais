import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from "./pages/Home";
import { AppPage } from './pages/AppPage';



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element = { <Home/> } />
        <Route path='/app' element = { <AppPage/> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

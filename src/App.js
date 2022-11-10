import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import DoctorsList from './components/DoctorsList';
import Home from './components/Home';
import Questions from "./components/Questions";
import Scheduler from './components/Scheduler';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/doctors-list" element={<DoctorsList />} />
        <Route exact path="/scheduler/:id" element={<Scheduler />} />
        <Route exact path="/scheduler/questions" element={<Questions />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

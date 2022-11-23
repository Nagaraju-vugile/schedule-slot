import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import DoctorsList from './components/DoctorsList';
import Home from './components/Home';
import Login from "./components/Login";
import MyBookings from "./components/MyBookings";
import Questions from "./components/Questions";
import ReScheduler from "./components/ReScheduler";
import Scheduler from './components/Scheduler';
import QuestionsRescheduler from "./components/rescheduleAppointments/Questions";
import ReasonCancel from "./components/ReasonCancel";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/" element={<Home />} />
        <Route exact path="/doctors-list" element={<DoctorsList />} />
        <Route exact path="/scheduler/:id" element={<Scheduler />} />
        <Route exact path="/scheduler/" element={<Scheduler />} />
        <Route exact path="/scheduler/questions/:id" element={<Questions />} />
        <Route exact path="/scheduler/questions/" element={<Questions />} />
        <Route exact path="/my-bookings" element={<MyBookings />} />
        <Route exact path="/scheduler/re-schedule/:id" element={<ReScheduler />} />
        <Route exact path="/scheduler/re-schedule/" element={<ReScheduler />} />
        <Route exact path="/scheduler/cancel/:id" element={<ReasonCancel />} />
        <Route exact path="/scheduler/cancel/" element={<ReasonCancel />} />
        <Route exact path="/scheduler/re-schedule/questions/:id" element={<QuestionsRescheduler />} />
        <Route exact path="/scheduler/re-schedule/questions/" element={<QuestionsRescheduler />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

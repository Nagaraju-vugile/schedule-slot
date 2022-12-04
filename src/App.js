import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import TypesList from "./components/SchedulerTypesList";
import Login from "./components/Login";
import MyBookings from "./components/MyBookings";
import Questions from "./components/Questions";
import Scheduler from "./components/Scheduler";
import ReasonCancel from "./components/ReasonCancel";
import Profile from "./components/Profile";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/" element={<TypesList />} />
        <Route exact path="/schedulers-list" element={<TypesList />} />
        <Route exact path="/scheduler/:id" element={<Scheduler />} />
        <Route exact path="/scheduler/" element={<Scheduler />} />
        <Route exact path="/scheduler/questions/:id" element={<Questions />} />
        <Route exact path="/scheduler/questions/" element={<Questions />} />
        <Route exact path="/my-bookings" element={<MyBookings />} />
        <Route
          exact
          path="/scheduler/re-schedule/:id"
          element={<Scheduler />}
        />
        <Route exact path="/scheduler/re-schedule/" element={<Scheduler />} />
        <Route exact path="/scheduler/cancel/:id" element={<ReasonCancel />} />
        <Route exact path="/scheduler/cancel/" element={<ReasonCancel />} />
        <Route
          exact
          path="/scheduler/re-schedule/questions/:id"
          element={<Questions />}
        />
        <Route
          exact
          path="/scheduler/re-schedule/questions/"
          element={<Questions />}
        />
         <Route exact path="/scheduler/profile/" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

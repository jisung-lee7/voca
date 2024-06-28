import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Day from "./component/Day";
import DayList from "./component/DayList";
import Header from "./component/Header";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<DayList />} />
          <Route path="/day/:day" element={<Day />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

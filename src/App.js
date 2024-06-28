import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import CreateWord from "./component/CreateWord";
import Day from "./component/Day";
import DayList from "./component/DayList";
import EmptyPage from "./component/EmptyPage";
import Header from "./component/Header";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<DayList />} />
          <Route path="/day/:day" element={<Day />} />
          <Route path="*" element={<EmptyPage />} />
          <Route path="/create_word" element={<CreateWord />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SearchMusic from "./Components/search";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="*" element={<SearchMusic />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

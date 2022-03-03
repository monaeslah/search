import { BrowserRouter as Router,  Routes ,Route} from "react-router-dom";
import SearchMusic from './Components/index'
import Player from './Components/index'

function App() {
  return (
    <div className="App">
   d
     <Router>
       5
        <Routes>
          4
     <Route  path="*" element={  <SearchMusic/>}  />
      
      <Route    path="/player" element={(props) =><Player {...props}/>}/> 
      </Routes>
     </Router>

    </div>
  );
}

export default App;

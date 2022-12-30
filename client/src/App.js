
import RegisterStudent from './components/registerStudent/registerStudent'
import CreateRoom from './components/createRoom/createRoom'
import {Link,Routes, Route} from "react-router-dom"
import RegisterAdmin from "./components/registerAdmin/registerAdmin"

const App = () => {

  return (
    <Routes>
      {/* <div className="App">
        <h1>hello world</h1>
        <Link to="/auth">About Us</Link>
      </div> */}
        <Route exact path='/auth' element={< RegisterStudent />}></Route>
        <Route exact path='/createRoom' element={< CreateRoom />}></Route>
        <Route exact path='/registerAdmin' element={< RegisterAdmin />}></Route>
      </Routes>

  );
}

export default App;

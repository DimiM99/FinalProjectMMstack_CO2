import { Routes, Route } from "react-router-dom"
import Login from "./containers/Login";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <h1>Home</h1> } />
        <Route path="/xxxx" element={ <h1>XXXX</h1> } />
        <Route path="/login" element={ <Login/> } />
      </Routes>
    </div>
  )
}

export default App
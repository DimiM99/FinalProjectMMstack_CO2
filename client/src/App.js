import { Routes, Route } from "react-router-dom"
import Login from "./containers/Login";
import Layout from "./containers/Layout";

function App() {
  return (
    <div className="App">
      <Layout><Routes>
        
          <Route path="/" element={ <h1>Home</h1> } />
          <Route path="/xxxx" element={ <h1>XXXX</h1> } />
          <Route path="/login" element={ <Login/> } />
        
      </Routes>
      <footer>ADFLGKNSLDFKN</footer>
      </Layout>
    </div>
  )
}

export default App
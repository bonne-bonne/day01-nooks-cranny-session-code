// ========== Imports =========== //
import { Routes, Route } from 'react-router-dom'

// Component imports
import Home from './pages/Home/Home.jsx';
import Product from './pages/Product/Product.jsx'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  )
}

export default App
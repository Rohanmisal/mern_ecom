import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./pages/home"
import Search from "./pages/search"
import Cart from "./pages/cart"


const App = () => {
  return (
   <Router>
    {/* Header */}
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/" element={<Search/>}/>
        <Route path="/" element={<Cart/>}/>
      </Routes>
   </Router>
  )
}

export default App

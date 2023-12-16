import React from "react"
import ReactDOM from "react-dom/client"
import Header from "./components/Header"
import Home from "./pages/Home"
import Resume from "./pages/Resume"
import Contact from "./pages/Contact"
import Footer from "./components/Footer"
import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
import "./utils/style/index.css"
import Error404 from "./pages/Error404"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/resume' element={<Resume />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='*' element={<Error404 />} />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>
)

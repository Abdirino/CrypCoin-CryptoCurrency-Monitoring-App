import "./App.css";
import React from "react";

import { ThemeProvider } from './context/ThemeContext'
import Navbar from './Components/Navbar'

function App() {
  return <ThemeProvider>
    <Navbar />
  </ThemeProvider>
}

export default App;

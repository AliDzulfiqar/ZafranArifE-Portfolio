import './App.css';
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from './utils/theme';
import { useState } from "react";
import NavBar from "./components/NavBar";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <NavBar check={darkMode} change={() => setDarkMode(!darkMode)} />
    </ThemeProvider>
  );
}

export default App;

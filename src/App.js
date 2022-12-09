// import home page
import Home from './Pages/Home';
import AboutUs from './Pages/AboutUs';
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import ToggleOnIcon from '@mui/icons-material/ToggleOn';
import ToggleOffIcon from '@mui/icons-material/ToggleOff';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme, createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';


const ColorModeContext = React.createContext({ toggleColorMode: () => { } });


function App() {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const theme = useTheme(prefersDarkMode);
  const colorMode = React.useContext(ColorModeContext);
  return (
    <div>
      <CssBaseline />
      <Router>
        <div className="Central">
          <Routes className="Central">
            <Route
              path="/Home"
              element={<Home />}
            />
            <Route
              path="/"
              element={<Home />}
            />
            <Route
              path="/AboutUs"
              element={<AboutUs />}
            />
          </Routes>
        </div>
        <BottomNavigation showLabels className='DownNav'>
          <BottomNavigationAction component={Link} to="/AboutUs" label="About us" icon={<ContactPageIcon />} />
          <BottomNavigationAction component={Link} to="/Home" label="Home" icon={<HomeIcon />} />
          <BottomNavigationAction onClick={colorMode.toggleColorMode} label=" Toggle Darkmode" icon={theme.palette.mode === 'dark' ? <ToggleOffIcon /> : <ToggleOnIcon />} />
        </BottomNavigation>
      </Router>
    </div>
  );
}

export default function ToggleColorMode() {
  const [mode, setMode] = React.useState('dark');
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    [],
  );

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode],
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

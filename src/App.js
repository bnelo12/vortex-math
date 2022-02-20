import './App.css';

import Renderer from './components/renderer'
import Menu from './components/menu'
import Logo from './components/logo'
import useAppState from './hooks/useAppState'
import { ThemeProvider, createTheme } from '@mui/material/styles';


function App() {

  const appState = useAppState(
    2000,
    2,
  )

const theme = createTheme({
  palette: {
    mode: 'dark',
  },
});

  const [modulus, setmodulus] = appState['modulus'];
  const [multiplier, setMultiplier] = appState['multiplier'];
  const [color_loops, setColorLoops] = appState['color_loops'];

  return (
    <div className="App">
    <ThemeProvider theme={theme}>
      <Logo />
      <Renderer modulus={modulus} multiplier={multiplier} color_loops={color_loops} />
      <Menu
        modulus_state={[modulus, setmodulus]}
        multiplier_state={[multiplier, setMultiplier]}
        color_loops_state={[color_loops, setColorLoops]}
      />
    </ThemeProvider>
    </div>
  );
}

export default App;

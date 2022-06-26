import './App.css';
import { theme } from './themes/main';
import {ThemeProvider} from '@mui/material/styles'
import { Layout } from './components/layout/Layout';


function App() {
  return (
    <ThemeProvider theme={theme}>
      <Layout></Layout>
    </ThemeProvider>
  );
}

export default App;

import CssBaseline from '@material-ui/core/CssBaseline';
import ThemeProvider from './ThemeProvider';
import { ContextProvider } from 'context/provider';
import App from 'components';



export default function ReactSpace() {
  return (
    <ContextProvider>
      <ThemeProvider>
        <CssBaseline />
        <App />
      </ThemeProvider>
    </ContextProvider>
  );
}




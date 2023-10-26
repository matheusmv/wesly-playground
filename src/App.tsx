import './App.css';

import { Provider } from 'react-redux';

import Playground from './pages/Playground';
import CustomThemeProvider from './shared/CustomThemeProvider';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <CustomThemeProvider className="App">
        <Playground />;
      </CustomThemeProvider>
    </Provider>
  );
}

export default App;

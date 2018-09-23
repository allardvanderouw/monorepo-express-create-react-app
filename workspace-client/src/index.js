import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import { blue } from '@material-ui/core/colors';
import i18n from 'i18next';
import createHistory from 'history/createBrowserHistory';

import AppContainer from './components/App/AppContainer';
import locales from './locales';
import configureStore from './store/configureStore';

const userLanguage = 'nl';

// Initialize i18n
i18n.init({
  lng: userLanguage,
  fallbackLng: 'en',
  resources: locales,
});

// MUI Theme
const theme = createMuiTheme({ palette: { primary: blue } });

// Initialize Redux store
const store = configureStore();

// Initialize Router history
const history = createHistory();

// React Render
ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider theme={theme}>
      <BrowserRouter history={history}>
        <AppContainer/>
      </BrowserRouter>
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('root'),
);

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import ExampleContext from 'context/example';
import store from 'store/index';
import GlobalStyle from 'styles/global.styles';
import theme from 'styles/theme.styles';
import App from './core/App';
import * as serviceWorker from './core/serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <ExampleContext.Provider value="Example context">
            <GlobalStyle />
            <App />
          </ExampleContext.Provider>
        </ThemeProvider>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

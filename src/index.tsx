import React from 'react';
import ReactDOM from 'react-dom/client';

import {ThemeProvider} from "styled-components";
import {theme} from "./styles/theme";

import {Provider} from "react-redux";
import store from "./redux/store";

import App from './layout/App';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>

      <ThemeProvider theme={theme}>

          <Provider store={store}>

              <App />
          </Provider>
      </ThemeProvider>
  </React.StrictMode>
);
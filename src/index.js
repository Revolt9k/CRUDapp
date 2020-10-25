import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Provider} from "react-redux";
import store from "./Redux/Store";
import TableContainer from "./Components/Table/TableContainer";

ReactDOM.render(
  <React.StrictMode>
      <Provider store={store}>
          <TableContainer />
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


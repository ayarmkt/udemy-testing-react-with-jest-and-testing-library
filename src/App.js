import React from 'react';
import './App.css';
import ColorButton from './ColorButton/ColorButton';
import { Fragment } from 'react';
import SummaryForm from './SundaesOnDemand/pages/summary/SummaryForm';
import OrderEntry from './SundaesOnDemand/pages/entry/OrderEntry';

function App() {
  return (
    <Fragment>
      {/* <ColorButton /> */}
      {/* <SummaryForm /> */}
      <OrderEntry />
    </Fragment>
  );
}

export default App;

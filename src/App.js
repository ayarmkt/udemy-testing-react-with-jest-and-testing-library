import React from 'react';
import './App.css';
//import ColorButton from './ColorButton/ColorButton';
import { Fragment } from 'react';
//import SummaryForm from './SundaesOnDemand/pages/summary/SummaryForm';
import OrderEntry from './SundaesOnDemand/pages/entry/OrderEntry';
import Container from 'react-bootstrap/Container';
import { OrderDetailsProvider } from './SundaesOnDemand/contexts/OrderDetails';

function App() {
  return (
    <Fragment>
      {/* <ColorButton /> */}
      {/* <SummaryForm /> */}
      <Container>
        <OrderDetailsProvider>
          {/* Summary page and entry page need provider */}
          <OrderEntry />
        </OrderDetailsProvider>
        {/* Confirmation pagr does not need provider */}
      </Container>
    </Fragment>
  );
}

export default App;

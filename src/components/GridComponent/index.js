import React from 'react';
import Row from '../layout/Row';
import Column from '../layout/Column';
import Gutter from '../layout/Gutter';

const GridComponent = () => {
  return <Row title="Grid">
      <div className="App-flexbox">
        <Column>
          <div className="App-column-box" />
        </Column>
        <Gutter />
        <Column>
          <div className="App-column-box" />
        </Column>
        <Gutter />
        <Column>
          <div className="App-column-box" />
        </Column>
        <Gutter />
        <Column>
          <div className="App-column-box" />
        </Column>
        <Gutter />
        <Column>
          <div className="App-column-box" />
        </Column>
        <Gutter />
        <Column>
          <div className="App-column-box" />
        </Column>
        <Gutter />
        <Column>
          <div className="App-column-box" />
        </Column>
        <Gutter />
        <Column>
          <div className="App-column-box" />
        </Column>
        <Gutter />
        <Column>
          <div className="App-column-box" />
        </Column>
        <Gutter />
        <Column>
          <div className="App-column-box" />
        </Column>
        <Gutter />
        <Column>
          <div className="App-column-box" />
        </Column>
        <Gutter />
        <Column>
          <div className="App-column-box" />
        </Column>
      </div>
    </Row>;
}
 
export default GridComponent;
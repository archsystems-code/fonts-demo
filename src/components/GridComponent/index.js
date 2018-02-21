import React from 'react';
import Row from '../layout/Row';
import Column from '../layout/Column';
import Gutter from '../layout/Gutter';
import Padding from '../layout/Padding';

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
      <div className="App-flexbox">
        <Padding amount="20px 120px 0 20px">
          <h5 className="App-featured-ctas">Grid</h5>
          <p style={{ fontWeight: "bold" }} className="text-grey">
            1120px
          </p>
        </Padding>
        <Padding amount="20px 0 0 20px">
          <h5 className="App-featured-ctas">Gutter</h5>
          <p style={{ fontWeight: "bold" }} className="text-grey">
            32px
          </p>
        </Padding>
      </div>
    </Row>;
}
 
export default GridComponent;
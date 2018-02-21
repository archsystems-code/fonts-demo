import React from 'react';
import Row from '../layout/Row';
import Padding from '../layout/Padding';

const ListElements = () => {
  return <Row title="List Elements">
      <Padding amount="15px 0 0 0">
        <div className="App-half">
          <div className="App-flexbox">
            <div className="App-half">
              <ul>
                <li> Lorem Ipsum dolor </li>
                <li> Lorem Ipsum dolor </li>
                <li> Lorem Ipsum dolor </li>
                <li> Lorem Ipsum dolor </li>
                <li> Lorem Ipsum dolor </li>
              </ul>
            </div>
            <div className="App-half">
              <ol>
                <li> Lorem Ipsum dolor </li>
                <li> Lorem Ipsum dolor </li>
                <li> Lorem Ipsum dolor </li>
                <li> Lorem Ipsum dolor </li>
                <li> Lorem Ipsum dolor </li>
              </ol>
            </div>
          </div>
        </div>
      </Padding>
    </Row>;
}
 
export default ListElements;
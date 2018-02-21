import React from 'react';
import Row from '../layout/Row';
import ColorCircle from './ColorCircle';

const Fonts = () => {
  return <Row title="Fonts">
      <table>
        <thead>
          <tr>
            <th><h4 className="App-subtitle">Style Name</h4></th>
            <th><h4 className="App-subtitle">Montserrat</h4></th>
            <th><h4 className="App-subtitle">Siliguri</h4></th>
            <th><h4 className="App-subtitle">Encode Sans</h4></th>
            <th><h4 className="App-subtitle">Uses</h4></th>
            <th><h4 className="App-subtitle">Colors</h4></th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-grey">
            <td>
              <h1 className="App-slider">Slider</h1>
              <h3 className="App-bio-titles-and-names">
                45px / 55px Line Height
              </h3>
            </td>
            <td>
              <h4 className="App-subtitle">Medium / Extra Light</h4>
            </td>
            <td />
            <td />
            <td>
              <h4 className="App-subtitle">Hero Titles, Featured Titles</h4>
            </td>
            <td><ColorCircle color="white" /></td>
          </tr>
        </tbody>
      </table>
    </Row>;
}
 
export default Fonts;
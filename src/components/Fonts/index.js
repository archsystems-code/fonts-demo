import React from 'react';
import Row from '../layout/Row';
import ColorCircle from './ColorCircle';

const Fonts = () => {
  return <Row title="Fonts">
      <table>
        <thead>
          <tr>
            <th>
              <h4 className="App-subtitle">Style Name</h4>
            </th>
            <th>
              <h4 className="App-subtitle">Montserrat</h4>
            </th>
            <th>
              <h4 className="App-subtitle">Siliguri</h4>
            </th>
            <th>
              <h4 className="App-subtitle">Encode Sans</h4>
            </th>
            <th>
              <h4 className="App-subtitle">Uses</h4>
            </th>
            <th>
              <h4 className="App-subtitle">Colors</h4>
            </th>
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
            <td>
              <ColorCircle color="white" />
            </td>
          </tr>
          <tr>
            <td>
              <h1 className="App-title">H1</h1>
              <h3 className="App-bio-titles-and-names">
                35px / 45px Line Height
              </h3>
            </td>
            <td>
              <h4 className="App-subtitle">Extra Light</h4>
            </td>
            <td />
            <td />
            <td>
              <h4 className="App-subtitle">Section Titles, Page Titles</h4>
            </td>
            <td>
              <ColorCircle color="#434343" />
            </td>
          </tr>
          <tr className="bg-grey">
            <td>
              <h2 className="App-tile-titles">H2</h2>
              <h3 className="App-bio-titles-and-names">
                30px / 40px Line Height
              </h3>
            </td>
            <td>
              <h4 className="App-subtitle">Medium / Extra Light</h4>
            </td>
            <td />
            <td />
            <td>
              <h4 className="App-subtitle">Tile titles</h4>
            </td>
            <td>
              <ColorCircle color="#071B34" />
            </td>
          </tr>
          <tr>
            <td>
              <h3 className="App-bio-titles-and-names">H3</h3>
              <h3 className="App-bio-titles-and-names">
                22px / 32px Line Height
              </h3>
            </td>
            <td />
            <td>
              <h4 className="App-subtitle">Medium</h4>
            </td>
            <td />
            <td>
              <h4 className="App-subtitle">Bio Titles, Names</h4>
            </td>
            <td>
              <ColorCircle color="#434343" />
            </td>
          </tr>
          <tr className="bg-grey">
            <td>
              <h4 className="App-subtitle">H4</h4>
              <h3 className="App-bio-titles-and-names">
                18px / 28px Line Height
              </h3>
            </td>
            <td />
            <td>
              <h4 className="App-subtitle">Medium</h4>
            </td>
            <td />
            <td>
              <h4 className="App-subtitle">Tile titles</h4>
            </td>
            <td>
              <ColorCircle color="#404040" />
              <ColorCircle color="white" />
            </td>
          </tr>
          <tr>
            <td>
              <h5 className="App-featured-ctas">H5</h5>
              <h3 className="App-bio-titles-and-names">
                16px / 26px Line Height
              </h3>
            </td>
            <td />
            <td>
              <h4 className="App-subtitle">Bold</h4>
            </td>
            <td />
            <td>
              <h4 className="App-subtitle">Featured CTA's</h4>
            </td>
            <td>
              <ColorCircle color="#61A60D" />
            </td>
          </tr>
          <tr className="bg-grey">
            <td>
              <p>Body Copy</p>
              <h3 className="App-bio-titles-and-names">
                13px / 26px Line Height
              </h3>
            </td>
            <td />
            <td />
            <td>
              <h4 className="App-subtitle">Medium</h4>
            </td>
            <td>
              <h4 className="App-subtitle">
                All Body Copy, CTA's, Tags, product & project listings
              </h4>
            </td>
            <td>
              <ColorCircle color="white" />
              <ColorCircle color="#61A60D" />
            </td>
          </tr>
        </tbody>
      </table>
    </Row>;
}
 
export default Fonts;